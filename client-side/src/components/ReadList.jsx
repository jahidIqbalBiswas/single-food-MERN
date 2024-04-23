import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import {deleteFood, fetchFoods} from "../api-services/apis.js";
import ListLoader from "../loaders/ListLoader.jsx";
import toast from "react-hot-toast";

const ReadList = () => {
    const [foods, setFoods] = useState(null);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        readData()
    }, []);
    const readData = () => {
        fetchFoods().then((res) => {
            setFoods(res.data)
        })
    }
    const deleteItem = (id) => {
        setLoading(true)
        deleteFood(id).then((res) => {
            if(res){
                readData()
                setLoading(false)
                toast.success("A food deleted successfully.")
            }else{
                toast.error("Could not delete food.")
            }
        })
    }
    return (
        <div className="container p-8">
            <h2 className="ms-3">Available Foods: {foods !== null && foods.length}</h2>
            {
                loading === true && <ListLoader/>
            }
            {
                foods === null ? <ListLoader/> : foods.length === 0 ?
                    <h1 className="text-center my-20">No available foods.</h1> : <div className="flex flex-wrap">
                        {foods.map((food, index) => {
                            return (
                                <div key={index} className="card w-[23%] bg-base-100 shadow-xl m-[10px]">
                                    <div className="indicator absolute top-0 right-16">
                                        <span
                                            className="indicator-item indicator-middle indicator-end badge mt-8 bg-[#A855F7] border-[#A855F7] text-white p-3"
                                            style={{borderRadius: 5}}>Tk: {food.price}.00</span>
                                    </div>
                                    <figure><img style={{height: 220, width: "100%", objectFit: "cover"}}
                                                 src={food.img}
                                                 alt={food.img}/>
                                    </figure>
                                    <div className="card-body p-5 pt-3">
                                        <h2 className="card-title text-[14px] mb-3">{food.name}</h2>
                                        <div className="card-actions justify-start">
                                            <Link to={`/update/${food["_id"]}`}
                                                  className="btn text-green-500 px-6 bg-[#7dfd7d29]">Edit</Link>
                                            <button onClick={() => {
                                                deleteItem(food["_id"])
                                            }}
                                                    className="btn bg-[#FEE2E2] text-red-500">Delete
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
            }

        </div>
    );
};

export default ReadList;