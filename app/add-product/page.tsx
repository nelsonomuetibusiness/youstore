import React from 'react'
import AddForm from '../components/AddForm';

const AddProductPage = () => {
  return <div className=' px-4 md:px-12 bg-[#F8F9FA]'>
    <h2 className='text-center font-semibold pt-8 text-xl md:text-2xl w-full mx-auto'>Add a new product</h2>

    {/*form Component*/}
    <AddForm/>
  </div>;
}

export default AddProductPage;