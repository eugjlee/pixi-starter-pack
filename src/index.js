/* @flow */
import './index.html';
import * as PIXI from 'pixi.js';

const renderer = PIXI.autoDetectRenderer(400, 800, { backgroundColor: 0x1099bb });

if (document.body) {
  document.body.appendChild(renderer.view);
}
