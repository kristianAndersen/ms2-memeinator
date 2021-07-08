/*jshint esversion: 6 */ 
import {canvas} from './canvas'
const saveImage=()=>{

    canvas.setBackgroundImage(null);
    canvas.renderAll();

    let dataURL = canvas.toDataURL({
        format: 'png',
        multiplier: 2,
    })

    downloadDataUrl(dataURL);   


}
async function downloadDataUrl(dataURL) {
    const blob = await fetch(dataURL).then(r => r.blob());
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.download = "my_image.png"
    a.href = url;
    a.click();
    URL.revokeObjectURL(url);
    a.remove();
}


export {saveImage}