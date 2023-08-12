import { useDataContext } from "../context/DataContext";


export function Homepage(){
    const { state } = useDataContext();
    
    return(
    <div className="main-page">
        <div className="rows">
            <div className="dashboard-info">
                <p style={{color: "green"}} className="digits">{state.data.reduce((acc,curr)=> acc += curr.stock, 0)}</p>
                <p>Total Stock</p>
            </div>
            <div className="dashboard-info">
                <p style={{color: "orange"}} className="digits">{state.data.reduce((acc,curr)=> acc += curr.delivered, 0)}</p>
                <p>Total Delivered</p>
            </div>
            <div className="dashboard-info">
                <p style={{color: "red"}} className="digits">{state.data.reduce((acc,curr)=>{
                if(curr.stock <= 10){
                    return acc+1
                }
                else{
                    return acc;
                }
                }, 0)}</p>
                <p>Low Stock Items</p>
            </div>
        </div>
    </div>);
}