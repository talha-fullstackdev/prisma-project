import prisma from "@/lib/prisma";
////////////////////////////// get user
export async function GET(request) {
  const users = await prisma.user.findMany();
  return Response.json({ users, success: true, status: 200 });
}
////////////////////////////// post/add user
export async function POST(request) {
  const body = await request.json();
  const { name, email } = body;
  const checkEmail = await prisma.user.findUnique({
    where: { email: email },
  });
  if (checkEmail) {
    return Response.json({
      msg: "email already! used try another one",
      statusbar: 409,
    });
  }
  const user = await prisma.user.create({
    data: { name, email },
  });

  return Response.json({ user, success: true, status: 201 });
}
////////////////////////////// delete user
export async function DELETE(request) {
  const body = await request.json();
  const { id } = body;
  const deleteUser = await prisma.user.delete({
    where: { id: id },
  });
  if (deleteUser) {
    return Response.json({ msg: "user deleted succesfully!" });
  }
}
