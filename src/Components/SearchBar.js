

function SearchBar( {sendDataToParent} ){   
   
  const userInput = (event)=>{
    sendDataToParent(event.target.value);
  }
    return(

        <>
        <div className="input-group rounded">
                
                <input
                  onChange={userInput}
                  type="search"
                  className="form-control rounded"
                  placeholder="Search"
                  aria-label="Search"
                  aria-describedby="search-addon"
                />
        </div>
      </>
  
    )
}

export default SearchBar