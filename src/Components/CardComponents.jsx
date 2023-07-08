import React from 'react'

const CardComponents = ({text, generateText, copyText}) => {
  return (
    <div className=' rounded-xl'>
        <div className='px-5 bg-slate-600 flex items-center justify-between rounded-t-xl'>
            <h1 className='py-5 px-2 text-white font-semibold'>Generated Text</h1>
            <i onClick={() => copyText()} className="fa-solid fa-copy text-white cursor-pointer"></i>
        </div>

        <div className='card-body bg-slate-800 h-[200px]'>
            <p className='p-5 text-base font-semibold text-white'>{generateText()}</p>
        </div>
       
    </div>
  )
}

export default CardComponents