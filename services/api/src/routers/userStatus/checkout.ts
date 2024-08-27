import { z } from "zod";
import { prisma } from "../../../prisma/client";
import { publicProcedure } from "../../trpc";

export const checkout = publicProcedure
  .input(z.string())
  .mutation(async ({ input: userId }) => {
    return await prisma.userStatus.create({
      data: {
        User: {
          connect: {
            id: userId,
          },
        },
        Status: {
          connect: {
            name: "退勤",
          },
        },
      },
    });
  });
