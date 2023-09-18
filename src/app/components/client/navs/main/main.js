'use client'

import { BiPlus, BiSolidCog } from 'react-icons/bi'
import { TbStar } from 'react-icons/tb'
import { GrConnectivity } from 'react-icons/gr'
import Button from '@/app/components/client/inputs/button'
import { useSelector } from 'react-redux'
import Item from './item'

const Connection = () => {
  return (
    <div className="h-screen">
      <div className="bg-green-800 text-white p-4">
        <div className="flex justify-between items-center">
          <div>
            <span className="text-2xl font-medium">Localhost:271012</span>
          </div>
          <div>
            <BiSolidCog size={18} />
          </div>
        </div>
      </div>
      <div className="bg-gray-100 p-4 h-full">
      </div>
    </div>
  )
}

export default Connection
