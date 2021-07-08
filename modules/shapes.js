/*jshint esversion: 6 */ 
import { fabric } from 'fabric';
import {canvas} from './canvas';
//add a circle
const createCircle=()=>{
    let circle = new fabric.Circle({
        radius: 50,
        fill: '#000'
    });

    canvas.add(circle);
    canvas.viewportCenterObject(circle); 
}

//add a square
const createSquare=()=>{
    let square = new fabric.Rect({ 
        width: 50, 
        height: 50, 
        fill: '#000'
    });

    canvas.add(square);
    canvas.viewportCenterObject(square); 
}
export {createCircle,createSquare};