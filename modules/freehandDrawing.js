import {canvas} from './canvas'
const drawit=()=> {
    canvas.isDrawingMode = true;
    canvas.freeDrawingBrush.width = 2;
    canvas.freeDrawingBrush.color = "#00aeff";
    
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
            if (isDrawing) {
                const pointer = canvas.getPointer(e);
            }
        });
}


export { drawit };