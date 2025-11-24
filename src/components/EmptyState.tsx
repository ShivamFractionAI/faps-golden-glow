import { Search } from "lucide-react";

export const EmptyState = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4">
      <div className="relative mb-8">
        <div className="w-32 h-32 rounded-full border-2 border-accent flex items-center justify-center">
          <Search className="w-12 h-12 text-accent" />
        </div>
        <div className="absolute -top-2 -right-2 w-8 h-8 border-2 border-accent rounded-full flex items-center justify-center bg-background">
          <span className="text-accent text-xl font-bold" style={{ transform: 'rotate(-15deg)' }}>&lt;</span>
        </div>
      </div>
      
      <h2 className="text-2xl font-semibold text-muted-foreground mb-4">No data</h2>
      <p className="text-foreground text-center max-w-md">
        <a href="#" className="text-accent hover:underline">Log In</a>
        {" "}or{" "}
        <a href="#" className="text-accent hover:underline">Sign Up</a>
        {" "}to access your K-FAPS page
      </p>
    </div>
  );
};
