
import { authClient } from "@/lib/auth-client";
import { Button } from "@/components/ui/button";
import { requireAuth } from "@/lib/auth-utils";
import { caller } from "@/trpc/server";
import LogOutButton from "@/app/logout"

const Page =  async () => {
  await requireAuth();

  const data = await caller.getUsers();

  return (
    <div className="min-h-screen min-w-screen flex flex-col gap-y-6  items-center justify-center">
      protected routes
      <div>
        {JSON.stringify(data)}
      </div>
      <LogOutButton />
    </div>
  );
};

export default Page;
