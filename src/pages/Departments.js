import { useDataContext } from "../context/DataContext";
import { useNavigate } from "react-router";

export function Departments(){
    const navigate = useNavigate();
    const { state } = useDataContext();
    const departmentName = state.data.map((item)=>item.department).filter((item, index)=> state.data.map((item)=>item.department).indexOf(item) === index);
    return(<div className="main-page">
        <div className="rows">
            {departmentName.map((name,index)=><div className="dashboard-info" key={index} onClick={()=>navigate(`/departments/${name}`)}>
            <p>{name}</p>
            </div>)}
        </div>
    </div>)
}