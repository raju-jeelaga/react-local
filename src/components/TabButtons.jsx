export default function TabButtons({label, onSelect, isSelected}){
    //console.log(" Tab Component coming");
    return(
        <li>
            <button className={isSelected ? 'active' : ''} onClick={onSelect}>{label}</button>
        </li>
    )
}