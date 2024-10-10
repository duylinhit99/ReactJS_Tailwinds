import React from 'react'
import { FaStar } from "react-icons/fa";
import Img1 from "../../assets/top/men1.png"
import Img2 from "../../assets/top/men2.png"
import Img3 from "../../assets/top/top3.png"
const TopProductList = [
    {
        id: 1,
        img: Img1,
        title: "Casual Wear",
        discription: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
    },
    {
        id: 2,
        img: Img2,
        title: "Casual Wear",
        discription: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
    },
    {
        id: 3,
        img: Img3,
        title: "Casual Wear",
        discription: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
    }
]
const TopProducts = () => {
    return (
        <div className='dark:bg-gray-800 pt-14 -scroll-mb-12'>
            <div className='container'>
                {/* header top products */}
                <div className='text-left mb-24'>
                    <p className='text-primary text-sm'>Top Rated Products for you</p>
                    <h3 className='text-3xl font-bold dark:text-white'>Best Products</h3>
                    <p className='text-xs text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, corporis.</p>
                </div>
                {/* products top card */}
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 sm:gap-5 place-items-center '>
                    {
                        TopProductList.map((data) => (
                            <div
                                data-aos="zoom-in"
                                className='rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/80
                                            dark:hover:bg-primary hover:text-white
                                            relative shadow-xl duration-high group max-w-[300px]
                            '>
                                {/* imgage */}
                                <div className='h-[100px]'>
                                    <img className='max-w-[140px] block mx-auto transform -translate-y-20
                                                    group-hover:scale-105 duration-300 drop-shadow-md
                                    '
                                        src={data.img}
                                        alt=""
                                    />
                                </div>
                                {/* rating */}
                                <div className='p-4 text-center'>
                                    <div className='w-full flex items-center justify-center gap-1'>
                                        <FaStar className=' text-yellow-400' />
                                        <FaStar className=' text-yellow-400' />
                                        <FaStar className=' text-yellow-400' />
                                        <FaStar className=' text-yellow-400' />
                                        <FaStar className=' text-yellow-400' />
                                    </div>
                                    <h3 className='dark:text-white font-bold text-xl'>{data.title}</h3>
                                    <p className='text-gray-500 group-hover:text-while duration-300 text-sm line-clamp-2'>{data.discription}</p>
                                    <button className='bg-primary hover:scale-105 duration-300
                                     text-white py-1 px-4 rounded-full mt-4 
                                     group-hover:bg-white group-hover:text-primary'>
                                        Order Now
                                    </button>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default TopProducts