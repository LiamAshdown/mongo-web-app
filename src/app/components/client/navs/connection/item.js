import classNames from 'classnames'
import { BiServer } from 'react-icons/bi'

const Item = ({ name, date, color = null }) => {
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

  const getColor = () => {
    if (!color) {
      return ''
    }

    // Create a border color class
    const borderColor = `border-${color}-500`

    return classNames(borderColor, 'border-l-8')
  }

  return (
    <div>
      <div className={classNames("flex items-center pl-2 cursor-pointer", getColor())}>
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
