"use client";

import { StatsigProvider, useClientAsyncInit } from "@statsig/react-bindings";
import { StatsigSessionReplayPlugin } from "@statsig/session-replay";
import { StatsigAutoCapturePlugin } from "@statsig/web-analytics";
import React from "react";

export default function Statsig({ children }: { children: React.ReactNode }) {
  const { client } = useClientAsyncInit(
    process.env.NEXT_PUBLIC_STATSIG_CLIENT,
    {},
    {
      plugins: [new StatsigAutoCapturePlugin(), new StatsigSessionReplayPlugin()],
      networkConfig: {
        api: "https://t.kalinpatel.com/v1/",
      },
    }
  );

  return (
    <StatsigProvider client={client} loadingComponent={<div>Loading...</div>}>
      {children}
    </StatsigProvider>
  );
}
