import { kesemConfig } from "app/config/kesem-config";
import { toWords } from "number-to-words";
import { numberWithCommas } from "./util";

export default async function GoalAmount() {
  const kesemFundraiserReq = fetch(
    `https://donate.kesem.org/frs-api/fundraising-pages/${kesemConfig.fundraisingPageId}?with=fundraising_team`,
    {
      next: {
        revalidate: kesemConfig.caching.overviewCacheDuration,
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
    `https://donate.kesem.org/frs-api/fundraising-pages/${kesemConfig.fundraisingPageId}?with=fundraising_team`,
    {
      next: {
        revalidate: kesemConfig.caching.overviewCacheDuration,
      },
    }
  );
  const kesemFundraiser = await (await kesemFundraiserReq).json();
  return <span>{toWords(Math.round(kesemFundraiser?.goal / 500))}</span>;
}

export function GoalKidsAmountSkeleton() {
  return <span className="animate-pulse inline-block w-16 h-4 bg-gray-200"></span>;
}
