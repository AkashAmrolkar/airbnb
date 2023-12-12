import React, { useState } from 'react'
import HeaderSwiper from './HeaderSwiper'
import { FaSlidersH } from 'react-icons/fa'

const SubHeader = () => {
  const [toggle, setToggle] = useState(false)

  const toggleHandler = ()=>{
    setToggle((prev)=>!prev)
  }
  return (
    <div className='grid grid-cols-12 gap-6 py-8'>
      <div className='col-span-9'>
        <HeaderSwiper />
      </div>
      <div className='col-span-3'>
        <div className='flex gap-3 items-center'>
          <div className='border rounded-2xl px-4 py-3 flex gap-3 items-center '><FaSlidersH className='w-5 h-5' /> Filter</div>
          <div className='border rounded-2xl px-4 py-3 flex gap-3 items-cente'>Display total before taxes
            <div>
              <label className="switch">
                <input type="checkbox" onChange={toggleHandler} checked={toggle}/>
                <span className="slider round bg-white rounded-2xl block "></span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SubHeader