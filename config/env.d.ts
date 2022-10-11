declare namespace NodeJS {
    interface ProcessEnv {
        NEXT_PUBLIC_PUBLIC_URL: string;
        DB_HOST: string,
        // @ts-ignore
        DB_PORT: string,
        // @ts-ignore
        DB_USER: string,
        // @ts-ignore
        DB_PASSWORD: string,
    }
  }