'use client'

import { BiSolidCog, BiRefresh } from 'react-icons/bi'
import { BsFillDatabaseFill } from 'react-icons/bs'
import { AiOutlinePlus } from 'react-icons/ai'
import { useDispatch } from 'react-redux'
import { attachDatabases, toggleDatabaseCreateModal } from '@/app/store/slices/database'

const Main = () => {
  const dispatch = useDispatch()

  const onRefreshDatabases = () => {
    dispatch(attachDatabases())
  }

  const onCreateDatabase = () => {
    dispatch(toggleDatabaseCreateModal())
  }


  return (
    <div className="h-full">
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
        <div className="flex justify-between items-center text-green-800 font-medium hover:bg-gray-200 p-2 rounded-lg cursor-pointer transition-all duration-300 ease-in-out">
          <div className="flex items-center gap-2">
            <BsFillDatabaseFill size={18} />
            Databases
          </div>
          <div className="flex items-center gap-2">
            <BiRefresh size={24} className="hover:animate-spin hover:rounded-full hover:bg-gray-300 hover:text-black" onClick={onRefreshDatabases} />
            <AiOutlinePlus size={24} className="hover:rounded-full hover:bg-gray-300 hover:text-black" onClick={onCreateDatabase} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main
