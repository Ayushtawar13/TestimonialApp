import React from "react";
import Card from "./Card";
import { useState } from "react";
import reviews from "../../data";
import {FiChevronRight , FiChevronLeft } from 'react-icons/fi'



function Testimonial(props){

    let [index , setIndex] = useState(0);
    
    function leftClickHnadler(){
        if(index-1 < 0 )
        {
            setIndex(reviews.length-1);
        }
        else
        {
            setIndex( index-1);
        }
    }

    function rightClickHnadler(){
        if(index+1 > reviews.length-1)
        {
            setIndex(0);
        }
        else{
            setIndex(index+1);
        }
    }

    function surpriseHandler()
    {
        let randomIndex = Math.floor(Math.random() * reviews.length);
        setIndex(randomIndex);
    }
    return(
        <div className=" w-[85vw] md:w-[700px] rounded-md bg-white flex flex-col justify-center items-center hover:shadow-xl  mt-10 p-10 transition-all duration-700">
            <Card reviews={props.reviews[index]}></Card>
            
                <div className=" flex text-3xl mt-5 mx-auto gap-3 text-violet-400 font-bold">
                    
                    <button onClick={leftClickHnadler} className=" cursor-pointer hover:text-violet-500">
                        <FiChevronLeft></FiChevronLeft>
                    </button>

                    <button onClick={rightClickHnadler} className=" cursor-pointer hover:text-violet-500">
                        <FiChevronRight></FiChevronRight>
                    </button>

                </div>

                <div >
                    <button onClick={surpriseHandler} className=" bg-violet-400 hover:bg-violet-500 transition-all duration-200 mt-3 cursor-pointer px-10 py-2 rounded-md font-bold text-white text-lg ">
                        {"Surprise Me"}
                    </button>
                </div>
        </div>
    );
};

export default Testimonial;