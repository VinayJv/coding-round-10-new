import { useParams } from "react-router";
import { useDataContext } from "../context/DataContext";

export function Singleproduct(){
    const { productName } = useParams();
    const { state } = useDataContext();
    const singleProduct = state.data.find((item)=>item.name === productName);
    console.log(singleProduct);
    return(<div className="main-page">
        <h2>{singleProduct.name}</h2>
        <img src={singleProduct.imageUrl} className="big-image"></img>
        <p>Price: ${singleProduct.price}</p>
        <p>Stock: {singleProduct.stock}</p>
        <p>Supplier: {singleProduct.supplier}</p>
        <p>Department: {singleProduct.department}</p>
        <p>SKU: {singleProduct.sku}</p>
        <p>Delivered: {singleProduct.delivered}</p>
        <p>Description: {singleProduct.description}</p>
    </div>);
}