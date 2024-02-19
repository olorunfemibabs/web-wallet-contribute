"use client";
import { ReactNode } from "react";

import { goerli, mainnet } from "@starknet-react/chains";
import { InjectedConnector } from "starknetkit/injected";
import { WebWalletConnector } from "starknetkit/webwallet";

import {
  StarknetConfig,
  argent,
  braavos,
  publicProvider,
  useInjectedConnectors,
} from "@starknet-react/core";

export function StarknetProvider({ children }: { children: ReactNode }) {

  const connectorss = [
    // new InjectedConnector({ options: {id: "braavos", name: "Braavos" }}),
    // new InjectedConnector({ options: {id: "argentX", name: "Argent X" }}),
    new WebWalletConnector({ url: "https://web.argent.xyz" }),
  ]

  return (
    <StarknetConfig
      chains={[mainnet, goerli]}
      provider={publicProvider()}
      connectors={connectorss}
    >
      {children}
    </StarknetConfig>
  );
}
