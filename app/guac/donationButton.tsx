"use client";

import { useStatsigClient } from "@statsig/react-bindings";

export default function DonationButton({ className }: { className?: string }) {
  const { client } = useStatsigClient();
  return (
    <a
      className={`bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-6 rounded mb-6 mt-6 inline-block ${
        className || ""
      }`}
      href={`https://donate.kesem.org/give/f${process.env.NEXT_PUBLIC_KESEM_FUNDRAISINGID}/#!/donation/checkout`}
      target="_blank"
      onClick={() => {
        if (client) {
          client.logEvent("donation_button_clicked");
        }
      }}
    >
      Donate Now
    </a>
  );
}
