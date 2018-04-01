/* @flow */

declare module 'pixi.js' {
  declare export opaque type ScaleMode: number;

  declare export var SCALE_MODES: {
    NEAREST: ScaleMode,
    LINEAR: ScaleMode,
  };

  declare export var settings: {
    SCALE_MODE: ScaleMode,
  };

  declare type Shape = Rectangle | Polygon;

  declare export class Rectangle {
    x: number;
    y: number;
    width: number;
    height: number;
    constructor(x: number, y: number, width: number, height: number): Rectangle;
  }

  declare export class Polygon {
    points: Point[] | number[];

    constructor(points: Point[] | number[]): Polygon;
  }

  declare export class DisplayObject {
    alpha: number;
    buttonMode: boolean;
    cacheAsBitmap: boolean;
    cursor: string;
    filterAread: Rectangle;
    // filter: Array<Filter>;
    hitArea: Shape;
    interactive: boolean;
    name: string;
    +parent: ?Container;
    pivot: ObservablePoint | Point;
    position: ObservablePoint | Point;
    renderable: boolean;
    rotation: number;
    scale: ObservablePoint;
    skew: ObservablePoint;
    // transform: TransformBase;
    visible: boolean;
    +worldAlpha: number;
    // +worldTransform: Matrix;
    +worldVisible: number;
    x: number;
    y: number;
    constructor(): DisplayObject;
    destroy(): void;
    getBounds(): Rectangle;
    getGlobalPosition(): Point;
  }

  declare class Ticker {
    add(callback: (d: number) => any): void;
  }

  declare export var ticker: {
    Ticker: Class<Ticker>,
  };

  declare export type ApplicationConfig = {
    backgroundColor: number,
  };

  declare export class Application {
    stage: Container;
    view: HTMLElement;
    loader: Loader;
    screen: Rectangle;
    ticker: Ticker;

    constructor(width: number, height: number, config?: ApplicationConfig): Application;
  }

  declare export class ObservablePoint {
    x: number;
    y: number;
  }

  declare export class Point {
    x: number;
    y: number;
    constructor(x?: number, y?: number): Point;
  }

  declare export class Container extends DisplayObject {
    width: number;
    height: number;
    +children: $ReadOnlyArray<DisplayObject>;
    constructor(): Container;
    addChild(...children: DisplayObject[]): void;
    addChildAt(child: DisplayObject, index: number): void;
    getChildIndex(child: DisplayObject): number;
    swapChildren(child1: DisplayObject, child2: DisplayObject): void;
    removeChild(child: DisplayObject): void;
    removeChildAt(index: number): void;
  }

  declare export class Sprite extends Container {
    anchor: ObservablePoint;

    constructor(baseTexture: BaseTexture): Sprite;
  }

  declare export class BaseTexture {
    static fromImage(
      url: string,
      crossorigin?: boolean,
      scaleMode?: ScaleMode,
      sourceScale?: number,
    ): BaseTexture;

    static from(
      source: string | HTMLImageElement | HTMLCanvasElement,
      scaleMode?: ScaleMode,
      sourceScale?: number,
    ): BaseTexture;
  }

  declare export class Texture {
    static from(
      source: number | string | HTMLImageElement | HTMLCanvasElement | BaseTexture,
    ): Texture;
    static fromCanvas(source: HTMLCanvasElement): Texture;
    static fromFrame(frameId: string): Texture;
    static fromImage(
      imageUrl: string,
      crossorigin: boolean,
      scaleMode?: ScaleMode,
      sourceScale?: number,
    ): Texture;
    static fromLoader(
      source: HTMLImageElement | HTMLCanvasElement,
      imageUrl: string,
      name: string,
    ): Texture;
    static removeFromCache(texture: string | Texture): ?Texture;
    baseTexture: BaseTexture;
    constructor(baseTexture: BaseTexture, shape?: Rectangle): Texture;
    clone(): Texture;
    destroy(destroyBase: boolean): void;
    update(): void;
  }

  declare export class Graphics extends Container {
    tint: number;
    boundsPadding: number;
    fillAlpha: number;
    isMask: boolean;
    lineColor: string;
    lineWidth: number;
    nativeLines: boolean;
    constructor(nativeLines?: boolean): Graphics;
    addHole(): Graphics;
    arc(
      cx: number,
      cy: number,
      radius: number,
      startAngle: number,
      endAngle: number,
      anticlockwise: number,
    ): Graphics;
    arcTo(x1: number, y1: number, x2: number, y2: number, radius: number): Graphics;
    beginFill(color: number, alpha?: number): Graphics;
    bezierCurveTo(
      cpX: number,
      cpY: number,
      cpX2: number,
      cpY2: number,
      toX: number,
      toY: number,
    ): Graphics;
    clear(): Graphics;
    clone(): Graphics;
    closePath(): Graphics;
    containsPoint(point: Point): boolean;
    drawCircle(x: number, y: number, radius: number): Graphics;
    drawEllipse(x: number, y: number, width: number, height: number): Graphics;
    drawPolygon(path: number[] | Point[] | Polygon): Graphics;
    drawRect(x: number, y: number, width: number, height: number): Graphics;
    drawRoundedRect(x: number, y: number, width: number, height: number, radius: number): Graphics;
    drawShape(shape: Shape): Graphics;
    drawStar(x: number, y: number, points: number, radius: number, innerRadius: number): Graphics;
    endFill(): Graphics;
    generateCanvasTexture(scaleMode: ScaleMode, resolution?: number): Graphics;
    isFastRect(): boolean;
    lineStyle(lineWidth?: number, color?: number, alpha?: number): Graphics;
    lineTo(x: number, y: number): Graphics;
    moveTo(x: number, y: number): Graphics;
    quadraticCurveTo(cpX: number, cpY: number, toX: number, toY: number): Graphics;
    updateLocalBounds(): void;
  }

  declare export type TextStyleOptions = {
    align?: string,
    breakWords?: boolean,
    dropShadow?: boolean,
    dropShadowAlpha?: number,
    dropShadowAngle?: number,
    dropShadowBlur?: number,
    dropShadowColor?: string | number,
    dropShadowDistance?: number,
    fill?: string | string[] | number | number[] | CanvasGradient | CanvasPattern,
    fillGradientType?: number,
    fillGradientStops?: number[],
    fontFamily?: string | string[],
    fontSize?: number | string,
    fontStyle?: string,
    fontVariant?: string,
    fontWeight?: string,
    letterSpacing?: number,
    lineHeight?: number,
    lineJoin?: string,
    miterLimit?: number,
    padding?: number,
    stroke?: string | number,
    strokeThickness?: number,
    textBaseline?: string,
    trim?: boolean,
    wordWrap?: boolean,
    wordWrapWidth?: number,
    leading?: number,
  };

  declare export class TextStyle {
    constructor(options: TextStyleOptions): TextStyle;
  }

  declare type LoaderResource = {
    +error: Error,
    +texture: BaseTexture,
  };

  declare class Loader {
    add(id: string, path?: string): Loader;
    load((loader: Loader, resources: { [string]: LoaderResource }) => any): void;
  }

  declare export var loader: Loader;

  declare export var loaders: {
    Loader: Class<Loader>,
    shared: Loader,
  };
}
