import { SidebarTrigger } from "./ui/sidebar";

const AppHeader = () => {
  return (
    <header className="flex items-center h-14 shrink-0 gap-2 bg-background  border-b px-4">
      <SidebarTrigger />
    </header>
  );
};

export default AppHeader;
