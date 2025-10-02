import { fetchClassy } from "./util";

type DonorData = {
  id: string;
  member_name: string | null;
  linkable_value: string;
  linkable_type: string;
  linkable_effective_at: string;
  comment: string;
};

export default async function Donors() {
  const kesemDonorsReq = fetchClassy(
    `https://donate.kesem.org/frs-api/fundraising-pages/${process.env.NEXT_PUBLIC_KESEM_FUNDRAISINGID}/feed-items?per_page=100&sort=linkable_effective_at:desc,linkable_id:desc`
  );
  const kesemDonors = await (await kesemDonorsReq).json();
  const donors = kesemDonors?.data as Array<DonorData>;
  // donor has property member_name (null for anonymous donors), comment, and linkable_value for amount
  // sort by linkable_effective_at and linkable_id, remove anything with linkable_type not equal to "donation"
  return (
    <div className="w-full cursor-default">
      <div className="grid grid-cols-1 lg:grid-cols-5 sm:grid-cols-3 gap-2 md:gap-4">
        {donors
          .filter((donor) => donor.linkable_type === "donation")
          .filter((donor, index, self) => {
            const name = donor.member_name ? donor.member_name : "Anonymous Donor";
            return index === self.findIndex((d) => d.member_name === name);
          })
          .map((donor) => (
            <div
              key={donor.id}
              className="px-2 py-1 md:py-2.5 bg-indigo-800 border border-indigo-400 rounded-full text-gray-100 w-full truncate"
            >
              <h3 className="text-base font-semibold truncate">
                {donor.member_name ? donor.member_name : "Anonymous Donor"}
              </h3>
            </div>
          ))}
        {/* add a chip at the end for number of anonymous donors */}
        {donors.filter((donor) => donor.member_name === null).length > 0 && (
          <div className="px-2 py-1 md:py-2.5 bg-indigo-800 border border-indigo-400 rounded-full text-gray-100 w-full h-min truncate">
            <h3 className="text-base font-semibold truncate">
              {donors.filter((donor) => donor.member_name === null).length} Anonymous Donor
              {donors.filter((donor) => donor.member_name === null).length > 1 ? "s" : ""}
            </h3>
          </div>
        )}
      </div>
    </div>
  );
}

export function DonorsSkeleton() {
  return (
    <div className="w-full max-w-[600px] cursor-default">
      <h2 className="text-3xl font-bold text-white mb-4">
        <span className="animate-pulse">Recent Donors</span>
      </h2>
      <ul className="list-disc list-inside">
        {[...Array(5)].map((_, i) => (
          <li key={i} className="text-lg text-gray-300 mb-2">
            <span className="animate-pulse">Anonymous Donor: $0,000</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
