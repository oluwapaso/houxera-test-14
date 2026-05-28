export{}

declare global {
    interface Window {
        MLS_Util: any
    }
}

// globals.d.ts
declare module '*.css';
declare module '*.module.css' {
  const classes: { readonly [key: string]: string };
  export default classes;
}