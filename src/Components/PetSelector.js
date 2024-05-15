


function PetSelector({sendDataToParent}){



      const petSelector = (event)=>{
     
        sendDataToParent(event.target.value);
      }


    return(
        <>
          Type:
              <select onChange={petSelector} className="form-select">
                <option  value="" selected>
                  All
                </option>
                <option value="Cat">Cat</option>
                <option value="Dog">Dog</option>
                <option value="Rabbit">Rabbit</option>
              </select>
        </>


    )

}

export default PetSelector