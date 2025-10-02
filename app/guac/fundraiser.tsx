import { getSCData, numberWithCommas } from "./util";

export default async function Fundraiser() {
  const kesemData = await getSCData(process.env.NEXT_PUBLIC_KESEM_FUNDRAISINGID || "");
  const kesemFundraiser = kesemData.fundraiser;
  return (
    <div className="w-full max-w-[600px] cursor-default">
      <div className="flex justify-between items-end mb-2 w-full">
        <p className="text-3xl font-bold text-white">
          ${numberWithCommas(Math.round(kesemFundraiser?.progress_bar_amount))}{" "}
          <span className="text-lg text-gray-300">raised</span>
        </p>
        <p className="text-base font-medium text-gray-100">
          Goal: ${numberWithCommas(Math.round(kesemFundraiser?.goal_raw))}
        </p>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-6 overflow-hidden">
        <div
          className="bg-[#94C73D] h-6 rounded-full flex justify-end items-center transition-all duration-500 ease-in-out"
          style={{
            width: `${kesemFundraiser?.percent_to_goal > 100 ? "100%" : `${kesemFundraiser?.percent_to_goal}%`}`, // Cap the percentage at 100%
          }}
        >
          <span className="text-base font-bold text-black mr-3">
            {Math.round(kesemFundraiser?.percent_to_goal)}%{kesemFundraiser?.percent_to_goal >= 100 ? " 🎉" : ""}
          </span>
        </div>
      </div>
    </div>
  );
}

export function FundraiserSkeleton() {
  return (
    <div className="w-full max-w-[600px] cursor-default">
      <div className="flex justify-between items-end mb-2 w-full">
        <p className="text-3xl font-bold text-white">
          <span className="animate-pulse">$0,000</span> <span className="text-lg text-gray-300">raised</span>
        </p>
        <p className="text-base font-medium text-gray-100">
          Goal: <span className="animate-pulse">$0,000</span>
        </p>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-6 overflow-hidden animate-pulse"></div>
    </div>
  );
}
