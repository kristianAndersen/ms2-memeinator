import {canvas} from './canvas'

const drawit=()=> {
    canvas.isDrawingMode = true;
    canvas.freeDrawingBrush.width = 2;
    canvas.freeDrawingBrush.color = "#00aeff";

    canvas
        .addEventListener("mousedown", (e) => {
            isDrawing = true;
            onMouseDown(e);
        })
        .addEventListener("mouseup", (e) => {
            isDrawing = false;
            onMouseUp(e);
        })
        .addEventListener("mousemove", (e) => {
            if (isDrawing) {
                const pointer = canvas.getPointer(e);
            }
        });
}


export { drawit };