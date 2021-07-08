/*jshint esversion: 6 */ 
import { thumbslider,loadMemeFromUrl } from '/modules/memeslider.js';

//Fetch the top 100 memes from imgflip and build the thunbslider

const baseUrl = 'https://api.imgflip.com/get_memes'

function loadMemeTemplates() {
    fetchMemes()
        .then(response => {
            let allMemes = response.data.memes;
            //send the meme templates data to the thumb slider
            thumbslider(allMemes);
        })
}

async function fetchMemes() {
    let res = await fetch(baseUrl);
    if (res.ok) {
        let data = await res.json();
        return data;
    } else {
        return `HTTP error: ${res.status}`;
    }
}



export { loadMemeTemplates };