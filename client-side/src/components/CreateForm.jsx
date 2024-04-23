import React, {useEffect} from 'react';
import {createFood} from "../api-services/apis.js";
import {useNavigate} from "react-router-dom";
import toast from "react-hot-toast";

const CreateForm = () => {
    const navigate = useNavigate();
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
        createFood(postData).then((res) => {
           if(res){
               toast.success("Successfully Saved food.")
               setTimeout(()=>{
                   navigate("/")
               })
           }else{
               toast.error("Could not saved food.")
           }
        })
    }
    return (
        <div className="container p-8">
            <h1 className="text-3xl mb-10">Create Food Item</h1>
            <form onSubmit={submitForm} action="">
                <div className="flex flex-wrap">
                    <div className="w-[30%]">
                        <label htmlFor="foodName">Food Name</label>
                        <br/>
                        <input name="foodName" type="text" placeholder="Type here"
                               className="input w-full max-w-sm border border-gray-600 mt-2" id="foodName"/>
                    </div>
                    <div className="w-[30%]">
                        <label htmlFor="foodCode">Food Code</label>
                        <br/>
                        <input name="foodCode" type="number" placeholder="Type here"
                               className="input w-full max-w-sm border border-gray-600 mt-2" id="foodCode"/>
                    </div>
                    <div className="w-[30%]">
                        <label htmlFor="foodImg">Food Image</label>
                        <br/>
                        <input name="foodImg" type="text" placeholder="Type here"
                               className="input w-full max-w-sm border border-gray-600 mt-2" id="foodImg"/>
                    </div>

                </div>
                <div className="flex flex-wrap mt-5">
                    <div className="w-[30%]">
                        <label htmlFor="foodCat">Food Category</label>
                        <br/>
                        <input name="foodCat" type="text" placeholder="Type here"
                               className="input w-full max-w-sm border border-gray-600 mt-2" id="foodCat"/>
                    </div>
                    <div className="w-[30%]">
                        <label htmlFor="foodQty">QTY</label>
                        <br/>
                        <input name="foodQty" type="number" placeholder="Type here"
                               className="input w-full max-w-sm border border-gray-600 mt-2" id="foodQty"/>
                    </div>
                    <div className="w-[30%]">
                        <label htmlFor="foodPrice">Price</label>
                        <br/>
                        <input name="foodPrice" type="number" placeholder="Type here"
                               className="input w-full max-w-sm border border-gray-600 mt-2" id="foodPrice"/>
                    </div>

                </div>
                <button className="btn btn-primary mt-5" type="submit">Save This Food</button>
            </form>
        </div>
    );
};

export default CreateForm;