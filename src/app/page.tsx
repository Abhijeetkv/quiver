import Client from "./client";
import { getQueryClient } from "@/trpc/server";
import { trpc } from "@/trpc/server";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { Suspense } from "react";

const Page = async () => {
  const queryClient = getQueryClient();

  // ✅ Prefetch your tRPC query
  await queryClient.prefetchQuery(trpc.getUsers.queryOptions());

  return (
    <div className="min-h-screen flex items-center justify-center">
      <HydrationBoundary state={dehydrate(queryClient)}>
        <Suspense fallback={<div>Loading...</div>}>
          <Client />
        </Suspense>
      </HydrationBoundary>
    </div>
  );
};

export default Page;
