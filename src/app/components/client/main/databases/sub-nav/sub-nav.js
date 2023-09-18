import Button from '@/app/components/client/inputs/button'
import { BiPlus, BiRefresh } from 'react-icons/bi'

const SubNav = () => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <div className="flex gap-2">
          <Button Icon={<BiPlus size={24} />}>
            Create Database
          </Button>
          <Button Icon={<BiRefresh size={24} />} variant='white'>
            Refresh
          </Button>
        </div>
      </div>
    </div>
  )
}

export default SubNav
