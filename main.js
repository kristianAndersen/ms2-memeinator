/*jshint esversion: 6 */ 
import './style.css';
import { loadMemeTemplates } from '/modules/loadMemes.js';
import {resizeCanvas} from './modules/resizeCanvas';
import {toggleTools} from './modules/baseTools';
import {dragScroll} from './modules/dragScroll';

loadMemeTemplates();
resizeCanvas();

