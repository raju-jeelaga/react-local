import { useState } from 'react';
//import ItemList from './components/ItemList.jsx';

function App() {
  const [item, setItem] = useState("");
  const [ItemList, setItemList] = useState([]);

    function handleChangeItem(event){
        setItem(event.target.value);
    }

    function handleAddItem(){
      //if(item.trim() === "")
        setItemList([...ItemList, item])
        setItem("");
    }

    function handleDeleteItem(index){
      const updatedItemList = ItemList.filter((_, i) => i !== index);
      setItemList(updatedItemList);
    }


  return (
    <>
      <h1>React 2 way data binding Examples</h1>
      <input 
      type="text" 
      value={item} 
      onChange={handleChangeItem}
      placeholder='Add Item'/>

      <button onClick={handleAddItem} >Add Item</button>
      

      <h2>List Items</h2>
      <ul>
        
        {/* {ItemList.map((item) => (
          <li key={item}>{item}</li>
        ))} */}
        {ItemList.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => handleDeleteItem(index)}>X</button>
          </li>
        ))}

      </ul>
    </>
  )
}

export default App
