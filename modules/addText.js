import {canvas} from './canvas'

//Add textfield
const createTxt=()=>{

    console.log(canvas.getWidth())
    let txtField = new fabric.Textbox(
        'YourMemeTxt', {
        textAlign: 'center',
        fill: '#000',
        editable: true
    });

    canvas.add(txtField);
    canvas.viewportCenterObject(txtField); 
}

export {createTxt}