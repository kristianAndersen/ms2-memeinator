import {canvas} from './canvas'

//Add textfield
const createTxt=()=>{

    console.log(canvas.getWidth())
    let txtField = new fabric.IText(
        'YourMemeTxt', {
        textAlign: 'center',
        fill: '#000',
        editable: true
    });

    txtField.on("mousedblclick", function(e) {
    txtField.enterEditing();
    txtField.hiddenTextarea.focus();
    })

    txtField.on("touch:longpress", function(e) {
        txtField.enterEditing();
        txtField.hiddenTextarea.focus();
    })

    canvas.add(txtField);
    canvas.viewportCenterObject(txtField); 
}

export {createTxt}