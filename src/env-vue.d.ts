// src/shims-vue.d.ts

// Tell TypeScript how to handle .vue files
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

// Tell TypeScript to allow .js imports (no type info)
declare module '*.js';
