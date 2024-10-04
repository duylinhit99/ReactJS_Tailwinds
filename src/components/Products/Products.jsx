import React from 'react'
import Img1 from "../../assets/women/women.png"
import Img2 from "../../assets/women/women1.png"
import Img3 from "../../assets/women/women2.png"
import Img4 from "../../assets/women/women3.png"
import { FaStar } from "react-icons/fa6";
const ProductData = [
    {
        id: 1,
        img: Img1,
        title: "Women Ethnic",
        rateing: 4.6,
        color: "While",
        aosDeplay: "0"
    },
    {
        id: 2,
        img: Img2,
        title: "Women western",
        rateing: 4.2,
        color: "Red",
        aosDeplay: "200"
    },
    {
        id: 3,
        img: Img3,
        title: "Goggles",
        rateing: 5.0,
        color: "Gray",
        aosDeplay: "600"
    },
    {
        id: 4,
        img: Img4,
        title: "Printed T-Shirt",
        rateing: 4.6,
        color: "Yellow",
        aosDeplay: "1000"
    },
    {
        id: 5,
        img: Img1,
        title: "Fashin T-Shirt",
        rateing: 5.0,
        color: "while",
        aosDeplay: "1200"
    }
]
const Products = () => {


    return (
        <div className='dark:bg-gray-800 pt-14 -scroll-mb-12'>
            <div className='container'>
                {/* header product */}
                <div className='text-center mb-10 max-w-[600px] mx-auto'>
                    <p data-aos="fade-up" className='text-primary text-sm'>Top Selling Products for you</p>
                    <h1 data-aos="fade-up" className='text-3xl font-bold dark:text-white'>Products</h1>
                    <p data-aos="fade-up" className='text-xs text-gray-400'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis nisi quia cum!</p>
                </div>
                {/* body product */}
                <div>
                    <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5'>
                        {/* cart product */}
                        {
                            ProductData.map((data) => (
                                <div
                                    data-aos="fade-up"
                                    data-aos-deplay={data.aosDeplay}
                                    key={data.id} className='space-y-3'>
                                    <img src={data.img} alt=""
                                        className='h-[220px] w-[150px] object-cover rounded-md'
                                    />
                                    <h3 className='font-semibold dark:text-white'>{data.title}</h3>
                                    <span className='text-sm text-gray-600'>{data.color}</span>
                                    <div className='flex items-center gap-1'>
                                        <FaStar className='text-yellow-400' />
                                        <span className='dark:text-white'>{data.rateing}</span>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    {/* button all product */}
                    <div
                        className='flex justify-center mt-10'>
                        <button
                            className=' w-[100px] bg-primary rounded-md text-white py-1 transform transition  hover:scale-105'
                        >View All</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Products