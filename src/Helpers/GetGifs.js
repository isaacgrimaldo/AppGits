export const getImges =async(category) => {
    //se usa el mas para rellenar espacios vacios
    const url = `https://api.giphy.com/v1/gifs/search?limit=18&q=${encodeURI(category)}&api_key=BvVSkWPflAOjzoBRdJqFICzCh2eWayUw`;
    const resp = await fetch(url); //await paae que espere el codigo espere a que la promesa se cumpla
    const  {data} = await resp.json(); 
   
     //para optner solo los datos requeridos
     const gifs = data.map( img =>{
         return {
             id: img.id,
             title: img.title,
             gif: img.images.downsized_medium.url,
         }
     })
     //inteframos los valores en le hook
     return gifs
 }