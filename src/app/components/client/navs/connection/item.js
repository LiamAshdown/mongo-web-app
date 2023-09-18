import { BiServer } from 'react-icons/bi'

const Item = () => {
  return (
    <div>
      <div className="flex items-center">
        <BiServer size={18} className="mr-2" />
        <div>
          <p className="text-sm font-medium">
            Local Host
          </p>
          <p className="text-xs text-gray-500">
            Sept 16, 2023, 11:30PM
          </p>
        </div>
      </div>
    </div>
  )
}

export default Item
