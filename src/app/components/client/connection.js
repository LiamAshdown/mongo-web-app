'use client'

import Toggle from '@/app/components/client/inputs/toggle'
import TextArea from '@/app/components/client/inputs/textarea'
import Button from '@/app/components/client/inputs/button'
import SaveFavorite from '@/app/components/client/modals/save-favorite'
import { TbStar } from 'react-icons/tb'
import { MdEdit } from 'react-icons/md'

import { useState } from 'react'

const Connection = () => {
  const [enableConnectionString, setEnableConnectionString] = useState(true)
  const [showFavoriteModal, setShowFavoriteModal] = useState(false)

  return (
    <div>
      <div className="shadow-lg rounded-3xl border-2 border-gray-200 p-8">
        <div className="flex justify-between items-center">
          <div className="flex-1">
            <h1 className="text-2xl font-medium flex items-center group gap-1">
              <span>New Connection</span>
              <div
                className="hidden text-gray-500 group-hover:block hover:bg-gray-200 hover:text-black rounded-full p-1 transition-all duration-400 ease-in-out hover:cursor-pointer"
                onClick={() => setShowFavoriteModal(true)}
              >
                <MdEdit size={20} />
              </div>
            </h1>
            <h2 className="text-gray-500 text-sm mt-2">
              Connect to a MongoDB deployment
            </h2>
          </div>
          <div className="flex flex-col items-center hover:text-green-700 cursor-pointer transition-all duration-400 ease-in-out" onClick={() => setShowFavoriteModal(true)}>
            <TbStar size={28} className="mr-2" />
            <span className="uppercase font-medium text-sm">Favorite</span>
          </div>
        </div>
        <div className="mt-2">
          <div className="flex justify-between items-center mb-2">
            <div>
              <label className="text-sm font-medium">
                URI
              </label>
            </div>
            <div>
              <Toggle
                label='Edit Connection String'
                size='small'
                onChange={() => setEnableConnectionString(!enableConnectionString)}
              />
            </div>
          </div>
          <div>
            <TextArea disable={!enableConnectionString} />
          </div>
        </div>
        <div className="mt-4 flex justify-between items-center">
          <div>
            <Button variant='white'>Save</Button>
          </div>
          <div className="flex gap-2">
            <Button variant='outline-primary'>Save & Connect</Button>
            <Button variant='primary'>Connect</Button>
          </div>
        </div>
      </div>
      <SaveFavorite show={showFavoriteModal} onClose={() => setShowFavoriteModal(false)} />
    </div>
  )
}

export default Connection
