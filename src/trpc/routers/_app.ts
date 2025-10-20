import { inngest } from "@/inngest/client";
import { createTRPCRouter, protectedProcedure } from "../init";
import prisma from "@/lib/db";
import { google } from "@ai-sdk/google";
import { generateText } from "ai";

export const appRouter = createTRPCRouter({
  testAi: protectedProcedure.mutation(async () => {
    await inngest.send({
    name: "execute/ai",
  })
    return { success: true, message: "job queued" };
  }),

  // ✅ Query: get workflows
  getWorkflows: protectedProcedure.query(async () => {
    return prisma.workflow.findMany();
  }),

  // ✅ Mutation: create a new workflow
  createWorkflow: protectedProcedure.mutation(async () => {
    await inngest.send({
      name: "test/hello.world",
      data: {
        email: "abhi@gmail.com",
      },
    });
    return { success: true, message: "job queued" };
  }),
});

// ✅ Export router type
export type AppRouter = typeof appRouter;
