type EasingFunction = (t: number) => number
type Orientation = 'vertical' | 'horizontal'
type GestureOrientation = 'vertical' | 'horizontal' | 'both'
export type LenisOptions = {
  wrapper?: Window | HTMLElement
  content?: HTMLElement
  wheelEventsTarget?: Window | HTMLElement
  eventsTarget?: Window | HTMLElement
  smoothWheel?: boolean
  syncTouch?: boolean
  syncTouchLerp?: number
  touchInertiaMultiplier?: number
  duration?: number
  easing?: EasingFunction
  lerp?: number
  infinite?: boolean
  orientation?: Orientation
  gestureOrientation?: GestureOrientation
  touchMultiplier?: number
  wheelMultiplier?: number
  normalizeWheel?: boolean
  autoResize?: boolean
}
export default class Lenis {
  #private
  constructor({
    wrapper,
    content,
    wheelEventsTarget,
    eventsTarget,
    smoothWheel,
    syncTouch,
    syncTouchLerp,
    touchInertiaMultiplier,
    duration,
    easing,
    lerp,
    infinite,
    orientation,
    gestureOrientation,
    touchMultiplier,
    wheelMultiplier,
    normalizeWheel,
    autoResize,
  }?: LenisOptions)
  destroy(): void
  on(event: string, callback: Function): any
  off(event: string, callback: Function): any
  private setScroll
  private onVirtualScroll
  resize(): void
  private emit
  private onNativeScroll
  private reset
  start(): void
  stop(): void
  raf(time: number): void
  scrollTo(
    target: number | string | HTMLElement,
    {
      offset,
      immediate,
      lock,
      duration,
      easing,
      lerp,
      onComplete,
      force,
      programmatic,
    }?: {
      offset?: number
      immediate?: boolean
      lock?: boolean
      duration?: number
      easing?: EasingFunction
      lerp?: number
      onComplete?: (lenis: Lenis) => void
      force?: boolean
      programmatic?: boolean
    }
  ): void
  get rootElement(): any
  get limit(): any
  get isHorizontal(): boolean
  get actualScroll(): any
  get scroll(): any
  get progress(): number
  get isSmooth(): boolean
  private set isSmooth(value)
  get isScrolling(): boolean
  private set isScrolling(value)
  get isStopped(): boolean
  private set isStopped(value)
  get isLocked(): boolean
  private set isLocked(value)
  get className(): string
  private toggleClass
}
export {}
