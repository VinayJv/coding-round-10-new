import { useParams } from "react-router";
import { useDataContext } from "../context/DataContext";
import { Card } from "../components/Card";

export function Singledepartment(){
    const { state } = useDataContext();
    const { departmentName } = useParams();
    const departmentProducts = state.data.filter((item)=>item.department === departmentName);
    return(
    <div className="main-page">
            <h3>{departmentName}'s Products</h3>
        <div className="department-product-container">
            {departmentProducts.map((product, index)=><Card data={product} key={index}/>)}
        </div>
    </div>)
}