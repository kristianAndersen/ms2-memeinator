 const ele =document.querySelector('.memeselector')
const memeslider=document.querySelector('.memeslider')



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
    export {dragScroll,dragIt}

