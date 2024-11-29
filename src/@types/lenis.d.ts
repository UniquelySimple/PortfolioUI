declare module '@studio-freight/lenis' {
    export default class Lenis {
        constructor(options?: any);
        raf(): void;
        scrollTo(target: string | number, options?: any): void;
    }
}