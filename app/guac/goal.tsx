import { toWords } from "number-to-words";
import { numberWithCommas } from "./util";

export default async function GoalAmount() {
  const kesemFundraiserReq = fetch(
    `https://donate.kesem.org/frs-api/fundraising-pages/${process.env.NEXT_PUBLIC_KESEM_FUNDRAISINGID}?with=fundraising_team`,
    {
      next: {
        revalidate: 60, // 1 minute cache duration
      },
    }
  );
  const kesemFundraiser = await (await kesemFundraiserReq).json();
  return <span>${numberWithCommas(Math.round(kesemFundraiser?.goal))}</span>;
}

export function GoalAmountSkeleton() {
  return <span className="animate-pulse">$0,000</span>;
}

export async function GoalKidsAmount() {
  const kesemFundraiserReq = fetch(
    `https://donate.kesem.org/frs-api/fundraising-pages/${process.env.NEXT_PUBLIC_KESEM_FUNDRAISINGID}?with=fundraising_team`,
    {
      next: {
        revalidate: 60, // 1 minute cache duration
      },
    }
  );
  const kesemFundraiser = await (await kesemFundraiserReq).json();
  return <span>{toWords(Math.round(kesemFundraiser?.goal / 500))}</span>;
}

export function GoalKidsAmountSkeleton() {
  return <span className="animate-pulse inline-block w-16 h-4 bg-gray-200"></span>;
}
