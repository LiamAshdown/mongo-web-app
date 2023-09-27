import classNames from 'classnames'
import { AiFillInfoCircle, AiFillWarning } from 'react-icons/ai'
import { IoCheckmarkOutline } from 'react-icons/io5'
import { MdDangerous } from 'react-icons/md'

export const Alert = ({ variant = 'info', children, className = '' }) => {
  const getVariant = () => {
    switch (variant) {
      case 'info':
        return 'bg-blue-100 border-blue-600'
      case 'success':
        return 'bg-green-100 border-green-600'
      case 'warning':
        return 'bg-yellow-100 border-yellow-600'
      case 'danger':
        return 'bg-red-100 border-red-600'
      default:
        return 'bg-blue-100 border-blue-600'
    }
  }

  const getIcon = () => {
    switch (variant) {
      case 'info':
        return <AiFillInfoCircle size={20} />
      case 'success':
        return <IoCheckmarkOutline />
      case 'warning':
        return <AiFillWarning />
      case 'danger':
        return <MdDangerous />
    }
  }

  const getTextColor = () => {
    switch (variant) {
      case 'info':
        return 'text-blue-600'
      case 'success':
        return 'text-green-600'
      case 'warning':
        return 'text-yellow-600'
      case 'danger':
        return 'text-red-600'
      default:
        return 'text-blue-600'
    }
  }

  return (
    <div className={classNames("p-4 flex border-l-8 rounded-xl", className,
      getVariant()
    )}>
      <div className={classNames(getTextColor())}>
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-1">
            {getIcon()}
          </div>
          <div className="col-span-11">
            <span>{children}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Alert
