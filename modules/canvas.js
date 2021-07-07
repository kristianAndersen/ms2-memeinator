 import { fabric } from "fabric";
 import { hexToRgb } from "./changeColor";

 const memeditor = document.querySelector('.memeditor')
    //create a new fabric canvas
    let canvas = new fabric.Canvas(memeditor, {
        backgroundColor: "",
        width: 500,
        height: 500,
        preserveObjectStacking: true,
    });
    canvas.isDrawingMode = false;
    let isDrawing = false;
    
    canvas.on("object:selected", function(e){console.log(e.target);});


    const controlsUtils = fabric.controlsUtils
    fabric.Object.prototype.controls.mtr = new fabric.Control({
      x: 0,
      y: 0.6,
      actionHandler: controlsUtils.rotationWithSnapping,
      cursorStyleHandler: controlsUtils.rotationStyleHandler,
      withConnection: true,
      actionName: 'rotate',
    });
    

    export {canvas};