import './style.css';

import { loadMemeTemplates } from '/modules/loadMemes.js';
import {resizeCanvas} from './modules/resizeCanvas'
import {toggleTools} from './modules/baseTools'
import {dragScroll} from './modules/dragScroll'

loadMemeTemplates();
resizeCanvas();

let mql = window.matchMedia('(min-width: 768px)');

mql.addEventListener('change', event => {
  console.log(window.innerWidth);
if (event.matches) {
  console.log('The window is now 768px or under');
} else {
  resizeCanvas();
  console.log('The window is now over 768px');
}
})
