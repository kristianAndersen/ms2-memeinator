/*jshint esversion: 6 */ 
import {canvas} from './canvas';
/*Fit image */

//todo: respons to window scaling
/*PROPS and high5 to Muhammad Asif Javed https://stackoverflow.com/questions/36951856/resize-background-image-of-canvas-fabricjs/59975923#59975923*/
	const scaleToFit=(img)=> {
        
		let maxWidth = 455;
		let maxHeight = 455;

		let imgWidth = img.width;
		let imgHeight = img.height;

		let widthAspectRatio = maxWidth / imgWidth;
		let heightAspectRatio = maxHeight / imgHeight;

		let finalAspectRatio = Math.min(widthAspectRatio, heightAspectRatio);

		canvas.add(img);
		canvas.setActiveObject(img);
        img.scale(finalAspectRatio);
      
        canvas.viewportCenterObject(img); 
        canvas.renderAll();
	}

    export {scaleToFit};