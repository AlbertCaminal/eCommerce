import { NextResponse } from "next/server";
import { auth } from "~/server/auth";
import { db } from "~/server/db";
import { accounts, users } from "~/server/db/schema";

/**
 * Borra al usuario (y su "account" asociado) de la base de datos,
 * si está logueado.
 */
export async function DELETE() {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "No hay sesión activa" }, { status: 401 });
  }

  const userId = session.user.id;

  // Borrar la(s) fila(s) en la tabla "accounts"
  await db.delete(accounts).where(accounts.userId.equals(userId));

  // Borrar la fila en la tabla "users"
  await db.delete(users).where(users.id.equals(userId));

  return NextResponse.json({ ok: true }, { status: 200 });
}
