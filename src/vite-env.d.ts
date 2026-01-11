// Manually define process.env since vite/client types are missing or not found
declare var process: {
  env: {
    API_KEY: string;
    [key: string]: string | undefined;
  };
};