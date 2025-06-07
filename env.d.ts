declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_KESEM_CONFIG_BANNER: string;
      NEXT_PUBLIC_KESEM_FUNDRAISINGID: string;
      NEXT_PUBLIC_STATSIG_CLIENT: string;
      NEXT_PUBLIC_WEB3FORMS_KEY: string;
      VERCEL_OIDC_TOKEN: string;
    }
  }
}

export {};
