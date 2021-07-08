/*jshint esversion: 6 */ 
/*
kudos to Conor Murphy
for his drag toss scoll 
https://codepen.io/cmurphy580/pen/WXEZrw?editors=0010
*/
console.log("dragSlide");

const slider = document.querySelector('.memeselector');
const memeslider = document.querySelector('.memeslider');

let isDown = false, hasMoved = false;
let startX, x;
let scrollLeft;
let initial, now, time, distance, velocity, amplitude, target;


const dragScroll = (e) => {
  
    slider.style.cursor = 'grabbing';
    slider.style.userSelect = 'none';

    isDown = true;
    initial = Date.now();
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
    //console.log(startX);
    hasMoved = false;
   // if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
     //   slider.style.overflowX="scroll"
    //}else{
    slider.addEventListener('mouseleave', mouseleaveHAndler);
    slider.addEventListener('mousemove', mousemoveHandler);
    slider.addEventListener('mouseup', mouseupHandler);
    //}
}

const mouseleaveHAndler = () => {
    isDown = false;
    slider.style.cursor = 'grab';
    slider.style.removeProperty('user-select');
};

const mousemoveHandler = (e) => {
    if (!isDown) return;
    e.preventDefault();
    //make shure the images is not clicked while dragging
    memeslider.style.pointerEvents = 'none';

    x = e.pageX - slider.offsetLeft;
    const walk = (x - startX);
    slider.scrollLeft = scrollLeft - walk;
    //console.log(slider.scrollLeft);
    hasMoved = true;
};

const mouseupHandler = (e) => {
    isDown = false;
    now = Date.now();
    time = (now - initial);
    distance = (x - startX);
    velocity = (distance) / (time);

    memeslider.style.pointerEvents = 'all';
    slider.style.cursor = 'grab';

    if (velocity < -0.9 || velocity > 0.9) {
        amplitude = velocity * -1000;
        target = Math.round(amplitude + slider.scrollLeft);

        requestAnimationFrame(autoScroll);
    }
    e.stopPropagation();
    e.preventDefault();
};

const autoScroll = () => {
    let elapsed, delta;
    if (amplitude && hasMoved) {
        elapsed = Date.now() - now;
        delta = -amplitude * Math.exp(-elapsed / 325);
        if (delta > 0.5 || delta < -0.5) {
            slider.scrollLeft = target + delta;
            requestAnimationFrame(autoScroll);
        } else {
            slider.scrollLeft = target;
        }
    }
}



slider.addEventListener('mousedown', dragScroll);

export { dragScroll };

/*
 const ele =document.querySelector('.memeselector')
 const memeslider = document.querySelector('.memeslider')
    ele.style.cursor = 'grab';

    let pos = { left: 0, x: 0 };
    let dragIt=false;
    
    const dragScroll =(e)=> {

       
        ele.style.cursor = 'grabbing';
        ele.style.userSelect = 'none';

        pos = {
            left: ele.scrollLeft,
            // Get the current mouse position
            x: e.clientX,
        
        };

        ele.addEventListener('mousemove', mouseMoveHandler);
        ele.addEventListener('mouseup', mouseUpHandler);
    };

    const mouseMoveHandler = (e)=> {
        //make shure the images is not clicked while dragging
        memeslider.style.pointerEvents='none'
        //prent the scroll from sticking to the curser
        e.preventDefault();
        dragIt=true;
        // How far the mouse has been moved
        const dx = e.clientX - pos.x;
        ele.scrollLeft = pos.left - dx;
    };

    const mouseUpHandler = (e)=> {
        e.preventDefault();
        memeslider.style.pointerEvents='all'
        ele.style.cursor = 'grab';
        ele.style.removeProperty('user-select');

       ele.removeEventListener('mousemove', mouseMoveHandler);
       ele.removeEventListener('mouseup', mouseUpHandler);
     //  dragIt=false;
    };


    // Attach the handler
    ele.addEventListener('mousedown', dragScroll);
    */


