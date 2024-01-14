'use server';
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { GetSharedPool } from '@/app/pg';

export async function requestRenameProject(id, newTitle) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return;
  }

  const pool = await GetSharedPool();
  await pool.query('UPDATE Project SET name = $2 where id = $1', [id, newTitle]);
}
