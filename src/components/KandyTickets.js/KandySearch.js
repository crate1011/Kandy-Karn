export const KandySearch = ({ setterFunction }) => {
    return (
        <div>
        <input 
            onChange={
                (changeEvent) => {
                    setterFunction(changeEvent.target.value)
                }
            }
            
        type="text" className="search__Kandy" placeholder="What Kandy Are You Looking For?" />
        </div>
    )
}