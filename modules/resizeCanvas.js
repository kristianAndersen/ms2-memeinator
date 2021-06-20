import { canvas } from "./canvas";
  

/**Resize canvas */
    /*Found a pice of code on stackowerflow that i modified to meet my needs */
    
    //memeframe the chrop line of the final meme to pe saved
    const memeframe = document.querySelector('.memeframe')
  
    const resizeCanvas=()=> {
       
        const ratio = canvas.getWidth() / canvas.getHeight();
        const containerWidth = memeframe.clientWidth;
        //As i am creating square images i only need one dimention, but height might come in handy!
        const containerHeight = memeframe.clientHeight;

        const scale = containerWidth / canvas.getWidth();
        const zoom = canvas.getZoom() * scale;

        canvas.setDimensions({
            width: containerWidth,
            height: containerWidth / ratio,
        });
        canvas.setViewportTransform([zoom, 0, 0, zoom, 0, 0]);
    }

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    export {resizeCanvas}