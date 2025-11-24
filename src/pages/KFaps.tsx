import { useState } from "react";
import { Sidebar } from "@/components/Sidebar";
import { Header } from "@/components/Header";
import { EmptyState } from "@/components/EmptyState";
import { EngagementRewards } from "@/components/EngagementRewards";

type ViewState = "not-logged-in" | "logged-in-not-connected" | "connected";

const KFaps = () => {
  const [viewState, setViewState] = useState<ViewState>("not-logged-in");

  const handleLogin = () => {
    setViewState("logged-in-not-connected");
  };

  const handleConnectX = () => {
    setViewState("connected");
  };

  const getUserInfo = () => {
    if (viewState === "not-logged-in") return undefined;
    if (viewState === "connected") {
      return {
        name: "Shivam Raj | FrAI",
        username: "@ShivamRaj715781",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=ShivamRaj"
      };
    }
    return null;
  };

  const getWalletAddress = () => {
    if (viewState === "logged-in-not-connected" || viewState === "connected") {
      return "0x4e3f...b718";
    }
    return undefined;
  };

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      
      <div className="flex-1 flex flex-col">
        <Header 
          title="K-FAPS"
          userInfo={getUserInfo()}
          walletAddress={getWalletAddress()}
          onLogin={handleLogin}
        />
        
        <main className="flex-1">
          {viewState === "not-logged-in" && <EmptyState />}
          {viewState === "logged-in-not-connected" && <EngagementRewards onConnect={handleConnectX} />}
          {viewState === "connected" && <EngagementRewards isConnected userInfo={getUserInfo()} />}
        </main>
      </div>
    </div>
  );
};

export default KFaps;
