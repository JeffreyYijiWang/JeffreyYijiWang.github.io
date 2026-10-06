/// <reference types="vite/client" />

interface Document {
  startViewTransition?: (callback: () => void) => { finished: Promise<void> };
}
