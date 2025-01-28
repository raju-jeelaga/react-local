import TabButtons from "./TabButtons.jsx";
import { EXAMPLES } from "../data.jsx";
import { useState } from "react";


export default function Examples(){
    const [selectedTopic, setselectedTopic] = useState('');

    let tabContent = <p>Please select the Button Atleast</p>;
    
    function handleSelect(selectedButton){
        setselectedTopic(selectedButton);
    }

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

    return (
        <section id="examples">
        <h2>Examples</h2>
        <menu>
          <TabButtons 
            isSelected={selectedTopic === 'components'}
            onSelect={() => handleSelect('components')} 
          label="Components"/>
          <TabButtons 
            isSelected={selectedTopic === 'jsx'}
            onSelect={() => handleSelect('jsx')} 
            label="JSX"/>
          <TabButtons 
            isSelected={selectedTopic === 'props'}
            onSelect={() => handleSelect('props')} 
            label="Props"/>
          <TabButtons 
            isSelected={selectedTopic === 'state'}
            onSelect={() => handleSelect('state')} 
            label="State"/>
        </menu>
        {tabContent}
      </section>
    )
}