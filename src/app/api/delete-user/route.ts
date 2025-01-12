// app/api/delete-user/route.ts
import { NextResponse } from "next/server";
import { auth } from "~/server/auth";
import { db } from "~/server/db";
import { accounts, sessions, users } from "~/server/db/schema";
// Si tienes una tabla extra, e.g. e_commerce_users, la importas también:
// import { e_commerce_users } from "~/server/db/schema";
import { eq } from "drizzle-orm";

export async function DELETE() {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json(
      { error: "No hay sesión activa" },
      { status: 401 },
    );
  }

  const userId = session.user.id;

  // Borra las cuentas asociadas a ese usuario
  await db.delete(accounts).where(eq(accounts.userId, userId));

  // Borra las sesiones activas de ese usuario, por si hay múltiples
  await db.delete(sessions).where(eq(sessions.userId, userId));

  // Si tienes otras tablas relacionadas, bórralas también, p. ej:
  // await db.delete(e_commerce_users).where(eq(e_commerce_users.userId, userId));

  // Finalmente, borra el usuario
  await db.delete(users).where(eq(users.id, userId));

  return NextResponse.json({ ok: true }, { status: 200 });
}
