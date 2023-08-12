import { useNavigate } from "react-router";


export function Card({data}){
    const navigate = useNavigate();
    return(<div className="card" onClick={()=>navigate(`/products/${data.name}`)}>
        <img src={data.imageUrl}></img>
        <p>{data.name}</p>
        <p>{data.description}</p>
        <p>{data.price}</p>
        <p>{data.stock}</p>
        <p>{data.supplier}</p>
        </div>);
}