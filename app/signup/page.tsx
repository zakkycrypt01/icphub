'use client';

import { useState } from 'react';
import { Header } from "@/components/header";
import { SignupOptions } from "@/components/signup-options";
import { IdentityKitProvider, ConnectWallet } from "@nfid/identitykit/react";
import { Button } from "@/components/ui/button";

export default function SignupPage() {
  const [isWalletConnected, setIsWalletConnected] = useState(false);

  const handleConnectSuccess = () => {
    setIsWalletConnected(true);
  };

  const handleConnectFailure = (e: Error) => {
    console.error("Failed to connect wallet:", e);
    alert("Failed to connect wallet. Please try again."); // User-friendly feedback
  };

  const handleDisconnect = async () => {
    try {
      // Example wallet disconnect logic
      // await wallet.disconnect(); 
      setIsWalletConnected(false);
    } catch (error) {
      console.error("Error disconnecting wallet:", error);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center">Become an IC Nomad</h1>
        <IdentityKitProvider>
          {!isWalletConnected ? (
            <div className="flex flex-col items-center">
              <p className="mb-4 text-center transition-opacity duration-300">
                Connect your wallet to get started
              </p>
              <ConnectWallet
                connectButtonComponent={() => (
                  <Button className='bg-transparent hover:bg-gray-700 text-[#A5B9D0] border-2 border-[#A5B9D0]' onClick={handleConnectSuccess}>Connect Wallet</Button>
                )}
                connectedButtonComponent={() => (
                  <Button onClick={handleDisconnect}>Disconnect Wallet</Button>
                )}
              />
            </div>
          ) : (
            <div className="flex flex-col items-center">
              <p className="mb-4 text-center transition-opacity duration-300">
                Wallet connected successfully!
              </p>
              <Button onClick={handleDisconnect} className="mb-4 bg-transparent hover:bg-gray-700 text-[#A5B9D0] border-2 border-[#A5B9D0]">
                Disconnect Wallet
              </Button>
              <SignupOptions />
            </div>
          )}
        </IdentityKitProvider>
      </main>
    </div>
  );
}
