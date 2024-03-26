declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PORT: string;
      FRONTEND_URL: string;
    }
  }
}
export {};
