declare module "*.module.css" {
  const classes: { [key: string]: string };
  export default classes;
}

interface ImportMetaEnv {
  VITE_API_URL?: string;
}

interface ImportMeta {
  env: ImportMetaEnv;
}