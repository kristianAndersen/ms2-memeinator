import {canvas} from './canvas'

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

    txtField.on({'touch:longpress': function() {
        e.preventDefault();
        txtField.enterEditing();
        txtField.hiddenTextarea.focus();
        }
      });
      txtField.on("mousedblclick", function(e) {
        e.preventDefault();
    txtField.enterEditing();
    txtField.hiddenTextarea.focus();
    })
  
}

export {createTxt}