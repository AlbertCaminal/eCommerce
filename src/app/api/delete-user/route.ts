// app/api/delete-user/route.ts
import { NextResponse } from "next/server";
import { auth } from "~/server/auth";
import { db } from "~/server/db";
import { accounts, users } from "~/server/db/schema";
import { eq } from "drizzle-orm";

/**
 * Borra al usuario y su "account" asociado de la base de datos,
 * si hay sesión activa.
 */
export async function DELETE() {
  // Obtenemos la sesión actual (usuario logueado).
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json(
      { error: "No hay sesión activa" },
      { status: 401 },
    );
  }

  const userId = session.user.id;

  // 1. Borrar la(s) fila(s) en la tabla "accounts"
  await db.delete(accounts).where(eq(accounts.userId, userId));

  // 2. Borrar la fila en la tabla "users"
  await db.delete(users).where(eq(users.id, userId));

  return NextResponse.json({ ok: true }, { status: 200 });
}
