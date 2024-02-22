import React from "react";
import { useAccount, useConnect, useDisconnect } from "@starknet-react/core";

const NavBar = () => {
  const { connect, connectors } = useConnect();
  const { disconnect } = useDisconnect();
  const { address, account } = useAccount();

  return (
    <div className="flex justify-between my-auto">
      <div>
        <h4 className="font-bold text-[25px] text-slate-600 text-shadow">
          Aeros <span className="dancing-script-hell text-[12px]">Club</span>
        </h4>
      </div>

      {/* <h4>{provider ?? provider}</h4> */}

      <div className="">
        {address && address.length > 0 ? (
          <button
            className="py-2 px-6 text-xs rounded-md bg-slate-900 text-white"
            onClick={() => {
              disconnect();
            }}
          >
            Disconnect
          </button>
        ) : (
          <span>
            {connectors.map((connector) => (
              <button
                key={connector.id}
                className="bg-gradient-to-r from-indigo-200 shadow hover:shadow-lg text-xs via-cyan-200 to-blue-300 text-slate-600 p-2 font-bold rounded-md"
                onClick={() => connect({ connector })}
              >
                Connect {connector.id}
              </button>
            ))}
          </span>
        )}
      </div>
    </div>
  );
};

export default NavBar;
