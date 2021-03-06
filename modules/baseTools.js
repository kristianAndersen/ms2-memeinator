import {canvas} from './canvas'
import {createTxt} from './addText'
import {createCircle,createSquare} from './shapes'
import {sendToBack,sendToFront} from './frontBack'
import {deleteObj} from './deletObjects'
import {drawit} from './freehandDrawing'
import {changeColor} from './changeColor'
import {uploadImage} from './uploadImage'
import {saveImage} from './saveImage'

	/** the tools */
	let alltools = document.querySelectorAll(".tool");
	let tools = document.querySelector(".tools");

const toggleTools=(e)=>{
		// as we're listening at the menu level, and #hey
		//  is a child of menu, we need to filter that out.


		let theTool = e.target;
		let tooltitle = e.target.getAttribute("title");
		
        /*set witch tool is active
        looping all the tools and if they are not the current tool make them inactive*/
		for (let i=0; i<alltools.length; i++){
		if(alltools[i] != theTool) {
			alltools[i].classList.remove("toolactive");
			alltools[i].classList.add("inactivetool");
		}
		}
		theTool.classList.remove("inactivetool");
		theTool.classList.add("toolactive");  
		
		switch (tooltitle) {

			case "Move tool":
				canvas.isDrawingMode = false;
				canvas.discardActiveObject().renderAll();
				break;
			case "Upload an image":
				canvas.isDrawingMode = false;
				uploadImage();
				break;
			case "Text":
				canvas.isDrawingMode = false;
                createTxt();
				break;
			case "bold":
				canvas.isDrawingMode = false;
				break;
			case "Italic":
				canvas.isDrawingMode = false;
				break;
			case "Frehand":
				drawit();
				break;
			case "Square":
				canvas.isDrawingMode = false;
                createSquare();
				break;
			case "Circle":
				canvas.isDrawingMode = false;
                createCircle();
				break;
			case "Send to front":
				canvas.isDrawingMode = false;
				sendToFront();
				break;
			case "Send to back":
				canvas.isDrawingMode = false;
				sendToBack();
				break		
			case "Select color":
				changeColor();
				canvas.isDrawingMode = false;
				break;
			case "Group objects":
				canvas.isDrawingMode = false;
				//Feature for a later release
				break;
			case "Share":
				canvas.isDrawingMode = false;
				//Feature for a later release
				break;
			case "Download your fresh meme":
				canvas.isDrawingMode = false;
				saveImage();
				break;
			case "Delete object":
				canvas.isDrawingMode = false;
				deleteObj();
				break;
			default:
		}
	
	}

      tools.addEventListener("click", toggleTools);

      export {toggleTools}