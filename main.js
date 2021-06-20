import './style.css';

import { loadMemeTemplates } from '/modules/loadMemes.js';
import {resizeCanvas} from './modules/resizeCanvas'
import {toggleTools} from './modules/baseTools'

loadMemeTemplates();
resizeCanvas();

/*
document.querySelector('#app').innerHTML = `
  <h1>Hello Vite!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`
*/