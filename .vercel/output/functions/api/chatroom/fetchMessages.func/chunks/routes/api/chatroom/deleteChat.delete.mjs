import { d as defineEventHandler, r as readBody, a as prisma } from '../../../_/nitro.mjs';
import '@prisma/client';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:url';
import 'ipx';
import 'node:fs';
import 'node:path';
import 'node:crypto';

const deleteChat_delete = defineEventHandler(async (event) => {
  const body = await readBody(event);
  const checkDeletes = await prisma.ChatRooms.findFirst({
    where: {
      id: body.roomId
    }
  });
  if (checkDeletes.user1_deleted.userId == body.userId) {
    checkDeletes.user1_deleted.deleted = true;
    await prisma.ChatRooms.update({
      where: {
        id: body.roomId
      },
      data: {
        user1_deleted: {
          userId: body.userId,
          deleted: true
        }
      }
    });
  } else if (checkDeletes.user2_deleted.userId == body.userId) {
    checkDeletes.user2_deleted.deleted = true;
    await prisma.ChatRooms.update({
      where: {
        id: body.roomId
      },
      data: {
        user2_deleted: {
          userId: body.userId,
          deleted: true
        }
      }
    });
  }
  if (checkDeletes.user1_deleted.deleted == true && checkDeletes.user2_deleted.deleted == true) {
    const deleteChatroom = await prisma.ChatRooms.delete({
      where: {
        id: body.roomId
      }
    });
    return deleteChatroom;
  } else return "no db deletion happened";
});

export { deleteChat_delete as default };
//# sourceMappingURL=deleteChat.delete.mjs.map
