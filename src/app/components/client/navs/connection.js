import { BiPlus, BiSolidCog } from 'react-icons/bi'
import { TbStar } from 'react-icons/tb'
import Button from '@/app/components/client/inputs/button'

const Connection = () => {
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
          <Button variant='white' block ripple>
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
        </div>
      </div>
    </div>
  )
}

export default Connection
