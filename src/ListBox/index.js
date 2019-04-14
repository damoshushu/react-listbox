import React,{useState,useEffect } from "react";
import Options from '../info-json';



export default  function ListBox(props) {
    const [allItems,setAllItems]=useState(Options);
    const [showItems, setShowItems] = useState([]);
    const [search, setSearch] = useState(null);
    const [checkChange, setCheckChange]=useState(false);

    useEffect(() => {
        setShowItems(
            allItems.map(data => {
                return (
                    <div>
                        <ul>
                            <label
                                hidden={!(search === null || data.name.toLowerCase().includes(search.toLowerCase()))}>
                                <input type={"checkbox"} value={data.name} onChange={handleChange}
                                       checked={data.isChecked}/>{data.name}</label>
                        </ul>
                    </div>
                )
            })
        );
    }, [search , checkChange]);


    const handleChange = (event)=> {
        let tmpItems=allItems;
        let item = tmpItems.find((x) => x.name === event.target.value);
        item.isChecked = !item.isChecked;
        setAllItems(tmpItems)
        setCheckChange(!checkChange);
    }

    const selectedItems=allItems.filter((x)=>x.isChecked===true)


    return (
        <div>
            <button>Hello</button><br/>
            <input type="text" placeholder="Enter item to be searched"
                   onChange={(e) => setSearch(e.target.value)}/>
            {showItems}
            {selectedItems.toString()}
        </div>
    )
}