/*jshint esversion: 6 */ 
import {canvas} from './canvas'
//Send selected object to front or back
const sendToBack=()=>{

	canvas.getActiveObjects().forEach((obj) => {
		canvas.sendBackwards(obj);
	});

}

const sendToFront=()=>{
	
	canvas.getActiveObjects().forEach((obj) => {
		canvas.bringForward(obj);
	});

}

export {sendToBack,sendToFront}