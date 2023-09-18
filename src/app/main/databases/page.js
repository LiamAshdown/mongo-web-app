'use client'

import Databases from '@/app/components/client/main/databases/databases'
import { useDispatch } from 'react-redux'
import { attachDatabases } from '@/app/store/slices/database'
import { useEffect } from 'react'

const Page = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(attachDatabases())
  }, [dispatch])

  return (
    <div>
      <Databases />
    </div>
  )
}

export default Page
