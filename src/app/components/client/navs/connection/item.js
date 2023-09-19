import classNames from 'classnames'
import { BiServer } from 'react-icons/bi'

const Item = ({ name, date, onClick = null, color = null }) => {
  const formatDate = () => {
    if (!date) {
      return 'Never'
    }

    const dateObj = new Date(date)
    const month = dateObj.toLocaleString('default', { month: 'short' })
    const day = dateObj.getDate()
    const year = dateObj.getFullYear()
    const hour = dateObj.getHours()
    const minute = dateObj.getMinutes()

    return `${month} ${day}, ${year}, ${hour}:${minute}`
  }

  const borderColors = {
    none: '',
    red: 'border-red-500',
    yellow: 'border-yellow-500',
    green: 'border-green-500',
    blue: 'border-blue-500',
    indigo: 'border-indigo-500',
    purple: 'border-purple-500',
    pink: 'border-pink-500',
  }

  const getColor = () => {
    if (!color) {
      return ''
    }

    return classNames(borderColors[color], 'border-l-8')
  }

  return (
    <div>
      <div className={classNames("flex items-center pl-2 cursor-pointer", getColor())} onClick={onClick}>
        <BiServer size={18} className="mr-2" />
        <div>
          <p className="text-sm font-medium">
            {name}
          </p>
          <p className="text-xs text-gray-500">
            {formatDate()}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Item
