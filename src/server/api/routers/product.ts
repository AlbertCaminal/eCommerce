/* eslint-disable @typescript-eslint/no-unused-vars */
import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

// IMPORTA tus tablas desde schema.ts
import { products, productImages } from "~/server/db/schema";
import { sql, eq, getTableColumns } from "drizzle-orm";

export const productsRouter = createTRPCRouter({
  // Ejemplo de endpoint existente
  getAllProducts: publicProcedure.query(async ({ ctx }) => {
    const results = await ctx.db
      .select({
        ...getTableColumns(products),
        images: sql`json_group_array(${productImages.url})`.as("images"),
      })
      .from(products)
      .leftJoin(productImages, eq(products.id, productImages.productId))
      .groupBy(...Object.values(getTableColumns(products)));

    return results.map(({ images, ...rest }) => ({
      ...rest,
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      images: images ? (JSON.parse(images as string) as Array<string>) : null,
    }));
  }),

  // Nuevo endpoint para insertar múltiples imágenes
  createProductImages: publicProcedure
    .input(
      z.object({
        productId: z.number(),
        urls: z.array(z.string().url()),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      // Construimos un array de filas para insertar (una por URL)
      const rowsToInsert = input.urls.map((url) => ({
        productId: input.productId,
        url,
      }));

      // Insertamos en la tabla "product_images"
      const result = await ctx.db.insert(productImages).values(rowsToInsert);

      // Retornamos lo que necesites (por ejemplo, las filas insertadas o algún mensaje)
      return result;
    }),

  createProduct: publicProcedure
    .input(
      z.object({
        name: z.string(),
        size: z.string(),
        color: z.string(),
        price: z.number(),
        category: z.string(),
        description: z.string(),
        imageUrls: z.array(z.string()),
      }),
    )
    .mutation(
      async ({
        ctx,
        input: { name, size, color, price, category, description, imageUrls },
      }) => {
        const product = await ctx.db
          .insert(products)
          .values({
            name,
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-explicit-any
            size: size as any,
            color,
            price,
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-explicit-any
            category: category as any,
            description,
          })
          .returning({ insertedId: products.id });

        await ctx.db.insert(productImages).values(
          imageUrls.map((url) => ({
            productId: product[0]!.insertedId,
            url,
          })),
        );
      },
    ),
});
