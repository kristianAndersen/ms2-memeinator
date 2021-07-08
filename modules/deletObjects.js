/*jshint esversion: 6 */ 
import { canvas } from "./canvas";
//Delete all active objects from canvas
const deleteObj=()=> {
    canvas.getActiveObjects().forEach((obj) => {
        canvas.remove(obj);
    });
    canvas.discardActiveObject().renderAll();
}
export {deleteObj};