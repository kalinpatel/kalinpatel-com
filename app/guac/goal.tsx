import { toWords } from "number-to-words";
import { getSCData, numberWithCommas } from "./util";

export default async function GoalAmount() {
  const kesemData = await getSCData(process.env.NEXT_PUBLIC_KESEM_FUNDRAISINGID || "");
  console.log("Kesem Data:", kesemData.fundraiser.goal_raw);
  return <span>${numberWithCommas(Math.round(kesemData.fundraiser.goal_raw) || 0)}</span>;
}

export function GoalAmountSkeleton() {
  return <span className="animate-pulse">$0,000</span>;
}

export async function GoalKidsAmount() {
  const kesemData = await getSCData(process.env.NEXT_PUBLIC_KESEM_FUNDRAISINGID || "");
  return <span>{toWords(Math.round(kesemData.fundraiser.goal_raw / 500) || 0)}</span>;
}

export function GoalKidsAmountSkeleton() {
  return <span className="animate-pulse inline-block w-16 h-4 bg-gray-200"></span>;
}
