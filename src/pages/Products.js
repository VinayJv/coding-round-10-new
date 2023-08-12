import { Card } from "../components/Card";
import { useDataContext } from "../context/DataContext";
import { useState } from "react";

export function Products(){
    const { state: { data }, dispatch } = useDataContext();
    const [ filter, setFilter] = useState("All");
    const [sort, setSort] = useState("Name");
    const [lowStock, setLowStock] = useState(false);
    const [showForm, setShowForm] = useState(false);

    const filteredData = () => {
        let temp = [];
        if(filter === "All"){
            temp = data;
        }
        else {
            temp = data.filter((item)=>item.department == filter);
        }
        const sortFurther = () => {
            if(sort === "Name"){
                return temp.sort((a,b)=>a.name - b.name);
            }
            else if(sort === "Price"){
                return temp.sort((a,b)=>a.price - b.price);
            }
            else{
                return temp.sort((a,b)=>a.stock - b.stock);
            }
        }
        return lowStock ? temp.filter((item)=>item.stock <= 10) : sortFurther();
    }

    const changeFilter = (event) => {
        setFilter(event.target.value);
    }

    const changeSort = (event) => {
        setSort(event.target.value);
    }

    const handleForm = (event) => {
        const elements = event.target.elements;
        let newProduct = {
            department: elements[0].value,
            name: elements[1].value,
            description:
            elements[2].value,
            price: elements[3].value,
            stock: elements[4].value,
            sku: elements[5].value,
            supplier: elements[6].value,
            delivered: elements[7].value,
            imageUrl: elements[8].value,
          }
        console.log(newProduct);
        dispatch({type: "ADD_NEW_PRODUCT", payload: newProduct});
        setShowForm(false);
        event.preventDefault();
        event.target.reset();
    }

    return(
    <div className="main-page">
        <div className="filters-container">
            <h3>Products({data.length})</h3>
            <select onChange={changeFilter}>
                <option value="All">All Departments</option>
                <option value="Kitchen">Kitchen</option>
                <option value="Clothing">Clothing</option>
                <option value="Toys">Toys</option>
            </select>
            <label>
                <input type="checkbox" onChange={(event)=>{
                    if(event.target.checked === true){
                        setLowStock(true);
                    }
                    else {
                        setLowStock(false);
                    }
                }}></input>Low Stock Items
            </label>
            <select onChange={changeSort}>
                <option value="Name">Name</option>
                <option value="Price">Price</option>
                <option value="Stock">Stock</option>
            </select>
            <button onClick={()=>setShowForm(!showForm)}>New</button>
        </div>
        <div className="products-container">
            {filteredData().map((item,index)=><Card data={item} key={index}/>)}
        </div>
        <div className="modal" style={{display: showForm ? "block" : "none"}}>
            <h1>Add New Products</h1>
            <form onSubmit={handleForm}>
                <label htmlFor="departmentName">Departments</label><br />
                <select id="departmentName">
                    <option>Select Departments</option>
                    <option>Kitchen</option>
                    <option>Cloting</option>
                    <option>Toys</option>
                </select><br />
                <label htmlFor="name">Name:</label><br />
                <input id="name" required></input>< br/>
                <label htmlFor="description">Description:</label><br />
                <textarea id="description" required></textarea><br />
                <label htmlFor="price">Price:</label><br />
                <input id="price" type="number" required></input>< br/>
                <label htmlFor="stock">Stock:</label><br />
                <input id="stock" type="number" required></input>< br/>
                <label htmlFor="SKU">SKU:</label><br />
                <input id="SKU" required></input>< br/>
                <label htmlFor="supplier">Supplier:</label><br />
                <input id="supplier" required></input>< br/>
                <label htmlFor="delivered">Delivered:</label><br />
                <input id="delivered" type="number" required></input>< br/>
                <label htmlFor="image">Image URL:</label><br />
                <input id="image" required></input>< br/>
                <button type="submit">Add Product</button>
            </form>
        </div>
    </div>);
}
