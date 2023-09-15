import classNames from 'classnames'

const Input = ({ value = null, onChange = null }) => {
  return (
    <input
      className={classNames(`
        border-2
        border-gray-300
        rounded-lg
        p-1 w-full
        focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent
        hover:ring-2 hover:ring-gray-100
        transition-all duration-400 ease-in-out
      `)}
      onChange={onChange}
      value={value}
    />
  )
}

export default Input
