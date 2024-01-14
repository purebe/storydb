'use server';
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { GetSharedPool } from '@/app/pg';

export async function getUserId() {
  const session = await getServerSession(authOptions);
  if (!session) {
    return;
  }

  const pool = await GetSharedPool();
  const res = await pool.query('SELECT id FROM users WHERE email = $1', [session.user.email]);
  const [ row ] = res.rows;
  const { id } = row;
  return id;
}
