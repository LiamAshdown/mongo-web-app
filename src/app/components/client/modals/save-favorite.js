'use client'

import Modal from '@/app/components/client/modals/modal'
import Input from '@/app/components/client/inputs/input'
import FormGroup from '@/app/components/client/inputs/form-group'

import { FiSlash } from 'react-icons/fi'
import { BsCheck } from 'react-icons/bs'
import { useEffect, useState } from 'react'
import classNames from 'classnames'
import { useSelector } from 'react-redux'
import { getSelectedConnection } from '@/app/store/slices/connection'

const SaveFavorite = ({ show, onClose, onSave }) => {

  const colors = [
    'none',
    'red',
    'yellow',
    'green',
    'blue',
    'indigo',
    'purple',
    'pink'
  ]

  const backgroundColors = {
    none: '',
    red: 'bg-red-500',
    yellow: 'bg-yellow-500',
    green: 'bg-green-500',
    blue: 'bg-blue-500',
    indigo: 'bg-indigo-500',
    purple: 'bg-purple-500',
    pink: 'bg-pink-500',
  }

  const [selectedColor, setSelectedColor] = useState('none')
  const [connectionName, setConnectionName] = useState('')
  const [title, setTitle] = useState('Save Connection to favorites')
  const [error, setError] = useState({})

  const selectedConnection = useSelector(getSelectedConnection)

  useEffect(() => {
    // If the modal is shown and the connection is a favorite, then set the color and name
    if (show && selectedConnection.favorite) {
      setSelectedColor(selectedConnection.color)
      setConnectionName(selectedConnection.name)
      setTitle('Update Connection')
    } else {
      setSelectedColor('none')
      setConnectionName('')
      setTitle('Save Connection to favorites')
    }

    setError({})
  }, [show, selectedConnection])

  const RenderColor = ({ color }) => {
    if (color === 'none') {
      return <FiSlash size={34} className="mr-2 cursor-pointer" onClick={() => setSelectedColor(color)} />
    }

    return <div
      onClick={() => setSelectedColor(color)}
      className={classNames(`w-10 h-10 cursor-pointer rounded-full mr-2 border-4 border-white hover:border-opacity-70 transition-all duration-400 ease-in-out flex items-start justify-center`,
        backgroundColors[color]
      )}
    >
      {selectedColor === color && <BsCheck size={30} className="text-white" />}
    </div>
  }

  const onSaveHandler = () => {

    if (!connectionName) {
      setError({
        name: 'Connection name is required'
      })
      return
    }

    if (connectionName.length > 50 || connectionName.length < 3) {
      setError({
        name: 'Connection name must be between 3 and 50 characters'
      })
      return
    }

    onSave({
      name: connectionName,
      color: selectedColor
    })
  }

  return (
    <Modal title={title} size='lg' show={show} onClose={onClose} onAction={onSaveHandler}>
      <FormGroup label="Connection Name">
        <Input
          placeholder="Connection Name"
          onChange={(e) => setConnectionName(e.target.value)}
          value={connectionName}
          error={error.name}
        />
      </FormGroup>
      <div className="mt-2 flex items-center">
        {colors.map((color, index) => (
          <RenderColor color={color} key={index} />
        ))}
      </div>
    </Modal>
  )
}

export default SaveFavorite
