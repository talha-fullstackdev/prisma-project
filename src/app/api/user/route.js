import prisma from "@/lib/prisma";

export async function GET(request) {
  const users = await prisma.user.findMany();
  return Response.json({ users, success: true ,status:200});
}

export async function POST(request) {
  const body = await request.json();
  const { name, email } = body;

  const user = await prisma.user.create({
    data: { name, email },
  });

  return Response.json({ user, success: true, status: 201 });
}
