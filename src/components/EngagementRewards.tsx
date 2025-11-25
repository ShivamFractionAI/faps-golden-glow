import { X, Megaphone, MessageSquare, TrendingUp, ArrowRight, Code2, Radio, Coins, Send, MessageCircleMore, Clock } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";

interface EngagementRewardsProps {
  isConnected?: boolean;
  onConnect?: () => void;
  userInfo?: {
    name: string;
    username: string;
    avatar?: string;
  };
}

export const EngagementRewards = ({ isConnected = false, onConnect, userInfo }: EngagementRewardsProps) => {
  return (
    <div className="max-w-4xl mx-auto px-8 py-12">
      <div className="bg-card rounded-2xl border border-border p-8">
        <div className="flex items-start justify-between gap-6">
          <div className="flex items-start gap-4 flex-1">
            <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
              <X className="w-6 h-6 text-accent" />
            </div>
            
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-foreground mb-3">
                {isConnected ? "Congratulations!!" : "Connect your 𝕏 account to join the K-FAPS program"}
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {isConnected ? (
                  <>
                    You're now part of the K-FAPS program!
                    <br /><br />
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
                  </>
                ) : (
                  "Earn FAPS for posting about Fraction AI and for every comment or quote on posts that mention us."
                )}
              </p>
            </div>
          </div>
          
          {!isConnected ? (
            <Button 
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-8 flex-shrink-0"
              onClick={onConnect}
            >
              Connect 𝕏 Account
            </Button>
          ) : userInfo && (
            <div className="flex items-center gap-3 px-6 py-3 rounded-xl bg-card border border-border flex-shrink-0">
              {userInfo.avatar && (
                <img 
                  src={userInfo.avatar} 
                  alt={userInfo.name}
                  className="w-12 h-12 rounded-full"
                />
              )}
              <div className="text-left">
                <div className="text-base font-semibold text-foreground">{userInfo.name}</div>
                <div className="text-sm text-muted-foreground">{userInfo.username}</div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Feature Cards - Show after login */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        <Card className="border-accent/20 hover:border-accent/40 transition-colors">
          <CardContent className="pt-6">
            <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
              <Megaphone className="w-6 h-6 text-accent" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">Earn for Posting</h3>
            <p className="text-muted-foreground">Earn FAPS for posting about us.</p>
          </CardContent>
        </Card>

        <Card className="border-accent/20 hover:border-accent/40 transition-colors">
          <CardContent className="pt-6">
            <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
              <MessageSquare className="w-6 h-6 text-accent" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">Earn for Engagement</h3>
            <p className="text-muted-foreground">Earn rewards for comments, quotes, and replies.</p>
          </CardContent>
        </Card>

        <Card className="border-accent/20 hover:border-accent/40 transition-colors">
          <CardContent className="pt-6">
            <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
              <Clock className="w-6 h-6 text-accent" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">Automated Tracking</h3>
            <p className="text-muted-foreground">Rewards are distributed every 6 hours.</p>
          </CardContent>
        </Card>
      </div>

      {/* How It Works */}
      <div className="bg-card rounded-2xl border border-border p-8 mt-8">
        <h2 className="text-2xl font-bold text-center text-foreground mb-8">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-4">
              <X className="w-8 h-8 text-accent" />
            </div>
            <div className="text-lg font-semibold text-foreground mb-2">1. Connect 𝕏</div>
            <p className="text-sm text-muted-foreground">Link your 𝕏 account</p>
          </div>

          <div className="flex flex-col items-center text-center relative">
            <ArrowRight className="hidden md:block absolute -left-12 top-8 w-6 h-6 text-accent/40" />
            <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-4">
              <MessageSquare className="w-8 h-8 text-accent" />
            </div>
            <div className="text-lg font-semibold text-foreground mb-2">2. Post/Quote/Comment</div>
            <p className="text-sm text-muted-foreground">Engage with Fraction AI content</p>
            <ArrowRight className="hidden md:block absolute -right-12 top-8 w-6 h-6 text-accent/40" />
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-4">
              <TrendingUp className="w-8 h-8 text-accent" />
            </div>
            <div className="text-lg font-semibold text-foreground mb-2">3. Earn FAPS</div>
            <p className="text-sm text-muted-foreground">Rewards are distributed every 6 hours.</p>
          </div>
        </div>
      </div>

      {/* Quick Links */}
      <div className="mt-8">
        <h2 className="text-2xl font-bold text-center text-foreground mb-6">Quick Links</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <a 
            href="https://fractionai.xyz/dapp" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group"
          >
            <Card className="border-accent/20 hover:border-accent transition-all h-full bg-gradient-to-br from-card to-card/50">
              <CardContent className="pt-6 h-full flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-foreground">dApp</h3>
                  <ArrowRight className="w-5 h-5 text-accent/60 group-hover:text-accent group-hover:translate-x-1 transition-all" />
                </div>
                <div className="flex-1 flex items-center justify-center py-8">
                  <Code2 className="w-20 h-20 text-accent/80" />
                </div>
              </CardContent>
            </Card>
          </a>

          <a 
            href="https://fractionai.xyz/spaces" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group"
          >
            <Card className="border-accent/20 hover:border-accent transition-all h-full bg-gradient-to-br from-card to-card/50">
              <CardContent className="pt-6 h-full flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-foreground">Spaces</h3>
                  <ArrowRight className="w-5 h-5 text-accent/60 group-hover:text-accent group-hover:translate-x-1 transition-all" />
                </div>
                <div className="flex-1 flex items-center justify-center py-8">
                  <Radio className="w-20 h-20 text-accent/80" />
                </div>
              </CardContent>
            </Card>
          </a>

          <a 
            href="https://fractionai.xyz/dapp/faps" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group"
          >
            <Card className="border-accent/20 hover:border-accent transition-all h-full bg-gradient-to-br from-card to-card/50">
              <CardContent className="pt-6 h-full flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-foreground">FAPS</h3>
                  <ArrowRight className="w-5 h-5 text-accent/60 group-hover:text-accent group-hover:translate-x-1 transition-all" />
                </div>
                <div className="flex-1 flex items-center justify-center py-8">
                  <Coins className="w-20 h-20 text-accent/80" />
                </div>
              </CardContent>
            </Card>
          </a>

          <a 
            href="https://twitter.com/fractionai" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group"
          >
            <Card className="border-accent/20 hover:border-accent transition-all h-full bg-gradient-to-br from-card to-card/50">
              <CardContent className="pt-6 h-full flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-foreground">𝕏</h3>
                  <ArrowRight className="w-5 h-5 text-accent/60 group-hover:text-accent group-hover:translate-x-1 transition-all" />
                </div>
                <div className="flex-1 flex items-center justify-center py-8">
                  <X className="w-20 h-20 text-accent/80" />
                </div>
              </CardContent>
            </Card>
          </a>

          <a 
            href="https://discord.gg/fractionai" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group"
          >
            <Card className="border-accent/20 hover:border-accent transition-all h-full bg-gradient-to-br from-card to-card/50">
              <CardContent className="pt-6 h-full flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-foreground">Discord</h3>
                  <ArrowRight className="w-5 h-5 text-accent/60 group-hover:text-accent group-hover:translate-x-1 transition-all" />
                </div>
                <div className="flex-1 flex items-center justify-center py-8">
                  <MessageCircleMore className="w-20 h-20 text-accent/80" />
                </div>
              </CardContent>
            </Card>
          </a>

          <a 
            href="https://t.me/fractionai" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group"
          >
            <Card className="border-accent/20 hover:border-accent transition-all h-full bg-gradient-to-br from-card to-card/50">
              <CardContent className="pt-6 h-full flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-foreground">Telegram</h3>
                  <ArrowRight className="w-5 h-5 text-accent/60 group-hover:text-accent group-hover:translate-x-1 transition-all" />
                </div>
                <div className="flex-1 flex items-center justify-center py-8">
                  <Send className="w-20 h-20 text-accent/80" />
                </div>
              </CardContent>
            </Card>
          </a>
        </div>
      </div>
    </div>
  );
};
