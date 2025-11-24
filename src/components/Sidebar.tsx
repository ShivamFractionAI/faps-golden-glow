import { Trophy } from "lucide-react";
import { NavLink } from "./NavLink";

export const Sidebar = () => {
  return (
    <aside className="w-64 h-screen bg-sidebar-background border-r border-sidebar-border flex flex-col">
      <div className="p-6 border-b border-sidebar-border">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center">
            <span className="text-xl font-bold">F</span>
          </div>
          <span className="text-lg font-semibold text-foreground">Fraction AI</span>
        </div>
      </div>
      
      <nav className="flex-1 p-4">
        <NavLink
          to="/"
          className="flex items-center gap-3 px-4 py-3 rounded-lg text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-colors"
          activeClassName="bg-sidebar-accent text-sidebar-accent-foreground"
        >
          <Trophy className="w-5 h-5" />
          <span className="font-medium">K-Faps</span>
        </NavLink>
      </nav>
    </aside>
  );
};
