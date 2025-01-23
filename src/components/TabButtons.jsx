export default function TabButtons({label, onSelect}){
    //console.log(" Tab Component coming");
    return(
        <li>
            <button onClick={onSelect}>{label}</button>
        </li>
    )
}