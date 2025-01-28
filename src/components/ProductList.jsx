export default function ProductList({id, name, price, category, image}){
    return(
        <li>
            <span>{id}</span>
            <h2>{name}</h2>
            <strong>{price}</strong>
            <span>{category}</span>
            <img src={image} alt={name} />
        </li>
        
    )
}