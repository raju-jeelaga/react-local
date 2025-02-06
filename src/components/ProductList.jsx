export default function ProductList({id, name, price, category, image}){
    return(
        <li>
            <img src={image} alt={name} />
            <span>{id}</span>
            <h2>{name}</h2>
            <strong>{price}</strong>
            <span>{category}</span>
        </li>
        
    )
}