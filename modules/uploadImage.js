/*jshint esversion: 6 */
import {
    fabric
} from "fabric";
import {
    scaleToFit
} from "./scaleToFit";

let files = document.getElementById('file-input');


files.onchange = function (e) {
    let files = e.target.files; // FileList object
    let file = files[0];
    if (file.type.match('image.*')) {
        let reader = new FileReader();
        // Read in the image file as a data URL.
        reader.readAsDataURL(file);
        reader.onload = function (e) {
            if (e.target.readyState == FileReader.DONE) {
                let imgObj = new Image();
                imgObj.src = e.target.result;
                imgObj.onload = function () {
                    // create fabric image object
                    let image = new fabric.Image(imgObj);
                    scaleToFit(image);
                }

            }
        }

    } else {
        alert("not an image");
    }
}

//lets fake a click on the hidden file input
const uploadImage = () => {
    files.click()
}

export {
    uploadImage
}