import SubNav from '@/app/components/client/main/databases/sub-nav/sub-nav'
import { List } from './list'
import { useDispatch, useSelector } from 'react-redux'
import { attachDatabases, getDatabases, isLoading, showDatabaseCreateModal } from '@/app/store/slices/database'
import { useEffect } from 'react'
import { CreateDatabase } from '@/app/components/client/modals/create-database'

const Databases = () => {
  const dispatch = useDispatch()

  const databases = useSelector(getDatabases)
  const showCreateDatabaseModal = useSelector(showDatabaseCreateModal)
  const loading = useSelector(isLoading)

  useEffect(() => {
    dispatch(attachDatabases())
  }, [dispatch])

  const onCancelCreateDataase = () => {
    dispatch(showDatabaseCreateModal())
  }

  return (
    <>
      <SubNav />
      <List databases={databases} loading={loading} />
      <CreateDatabase show={showCreateDatabaseModal} onClose={onCancelCreateDataase} />
    </>
  )
}

export default Databases
