export const kesemConfig = {
  showKesemBanner: false,
  fundraisingPageId: "5845528",
  showDonors: true,
  caching: {
    // in seconds
    overviewCacheDuration: 60, // 1 minute
    donorsCacheDuration: 60 * 60, // 1 hour
  },
} as const;
