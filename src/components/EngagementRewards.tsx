import { X } from "lucide-react";
import { Button } from "./ui/button";

interface EngagementRewardsProps {
  isConnected?: boolean;
}

export const EngagementRewards = ({ isConnected = false }: EngagementRewardsProps) => {
  return (
    <div className="max-w-4xl mx-auto px-8 py-12">
      <div className="bg-card rounded-2xl border border-border p-8">
        <div className="flex items-start justify-between gap-6">
          <div className="flex items-start gap-4 flex-1">
            <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
              <X className="w-6 h-6 text-accent" />
            </div>
            
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-foreground mb-3">Engagement Rewards</h2>
              <p className="text-muted-foreground leading-relaxed">
                Connect your 𝕏 account to join the K-FAPS program
                <br /><br />
                Earn FAPS for posting about Fraction AI and for every comment or quote on posts that mention us.
              </p>
              
              {isConnected && (
                <div className="mt-6 p-4 bg-muted/30 rounded-lg border border-border">
                  <p className="text-foreground">
                    You can track your rewards anytime at{" "}
                    <a 
                      href="https://fractionai.xyz/dapp/faps" 
                      className="text-accent hover:underline font-semibold"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      FAPS page
                    </a>
                    {" "}on the{" "}
                    <a 
                      href="https://fractionai.xyz/dapp" 
                      className="text-accent hover:underline font-semibold"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      dApp
                    </a>
                  </p>
                </div>
              )}
            </div>
          </div>
          
          {!isConnected && (
            <Button 
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-8 flex-shrink-0"
            >
              Connect 𝕏 Account
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};
