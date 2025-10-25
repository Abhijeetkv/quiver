import { createTRPCRouter} from "../init";
import { workflowsRouter } from "@/features/workflows/server/routers";

export const appRouter = createTRPCRouter({
  workflows: workflowsRouter
});

// ✅ Export router type
export type AppRouter = typeof appRouter;
