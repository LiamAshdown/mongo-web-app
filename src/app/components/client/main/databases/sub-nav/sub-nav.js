import Button from '@/app/components/client/inputs/button'
import { attachDatabases, showCreateDatabaseModal } from '@/app/store/slices/database'
import { BiPlus, BiRefresh } from 'react-icons/bi'
import { useDispatch } from 'react-redux'

const SubNav = () => {
  const dispatch = useDispatch()

  const onRefresh = () => {
    dispatch(attachDatabases())
  }

  const onShowCreateDatabaseModal = () => {
    dispatch(showCreateDatabaseModal())
  }

  return (
    <div>
      <div className="flex justify-between items-center">
        <div className="flex gap-2">
          <Button Icon={<BiPlus size={24} />} variant='primary' onClick={onShowCreateDatabaseModal}>
            Create Database
          </Button>
          <Button Icon={<BiRefresh size={24} />} variant='white' onClick={onRefresh}>
            Refresh
          </Button>
        </div>
      </div>
    </div >
  )
}

export default SubNav
