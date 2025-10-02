export function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export async function fetchClassy(url: string): Promise<any> {
  const csrfResponse = await fetch("https://donate.kesem.org/frs-api/csrf-token", {
    cache: "no-store",
  });
  const csrfToken = csrfResponse.headers.get("set-cookie")?.match(/CSRF-TOKEN=([^;]+)/)?.[1];
  // log token
  console.log("CSRF Token:", csrfToken);
  if (!csrfToken) {
    throw new Error("Failed to fetch CSRF token");
  }
  return await fetch(url, {
    headers: {
      "Content-Type": "application/json",
      Cookie: `CSRF-TOKEN=${csrfToken}`,
    },
    next: {
      revalidate: 60 * 5, // 5 minutes cache duration
    },
  });
}

export async function getSCData(pageId: string): Promise<any> {
  const response = await fetchClassy(`https://donate.kesem.org/fundraiser/${pageId}`);
  const html = await response.text();
  const match = html.match(/<script[^>]*>\s*var\s+SC\s*=\s*(\{[\s\S]*?\})\s*\|\|\s*\{\s*\};[\s\S]*?<\/script>/);
  if (!match || match.length < 2) {
    throw new Error("Failed to extract SC data");
  }
  const scData = eval(`(${match[1]})`);
  return scData;
}
