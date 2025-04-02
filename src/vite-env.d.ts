/// <reference types="vite/client" />
/// <reference types="react" />
/// <reference types="react-dom" />

declare namespace JSX {
  interface IntrinsicElements {
    [elemName: string]: any;
  }
}

interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string
  // add more env variables as needed
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
