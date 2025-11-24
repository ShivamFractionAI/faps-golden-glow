import { Button } from "./ui/button";

interface HeaderProps {
  title: string;
  userInfo?: {
    name: string;
    username: string;
    avatar?: string;
  } | null;
  walletAddress?: string;
  onLogin?: () => void;
}

export const Header = ({ title, userInfo, walletAddress, onLogin }: HeaderProps) => {
  return (
    <header className="border-b border-border bg-background">
      <div className="flex items-center justify-between px-8 py-4">
        <h1 className="text-3xl font-bold text-foreground tracking-wide">{title}</h1>
        
        <div className="flex items-center gap-4">
          {walletAddress && (
            <div className="px-4 py-2 rounded-lg border border-accent text-accent text-sm font-mono">
              {walletAddress}
            </div>
          )}
          
          {userInfo && (
            <div className="flex items-center gap-3 px-4 py-2 rounded-xl bg-card border border-border">
              {userInfo.avatar && (
                <img 
                  src={userInfo.avatar} 
                  alt={userInfo.name}
                  className="w-10 h-10 rounded-full"
                />
              )}
              <div className="text-left">
                <div className="text-sm font-semibold text-foreground">{userInfo.name}</div>
                <div className="text-xs text-muted-foreground">{userInfo.username}</div>
              </div>
            </div>
          )}
          
          {!userInfo && !walletAddress && (
            <Button 
              variant="default" 
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold"
              onClick={onLogin}
            >
              Log In / Sign Up
            </Button>
          )}
        </div>
      </div>
    </header>
  );
};
