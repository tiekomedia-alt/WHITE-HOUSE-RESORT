export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      API_KEY: string;
      EMAILJS_SERVICE_ID: string;
      EMAILJS_TEMPLATE_ID: string;
      EMAILJS_PUBLIC_KEY: string;
      [key: string]: string | undefined;
    }
  }
}
