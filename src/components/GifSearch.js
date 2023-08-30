import { useState } from "react"

function GifSearch({handleSubmitEvent}){
    let [search, setSearch] = useState()
    function handleSearch(e){
        let searchValue = e.target.textContent
        setSearch(searchValue)
        handleSubmitEvent(search)
    }
    return (
        <div>
            <form>
                <label>Search</label>
                <input type="text" name="search" placeholder="enter search key" onChange={handleSearch}/>
            </form>
        </div>
    )
}
export default GifSearch