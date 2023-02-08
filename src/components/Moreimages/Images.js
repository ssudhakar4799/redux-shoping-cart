import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
export default function Images() {
    const { id } = useParams();
    const [image, setimage] = useState()
    useEffect(() => {

        axios.get(`https://dummyjson.com/products/${id}`)
            .then((res) => setimage(res.data))
            .catch(console.log("errors"))
    }, [])
    console.log(image);
    return (
        <div>Images
        {
            image?.images.map((pic)=>{
                return(
                    <div>
                    <img src={pic} width="50%" alt=''></img>
                    </div>
                )
            })
        }
        </div>
    )
}
