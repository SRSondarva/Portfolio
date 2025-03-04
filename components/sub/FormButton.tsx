import React from 'react'
import { useFormStatus } from 'react-dom';
import { motion } from "framer-motion";

type Props = {}

const FormButton = (props: Props) => {
    const { pending } = useFormStatus();

  return (
    <button className=' h-[3rem] w-[8rem] bg-gray-200 text-black rounded-full outline-none flex justify-center items-center' 
    type="submit"
    disabled={pending}
    >{
        pending ? <motion.div
        className='flex justify-center items-center'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}>
        <div className='h-5 w-5 animate-spin rounded-full border-2 border-black  mr-3'></div>
        Submitting
        </motion.div> : (
        <span>Submit</span>
    )}
    </button>
  )
}

export default FormButton