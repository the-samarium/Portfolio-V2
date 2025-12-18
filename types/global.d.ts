import Lenis from '@studio-freight/lenis'; // or 'lenis' depending on version, checking my install command... I installed 'lenis' and 'react-lenis'.

// Actually the package name is 'lenis' based on my install "npm install lenis".
// However, the import in smooth-scroll.tsx was "import Lenis from 'lenis'".

export {};

declare global {
  interface Window {
    lenis: any; // Using any here to avoid import issues for now, but at least valid typescript
  }
}
