/* @flow */
import './index.html';
import * as PIXI from 'pixi';

const renderer = PIXI.autoDetectRenderer(400, 800, { backgroundColor: 0x1099bb });
document.body.appendChild(renderer.view);
