export {};

declare global {
  interface Window {
    lenis: any; // Using any here to avoid import issues for now, but at least valid typescript
  }
}
