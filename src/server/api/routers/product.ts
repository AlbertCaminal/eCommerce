import { z } from "zod";
import { createTRPCRouter, publicProcedure, protectedProcedure } from "~/server/api/trpc";
import { products } from "~/server/db/schema";

export const productsRouter = createTRPCRouter({
  // Obtener todos los productos
  getAllProducts: publicProcedure.query(async ({ ctx }) => {
    return await ctx.db.select().from(products);
  }),

  // Añadir un nuevo producto
  addProduct: protectedProcedure
    .input(
      z.object({
        name: z.string(),
        price: z.number(),
        category: z.string(),
        description: z.string().optional(),
        imageUrl: z.string().optional(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      try {
        await ctx.db.insert(products).values({
          ...input,
          imageUrl: input.imageUrl ?? ""
        });
        return { success: true, message: "Producto añadido exitosamente" };
      } catch (error) {
        console.error("Error al añadir producto:", error);
        throw new Error("No se pudo añadir el producto");
      }
    }),
});
