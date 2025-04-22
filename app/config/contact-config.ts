export const contactConfig = {
  validServices: [
    {
      slug: "prairie-plus",
      name: "Prairie Plus",
    },
    {
      slug: "camp-kesem",
      name: "Camp Kesem",
    },
  ],
} as const;

// Passing information to the form via URL
// /contact/[service here]?note=[note here]
