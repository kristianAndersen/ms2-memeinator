import {canvas} from './canvas'

//Add textfield
const createTxt=()=>{

    console.log(canvas.getWidth())
    let txtField = new fabric.IText(
        'Dubbel click to edit', {
        textAlign: 'center',
        fontFamily:'Anton',
        fill: '#999',
        editable: true
    });

    txtField.on("mousedblclick", function(e) {
        e.preventDefault();
    txtField.enterEditing();
    txtField.hiddenTextarea.focus();
    })
/*
    txtField.on("touch:longpress", function(e) {
        e.preventDefault();
        txtField.enterEditing();
        txtField.hiddenTextarea.focus();
    })
*/
    canvas.add(txtField);
    canvas.viewportCenterObject(txtField); 
}

export {createTxt}