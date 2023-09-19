'use client'

import { BiPlus, BiSolidCog } from 'react-icons/bi'
import { TbStar } from 'react-icons/tb'
import { GrConnectivity } from 'react-icons/gr'
import Button from '@/app/components/client/inputs/button'
import Item from './item'
import { selectAllSavedConnections, setNewConnection, setSelectedConnection } from '@/app/store/slices/connection'
import { useDispatch, useSelector } from 'react-redux'

const Connection = () => {
  const savedConnections = useSelector(selectAllSavedConnections)
  const dispatch = useDispatch()

  const onNewConnection = () => {
    dispatch(setNewConnection())
  }

  const onSelectConnection = (connection) => {
    console.log(connection)
    dispatch(setSelectedConnection(connection))
  }

  return (
    <div className="h-screen">
      <div className="bg-green-800 text-white p-4">
        <div className="flex justify-between items-center">
          <div>
            <span className="text-2xl font-medium">Compass</span>
          </div>
          <div>
            <BiSolidCog size={18} />
          </div>
        </div>
      </div>
      <div className="bg-gray-100 p-4 h-full">
        <div>
          <Button variant='white' block ripple onClick={onNewConnection}>
            <div className="flex justify-center items-center">
              <span>New Connection</span>
              <BiPlus size={20} className="ml-2 text-green-600" />
            </div>
          </Button>
        </div>
        <div className="mt-8">
          <h3 className="text-black text-md font-medium flex items-center">
            <TbStar size={18} className="mr-2" />
            <span>Saved Connections</span>
          </h3>
          <div className="mt-2 space-y-2">
            {savedConnections.map((item, index) => (
              <Item
                key={index}
                name={item.name}
                date={item.date}
                color={item.color}
                onClick={() => onSelectConnection(item)}
              />
            ))}
          </div>
        </div>
        <div className="mt-4">
          <h3 className="text-black text-md font-medium flex items-center">
            <GrConnectivity size={18} className="mr-2" />
            <span>Recents</span>
          </h3>
          <div className="mt-2 pl-2 space-y-2">
            <Item />
            <Item />
            <Item />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Connection
