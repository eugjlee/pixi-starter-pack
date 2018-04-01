// flow-typed signature: b2df06291a32b582eb1987541031b816
// flow-typed version: <<STUB>>/react-pixi-fiber_v0.4.0/flow_v0.68.0
import type {
  Texture as PIXI$Texture,
  Container as PIXI$Container,
  DisplayObject as PIXI$DisplayObject,
} from 'pixi.js';

declare module 'react-pixi-fiber' {
  declare type Position = string | [number, number] | { x: number, y: number };

  declare type ContainerPropType = {
    x?: number,
    y?: number,
    position?: Position,
  };

  declare export class Container extends React$Component<ContainerPropType> {}

  declare type SpritePropType = {
    texture: PIXI$Texture,
  } & ContainerPropType;

  declare export class Sprite extends React$Component<SpritePropType> {}

  declare type TextPropType = {
    text: string,
  } & ContainerPropType;

  declare export class Text extends React$Component<TextPropType> {}

  declare export class Graphics extends React$Component<any> {}

  declare export function render(element: React$Node, target: PIXI$Container): void;

  declare type Behaviour<T, D: PIXI$DisplayObject> = {
    customDisplayObject: (props: T) => D,
    customApplyProps: (instance: D, oldProps: T, newProps: T) => void,
  };

  declare export function CustomPIXIComponent<T, D>(
    behaviour: Behaviour<T, D>,
    type: string,
  ): React$ComponentType<T>;
}
