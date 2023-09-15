'use client'

import Modal from '@/app/components/client/modals/modal'
import Input from '@/app/components/client/inputs/input'
import FormGroup from '@/app/components/client/inputs/form-group'

import { FiSlash } from 'react-icons/fi'
import { BsCheck } from 'react-icons/bs'
import { useState } from 'react'

const SaveFavorite = ({ show, onClose }) => {
  const colors = [
    'none',
    'bg-red-500',
    'bg-yellow-500',
    'bg-green-500',
    'bg-blue-500',
    'bg-indigo-500',
    'bg-purple-500',
    'bg-pink-500'
  ]

  const [selectedColor, setSelectedColor] = useState('none')
  const [connectionName, setConnectionName] = useState('')

  const RenderColor = ({ color }) => {
    if (color === 'none') {
      return <FiSlash size={34} className="mr-2 cursor-pointer" onClick={() => setSelectedColor(color)} />
    }

    return <div
      onClick={() => setSelectedColor(color)}
      className={`${color} w-10 h-10 cursor-pointer rounded-full mr-2 border-4 border-white hover:border-opacity-70 transition-all duration-400 ease-in-out flex items-start justify-center`}
    >
      {selectedColor === color && <BsCheck size={30} className="text-white" />}
    </div>
  }

  return (
    <Modal title="Save Connection to favorites" size='lg' show={show} onClose={onClose}>
      <FormGroup label="Connection Name">
        <Input
          placeholder="Connection Name"
          onChange={(e) => setConnectionName(e.target.value)}
          value={connectionName}
        />
      </FormGroup>
      <div className="mt-2 flex items-center">
        {colors.map((color, index) => (
          <RenderColor index={index} color={color} key={index} />
        ))}
      </div>
    </Modal>
  )
}

export default SaveFavorite
