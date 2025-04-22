declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_WEB3FORMS_KEY: string;
      VERCEL_OIDC_TOKEN: string;
    }
  }
}

export {};
