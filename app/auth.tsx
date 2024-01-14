import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from 'next/navigation';

export async function GetSession() {
  return getServerSession(authOptions);
}

export async function Auth() {
  const session = await GetSession();
  if (!session) {
    redirect('/login', 'push');
    return false;
  }
  return true;
}
