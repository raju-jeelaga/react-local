import { useState } from 'react';
import CoreConcept from './components/CoreConcept.jsx';
import { CORE_CONCEPTS } from './data.jsx';
import TabButtons from './components/TabButtons.jsx';
import { EXAMPLES } from './data.jsx';

function App() {
  const [item, setItem] = useState("");
  const [ItemList, setItemList] = useState([]);

  const [selectedTopic, setselectedTopic] = useState('');

  let tabContent = <p>Please select the Button Atleast</p>;

  if(selectedTopic){
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  
  }

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

    function handleSelect(selectedButton){
      setselectedTopic(selectedButton);
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
      <section id="examples">
        <h2>Examples</h2>
        <menu>
          <TabButtons onSelect={() => handleSelect('components')} label="Components"/>
          <TabButtons onSelect={() => handleSelect('jsx')} label="JSX"/>
          <TabButtons onSelect={() => handleSelect('props')} label="Props"/>
          <TabButtons onSelect={() => handleSelect('state')} label="State"/>
        </menu>
        {tabContent}
      </section>
      </main>
    </>
  )
}

export default App
