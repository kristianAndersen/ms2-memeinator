/*jshint esversion: 6 */ 

import {scaleToFit} from './scaleToFit'
import { fabric } from "fabric";

const memeslider = document.querySelector('.memeslider')

//fill the meme selector with images from imgflip
const thumbslider = (allmemes) => {

    allmemes.forEach(function (meme) {
        //create an image element for each image and append it to the slider
        const imageEl = document.createElement("img");
        imageEl.src = meme.url;
        imageEl.setAttribute("width", meme.width);
        imageEl.setAttribute("height", meme.height);
        imageEl.setAttribute("class", "scrollimage");
        imageEl.setAttribute("alt", meme.name);
        imageEl.setAttribute("data-url", meme.url);
        imageEl.setAttribute("loading", "lazy");
        memeslider.appendChild(imageEl);

        imageEl.addEventListener("click", loadMemeFromUrl, false);

        //get the loadet images offsetwidth to get both width+padding
        imageEl.addEventListener("load", function () {
            setmemesliderWidth(imageEl.offsetWidth);
        });

    });
}

//set width for meme selector scroll
let iWidth = 0;
const setmemesliderWidth = (msWidth) => {
    iWidth += msWidth;
  memeslider.style.width=iWidth+'px'
};

const loadMemeFromUrl=(e)=>{
    e.preventDefault();
    e.stopImmediatePropagation();

        let clickedMeme= e.target.getAttribute('data-url')
       
       fabric.Image.fromURL(clickedMeme, (img) => {
            scaleToFit(img);
           
        },{crossOrigin:'anonymous'});
       


}

export { thumbslider,loadMemeFromUrl };