declare module '@studio-freight/lenis' {
  interface LenisOptions {
    duration?: number;
    easing?: (t: number) => number;
    direction?: 'vertical' | 'horizontal';
    gestureDirection?: 'vertical' | 'horizontal' | 'both';
    smooth?: boolean;
    mouseMultiplier?: number;
    smoothTouch?: boolean;
    touchMultiplier?: number;
    infinite?: boolean;
    lerp?: number;
  }

  type LenisEventCallback = (...args: unknown[]) => void;

  export default class Lenis {
    constructor(options?: LenisOptions);
    raf(time?: number): void;
    on(event: string, callback: LenisEventCallback): void;
    off(event: string, callback: LenisEventCallback): void;
    destroy(): void;
  }
}
