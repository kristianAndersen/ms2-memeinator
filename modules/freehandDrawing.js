/*jshint esversion: 6 */ 
import {canvas} from './canvas';
const drawit=()=> {
    canvas.isDrawingMode = true;
    canvas.freeDrawingBrush.width = 2;
    canvas.freeDrawingBrush.color = "#666";
    
    let isDrawing = false;
    canvas.on("mousedown", (e) => {
            isDrawing = true;
            onMouseDown(e);
        })
        .on("mouseup", (e) => {
            isDrawing = false;
            onMouseUp(e);
        })
        .on("mousemove", (e) => {
      
        });
}


export { drawit };