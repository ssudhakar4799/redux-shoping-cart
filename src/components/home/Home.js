import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { addcard, logout } from '../Store/Redux/auth/action';
import "./home.css"
export default function Home() {
  const state = useSelector((state) => state)
  console.log(state);
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [product, setproduct] = useState({})

  const logouts = () => {
    console.log("hi");
    console.log("ss");
    dispatch(logout(true))
    navigate("/")
  }
  useEffect(() => {
    axios.get('https://dummyjson.com/products')
      .then((res) => setproduct(res.data))
      .catch(console.log("errors"))
  }, [])
  const Addcard = (item) => {
    let empty = [];
    if (state.auth.addcard?.length) {
      empty = [...state.auth.addcard, item]
    }
    else {
      empty = [item]
    }
    dispatch(addcard([...new Set(empty)]))
  }
  console.log(product);
  return (
    <>
    <button onClick={()=>logouts()}>LOGOUT</button>
    <div className='container content'>

      {
        product.products?.map((data) => {
          return (
            <div className='list'>
              <h4>{data.title}</h4>
              <img src={data.images[0]} alt='' width="50%"></img>
              <p>{data.description}</p>
              <h4>Price : ${data.price}</h4>
              <h4>Stock : {data.stock}</h4>
              <h4>Rating : {data.rating}</h4>
              <button onClick={() => navigate(`/Images/${data.id}`)}>More images</button>
              <button onClick={() => Addcard(data)}>AddCard</button>
            </div>
          )
        })
      }
    </div>
    </>
  )
}
