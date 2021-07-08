import {canvas} from './canvas';

const rgb=document.querySelectorAll('.rgb');
const red=document.querySelector('.red');
const green=document.querySelector('.green');
const blue=document.querySelector('.blue');
const opacity=document.querySelector('.opacity');

const toolEX=document.querySelector('.toolExtention');
const TEcolorSample=document.querySelector('.TEcolorSample');
const closeBtn=document.querySelector('.closebtn');
const memeframe=document.querySelector('.memeframe');

let memeframeHeight=memeframe.offsetHeight;
let memeframeHeightTop=memeframe.offsetTop;

let showHide=(memeframeHeight+memeframeHeightTop);


const showColorTool=()=>{
toolEX.style.bottom= -showHide+'px';
toolEX.style.transition = "all 1s";
}
const hideColor=()=>{
  toolEX.style.bottom= -100+'%';
  toolEX.style.transition = "all 1s";
}

closeBtn.addEventListener('click',  hideColor);


const changeColor=()=>{
showColorTool();

    let rgb_red = red.value;
    let rgb_green = green.value;
    let rgb_blue = blue.value;
    let rgb_opacity=opacity.value;

    TEcolorSample.style.backgroundColor = `rgb(${rgb_red}, ${rgb_green}, ${rgb_blue})`;
    TEcolorSample.style.opacity = rgb_opacity;
    TEcolorSample.setAttribute('data-fill', rgbToHex(rgb_red,rgb_green,rgb_blue));

    //get current active object
    let obj=canvas.getActiveObject()
    if(obj){
         
         let objType = obj.get('type')
      
        switch(objType){
          case 'path':
            obj.set('stroke', rgbToHex(rgb_red,rgb_green,rgb_blue));
          break;
          case 'rect':
          case 'circle':
          case'i-text':
          obj.set('fill', rgbToHex(rgb_red,rgb_green,rgb_blue));
          break;
        }
       
    
        obj.set({opacity: rgb_opacity});
       
        canvas.renderAll();
    }

  
  
}



for (var i = 0; i < rgb.length; i++) {
    rgb[i].addEventListener('input', changeColor);
}


//convert RGB to HEX
//https://nimishprabhu.com/convert-rgb-to-hex-and-hex-to-rgb-javascript-online-demo.html
let rHex,gHex,bHex
const rgbToHex=(r, g, b)=> {
    try {
       rHex = parseInt(r).toString(16).padStart(2, '0');
       gHex = parseInt(g).toString(16).padStart(2, '0');
       bHex = parseInt(b).toString(16).padStart(2, '0');
    } catch (e) {
      return false;
    }
    if (rHex.length > 2 || gHex.length > 2 || bHex.length > 2) return false;
    return '#' + rHex + gHex + bHex;
  }
//convert HEX to RGB
//https://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb
  const hexToRgb = hex =>
  hex.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i
             ,(m, r, g, b) => '#' + r + r + g + g + b + b)
    .substring(1).match(/.{2}/g)
    .map(x => parseInt(x, 16))



//add color to active object
    const addColor=(e)=>{
        let obj=canvas.getActiveObject()
           if(obj){
                obj.set("fill", e.target.getAttribute('data-fill'));
                obj.set({opacity:e.target.style.opacity});
                canvas.renderAll();
            }
    }

    TEcolorSample.addEventListener('click',  addColor);

  export { changeColor,hexToRgb };

