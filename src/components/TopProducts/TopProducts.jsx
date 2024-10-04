import React from 'react'
import Img1 from "../../assets/top/image.png"
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
                <div>
                    <p className='text-primary text-sm'>Top Rated Products for you</p>
                    <h3 className='text-3xl font-bold dark:text-white'>Best Products</h3>
                    <p className='text-xs text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, corporis.</p>
                </div>
                {/* products top card */}
                <div className=''>
                    <div>
                        <img src="" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopProducts