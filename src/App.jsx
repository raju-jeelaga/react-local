import { useState } from 'react';

import { CORE_CONCEPTS } from './data.jsx';

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

    function CoreConcept({image, title, description}){
      return (
        <li>
          <img src={image} alt={title}/>
          <h3>{title}</h3>
          <p>{description}</p>
        </li>
      )
    }


  return (
    <>
      <h1>React 2 way data binding Examples</h1>
      <h2>Example 1</h2>
      <input 
      type="text" 
      value={item} 
      onChange={handleChangeItem}
      placeholder='Add Item'/>

      <button onClick={handleAddItem}>Add Item</button>

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
      <hr></hr>
      <main>
      <section id="core-concepts">
        <h2>Core Concepts</h2>
        <ul>
          <CoreConcept 
            image={CORE_CONCEPTS[0].image}
            title={CORE_CONCEPTS[0].title}
            description={CORE_CONCEPTS[0].description}  
          >
          </CoreConcept>
          <CoreConcept {...CORE_CONCEPTS[1]} />
          <CoreConcept {...CORE_CONCEPTS[2]} />
          <CoreConcept {...CORE_CONCEPTS[3]} />
        </ul>
      </section>
      </main>
    </>
  )
}

export default App
