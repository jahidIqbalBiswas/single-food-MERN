import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {fetchFoodByID, updateFood} from "../api-services/apis.js";
import toast from "react-hot-toast";

const UpdateForm = () => {
    const navigate = useNavigate();
    const [existingFormData, setExistingFormData] = useState(null)
    const {id} = useParams();
    useEffect(() => {
        fetchFoodByID(id).then(res => {
            setExistingFormData(res.data)
        })
    }, []);
    const submitForm = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target)
        const postData = {
            name:formData.get('foodName'),
            code:Number(formData.get('foodCode')),
            img:formData.get('foodImg'),
            category:formData.get('foodCat'),
            qty:Number(formData.get('foodQty')),
            price:Number(formData.get('foodPrice'))
        }
        updateFood(id,postData).then((res) => {
            if(res){
                toast.success("Successfully Updated food.")
                setTimeout(()=>{
                    navigate("/")
                })
            }else{
                toast.error("Could not update food.")
            }
        })
    }
    return (
        <div>
            <div className="container p-8">
                <h1 className="text-3xl mb-10">Update Food Item</h1>
                <form onSubmit={submitForm} action="">
                    <div className="flex flex-wrap">
                        <div className="w-[30%]">
                            <label htmlFor="foodName">Food Name</label>
                            <br/>
                            <input defaultValue={existingFormData !== null ? existingFormData['name'] : ""} name="foodName" type="text" placeholder="Type here"
                                   className="input w-full max-w-sm border border-gray-600 mt-2" id="foodName"/>
                        </div>
                        <div className="w-[30%]">
                            <label htmlFor="foodCode">Food Code</label>
                            <br/>
                            <input defaultValue={existingFormData !== null ? existingFormData['code'] : ""} name="foodCode" type="number" placeholder="Type here"
                                   className="input w-full max-w-sm border border-gray-600 mt-2" id="foodCode"/>
                        </div>
                        <div className="w-[30%]">
                            <label htmlFor="foodImg">Food Image</label>
                            <br/>
                            <input defaultValue={existingFormData !== null ? existingFormData['img'] : ""} name="foodImg" type="text" placeholder="Type here"
                                   className="input w-full max-w-sm border border-gray-600 mt-2" id="foodImg"/>
                        </div>

                    </div>
                    <div className="flex flex-wrap mt-5">
                        <div className="w-[30%]">
                            <label htmlFor="foodCat">Food Category</label>
                            <br/>
                            <input defaultValue={existingFormData !== null ? existingFormData['category'] : ""} name="foodCat" type="text" placeholder="Type here"
                                   className="input w-full max-w-sm border border-gray-600 mt-2" id="foodCat"/>
                        </div>
                        <div className="w-[30%]">
                            <label htmlFor="foodQty">QTY</label>
                            <br/>
                            <input defaultValue={existingFormData !== null ? existingFormData['qty'] : ""} name="foodQty" type="number" placeholder="Type here"
                                   className="input w-full max-w-sm border border-gray-600 mt-2" id="foodQty"/>
                        </div>
                        <div className="w-[30%]">
                            <label htmlFor="foodPrice">Price</label>
                            <br/>
                            <input defaultValue={existingFormData !== null ? existingFormData['price'] : ""} name="foodPrice" type="number" placeholder="Type here"
                                   className="input w-full max-w-sm border border-gray-600 mt-2" id="foodPrice"/>
                        </div>

                    </div>
                    <button className="btn btn-primary mt-5" type="submit">Update Food Info</button>
                </form>
            </div>
        </div>
    );
};

export default UpdateForm;