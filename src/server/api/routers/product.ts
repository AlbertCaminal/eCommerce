/* eslint-disable @typescript-eslint/no-unused-vars */
import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

// IMPORTA tus tablas desde schema.ts
import { products, productImages } from "~/server/db/schema";

export const productsRouter = createTRPCRouter({
  // Ejemplo de endpoint existente
  getAllProducts: publicProcedure.query(async ({ ctx }) => {
    return await ctx.db.select().from(products);
  }),

  // Nuevo endpoint para insertar múltiples imágenes
  createProductImages: publicProcedure
    .input(
      z.object({
        productId: z.number(),
        urls: z.array(z.string().url()),
      })
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
});
