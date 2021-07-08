import {canvas} from './canvas'
import { fabric } from 'fabric';
//Add textfield
const createTxt=()=>{

    console.log(canvas.getWidth())
    let txtField = new fabric.IText(
        'Dubbel click to edit', {
        textAlign: 'center',
        fontFamily:'Anton',
        strokeWidth: 2,
        stroke: 'black',
        fill: '#fff',
        padding: 20,
        editable: true
    });

    canvas.add(txtField);
    canvas.viewportCenterObject(txtField); 

  
      txtField.on("mouse:down", function(e) {
        e.preventDefault();
    txtField.enterEditing();
    txtField.hiddenTextarea.focus();
    })

    txtField.on("touchstart", function (e) {
        e.preventDefault();
        txtField.enterEditing();
         txtField.hiddenTextarea.focus();
      }, false);
  
}

export {createTxt}