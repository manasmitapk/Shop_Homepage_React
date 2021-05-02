import logo from './logo.svg';
import './App.css';
import  Card from './card';
import React, { useEffect, useState } from "react";

function App() {
let products =[
  {
    id:1,
    name:"Product 1",
    price: 24,
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!",
    rating: 3,
  },
  {
    id:2,
    name:"Product 2",
    price: 124,
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!",
    rating:4,
  },
  {
    id:3,
    name:"Product 3",
    price: 241,
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!",
    rating:2,
  },
  {
    id:4,
    name:"Product 4",
    price: 214,
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!",
    rating:5,
  },
  {
    id:5,
    name:"Product 5",
    price: 294,
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!",
    rating:3,
  },
  {
    id:6,
    name:"Product 6",
    price: 409,
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!",
    rating:1,
  },


]

const [cart, setCart] = useState([])
const [total, setTotal] = useState(0)

let addtoCart =(product) => {
  setCart([...cart,product])
  setTotal(total + product.price)
  document.getElementById('bttn_' + product.id).disabled = true;
}

let removeCart = (item) =>{
  setCart(cart.filter(obj => obj.id !== item.id))
  setTotal(total - item.price)
  document.getElementById('bttn_' + item.id).disabled = false;
}
  return (
    <>
    <div className="conatiner">
      <div className="row">
        <div className="col-lg-3">
        <h1 class="my-4">Shop Name</h1>
                    <div class="list-group">
                        {cart.map((item) =>{
                          return <div class="list-group-item">
                            {item.name} - ${item.price}
                            <span>
                              <button className="btn btn-sm btn-danger" onClick={()=>{
                                removeCart(item)
                              }}>X</button></span></div>
                        })
                      }
                    </div>

                    <h3>Total: ${total}</h3>
        </div>

        <div className="col-lg-9">
                    <div class="row">
                        {products.map((product) =>{
                            return <Card productData={product} handleCart={addtoCart}></Card>  
                        })
                       }

                    </div>
                </div>
            </div>
        </div>
  
    </>
  );
}

export default App;
