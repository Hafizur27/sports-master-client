
import { FaHeadphones, FaMoneyCheck } from 'react-icons/fa';
import {BsFillLightbulbFill} from 'react-icons/bs';
import {MdOutlineStackedBarChart} from 'react-icons/md'
const Featured = () => {
    return (
        <>
        <h3 className="text-4xl font-serif text-center mb-10 ">
        <span className="text-yellow-500">Our Key</span> Featured
      </h3>
        <div className='bg-yellow-100 py-10'>
            <div className='container mx-auto'>
                <div className='grid grid-cols-2 md:grid-cols-4'>
                    <div className='flex flex-col justify-center items-center mt-3'>
                        <BsFillLightbulbFill className='text-5xl'></BsFillLightbulbFill>
                        <h3 className='font-bold text-xl mt-4'>Content Creation</h3>
                    </div>
                    <div className='flex flex-col justify-center items-center mt-3'>
                        <MdOutlineStackedBarChart className='text-5xl'></MdOutlineStackedBarChart>
                        <h3 className='font-bold text-xl mt-4'>Tracking System</h3>
                    </div>
                    <div className='flex flex-col justify-center items-center mt-3'>
                        <FaMoneyCheck className='text-5xl'></FaMoneyCheck>
                        <h3 className='font-bold text-xl mt-4'>Easy Payment</h3>
                    </div>
                    <div className='flex flex-col justify-center items-center mt-3'>
                        <FaHeadphones className='text-5xl'></FaHeadphones>
                        <h3 className='font-bold text-xl mt-4'>Contact Us</h3>
                    </div>
                </div>
            </div>
        </div>
        </>
        
    );
};

export default Featured;