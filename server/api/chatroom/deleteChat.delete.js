import { prisma } from "../../utils/prisma.js";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  //odayı bul
  const checkDeletes = await prisma.ChatRooms.findFirst({
    where: {
      id: body.roomId,
    },
  });

  //user'ın silme isteğini db'ye yaz
  if (checkDeletes.user1_deleted.userId == body.userId) {
    checkDeletes.user1_deleted.deleted = true;
    const updateDeletes = await prisma.ChatRooms.update({
      where: {
        id: body.roomId,
      },
      data: {
        user1_deleted: {
          userId: body.userId,
          deleted: true,
        },
      },
    });
  } else if (checkDeletes.user2_deleted.userId == body.userId) {
    checkDeletes.user2_deleted.deleted = true;
    const updateDeletes = await prisma.ChatRooms.update({
      where: {
        id: body.roomId,
      },
      data: {
        user2_deleted: {
          userId: body.userId,
          deleted: true,
        },
      },
    });
  }

  //eğer herkes chat'i sildiyse, chat'i database'den sil
  if (
    checkDeletes.user1_deleted.deleted == true &&
    checkDeletes.user2_deleted.deleted == true
  ) {
    const deleteChatroom = await prisma.ChatRooms.delete({
      where: {
        id: body.roomId,
      },
    });
    return deleteChatroom;
  } else return "no db deletion happened";
});
