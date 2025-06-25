// src/app/api/user/route.js
import prisma from '@/lib/prisma'; // or use relative path if @ alias not set

export async function GET(request) {
  const users = await prisma.user.findMany();
  return Response.json({users,success:true});
}

export async function POST(request) {

  const body = await request.json();
  const { name, email } = body;

  const user = await prisma.user.create({
    data: { name, email },
  });

  return Response.json({user, success:true,status: 201});
}
