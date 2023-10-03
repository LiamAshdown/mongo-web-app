
import Modal from '@/app/components/client/modals/modal'
import Input from '@/app/components/client/inputs/input'
import Form from '@/app/components/client/inputs/form'
import FormGroup from '@/app/components/client/inputs/form-group'
import Alert from '@/app/components/alert'
import { useEffect, useState } from 'react'
import { getSelectedConnection } from '@/app/store/slices/connection'
import { useSelector } from 'react-redux'

export const CreateDatabase = ({ show, onClose }) => {
  const [form, setForm] = useState({
    databaseName: '',
    collectionName: ''
  })
  const [errors, setErrors] = useState({})
  const [error, setError] = useState(null)
  const selectedConnection = useSelector(getSelectedConnection)
  const [loading, setLoading] = useState(false)

  const onChangeHandler = (e) => {
    const { name, value } = e.target

    setForm({
      ...form,
      [name]: value
    })
  }

  const onSubmitHandler = async (e) => {
    if (e.preventDefault) {
      e.preventDefault()
    }

    let formErrors = {}
    setError(null)

    if (!form.databaseName) {
      formErrors = {
        databaseName: 'Database name is required'
      }
    }

    if (!form.collectionName) {
      formErrors = {
        ...formErrors,
        collectionName: 'Collection name is required'
      }
    }

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors)
      return
    }

    try {
      setLoading(true)

      const response = await fetch('/api/server/mongo/databases/create', {
        method: 'POST',
        body: JSON.stringify({
          form,
          connectionString: selectedConnection.connectionString
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      })

      if (!response.ok) {
        if (response.status === 422) {
          const data = await response.json()
          throw new Error(data.error)
        } else {
          throw new Error('Something went wrong. Please try again.')
        }
      }

      // Database created successfully
      // Close the modal
      onClose()

    } catch (e) {
      if (e instanceof Error) {
        setError(e.message)
      } else {
        setError('Something went wrong. Please try again.')
      }
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (!show) {
      setForm({
        databaseName: '',
        collectionName: ''
      })
    }
  }, [show])

  return (
    <Modal title='Create Database' show={show} onClose={onClose} onAction={onSubmitHandler}>
      <Form onSubmit={onSubmitHandler}>
        <FormGroup label='Database Name' className="mb-4">
          <Input
            name="databaseName"
            placeholder='Enter database name'
            value={form.databaseName}
            onChange={onChangeHandler}
            error={errors.databaseName}
          />
        </FormGroup>
        <FormGroup label='Collection Name'>
          <Input
            name="collectionName"
            placeholder='Enter collection name'
            value={form.collectionName}
            onChange={onChangeHandler}
            error={errors.collectionName}
          />
        </FormGroup>
      </Form>

      {error && (
        <Alert className='mt-4' variant='danger'>
          {error}
        </Alert>
      )}

      <Alert className='mt-4'>
        Before MongoDB can save your new database, a collection name must also be specified at the time of creation.
      </Alert>
    </Modal >
  )
}
