import { useEffect, useRef, useState } from "react"
import GifList from "./GifList"
import GifSearch from "./GifSearch"


function GiftListContainer(){
    const [gifs, setGifs] = useState()
    let [value, setValue]=useState()
    // console.log(val  
        
    // get data from api
    useEffect(()=>{
            fetch(`https://api.giphy.com/v1/gifs/search?q=${value}&api_key=ROjXuTxYiTJYUhG9LBTyiDeGRxSOhCS5&rating=g&limit=3`)
            .then(res=>res.json())
            .then(data=>{
                // console.log("new")
                console.log(data)
                setGifs(data)
            })
            .catch(e=>{
                console.log(e)
            })
    }, [])

    // // console.log(gifs)
    function handleSubmitEvent(text){
    //    setValue(text)
        console.log(text)
    }
    return(
        <div>
            <GifSearch handleSubmitEvent={handleSubmitEvent}/>
            <GifList gifsData={gifs}/>
        </div>
    )
}

export default GiftListContainer