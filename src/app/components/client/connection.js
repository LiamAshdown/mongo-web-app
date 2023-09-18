'use client'

import { TbStar } from 'react-icons/tb'
import { MdEdit } from 'react-icons/md'
import { AiFillExclamationCircle } from 'react-icons/ai'

import { useDispatch, useSelector } from 'react-redux'
import { setSavedConnections, setRecentConnections, setSelectedConnection, testConnection, getIsLoading, getError } from '@/app/store/slices/connection'

import { useState } from 'react'

import Toggle from '@/app/components/client/inputs/toggle'
import TextArea from '@/app/components/client/inputs/textarea'
import Button from '@/app/components/client/inputs/button'
import SaveFavorite from '@/app/components/client/modals/save-favorite'

const Connection = () => {
  const [enableConnectionString, setEnableConnectionString] = useState(true)
  const [showFavoriteModal, setShowFavoriteModal] = useState(false)
  const error = useSelector(getError)

  const [connectionString, setConnectionString] = useState('mongodb://localhost:27017')
  const dispatch = useDispatch()

  const onSaveConnection = (data) => {
    const savedData = {
      name: data.name,
      color: data.color,
      connectionString: connectionString
    }

    dispatch(setSavedConnections(savedData))
    dispatch(setSelectedConnection(savedData))
    dispatch(setRecentConnections(savedData))

    setShowFavoriteModal(false)
  }

  const onConnect = async () => {
    const response = await dispatch(testConnection(connectionString))

    if (response.error) {
      return
    }
  }

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
            <TextArea
              disable={!enableConnectionString}
              value={connectionString}
              onChange={(e) => setConnectionString(e.target.value)}
            />
          </div>
        </div>
        {error && (
          <div className="mt-2">
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
              <div className="font-semibold flex items-center">
                <AiFillExclamationCircle size={20} className="mr-2" />
                <span>{error}</span>
              </div>
            </div>
          </div>
        )}
        <div className="mt-4 flex justify-between items-center">
          <div>
            <Button variant='white'>Save</Button>
          </div>
          <div className="flex gap-2">
            <Button variant='outline-primary' onClick={() => setShowFavoriteModal(true)}>Save & Connect</Button>
            <Button variant='primary' onClick={() => onConnect()}>Connect</Button>
          </div>
        </div>
      </div>
      <SaveFavorite show={showFavoriteModal} onClose={() => setShowFavoriteModal(false)} onSave={onSaveConnection} />
    </div>
  )
}

export default Connection
