"use client";
import React from "react";
import style from "./style.module.css";
import { Button } from "@/components";
import { useState } from "react";
function Navbar() {
  const [wallet, setwallet] = useState<null | string>(null);

  const connectWallet = async () => {
    try {
      const { solana } = window as any;
      const response = await solana.connect();
      setwallet(response.publicKey.toString());
    }catch(_) {
      alert("You have no wallet in your browser")
    }
    
  };

  const parseWalletKey = (string: string) => {
    return `${string.slice(0, 5)}......${string.slice(-5)}`;
  };

  return (
    <>
      <div className={style.toolbar}>
        <h4>My DAPPPPPPPPPPPPPPPP</h4>

        <div className={style.links_container}>
          {/* <p>Marketplace</p>
          <p>Community</p>
          <p>Events</p> */}
        </div>

        <div className={style.links_container}>
          <Button onClick={connectWallet}>
            {wallet ? parseWalletKey(wallet) : "Connect Wallet"}
          </Button>
        </div>
      </div>
      <div className={style.divider}></div>
    </>
  );
}

export default Navbar;