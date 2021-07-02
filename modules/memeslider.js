import {scaleToFit} from './scaleToFit'
import { fabric } from "fabric";
import {dragScroll} from './dragScroll'
let memeslider = document.querySelector('.memeslider')

//fill the meme selector with images from imgflip
const thumbslider = (allmemes) => {

    allmemes.forEach(function (meme, index) {
        //create an image element for each image and append it to the slider
        let imageEl = document.createElement("img");
        imageEl.src = meme.url;
        imageEl.setAttribute("height", "100rem");
        imageEl.setAttribute("width", "auto");
        imageEl.setAttribute("class", "scrollimage");
        imageEl.setAttribute("alt", meme.name);
        imageEl.setAttribute("data-url", meme.url);
        imageEl.setAttribute("loading", "lazy");
        memeslider.appendChild(imageEl);

        imageEl.addEventListener("click", loadMemeFromUrl, false);

        imageEl.addEventListener("load", function () {
            setmemesliderWidth(imageEl.width);
        });

    });
}

//set width for meme selector scroll
let iWidth = 0;
const setmemesliderWidth = (msWidth) => {
    iWidth += msWidth
  memeslider.setAttribute('style', `width:${iWidth+'px'}`);
  memeslider.style.width=iWidth+'px'
};

const loadMemeFromUrl=(e)=>{
    e.preventDefault();
    e.stopImmediatePropagation();

        let clickedMeme= e.target.getAttribute('data-url')
        console.log(clickedMeme)
        fabric.Image.fromURL(clickedMeme, (img) => {
            scaleToFit(img);
        });
    


}

export { thumbslider,loadMemeFromUrl };