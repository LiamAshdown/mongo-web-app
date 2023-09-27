import classNames from 'classnames'

const Input = ({ value = null, error = null, onChange = null, helperText, name = null }) => {
  return (
    <div>
      <input
        className={classNames(`
        border-2
        border-gray-300
        rounded-lg
        p-1 w-full
        focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent
        hover:ring-2 hover:ring-gray-100
        transition-all duration-400 ease-in-out
      `, {
          'border-red-500': error
        })}
        name={name}
        onChange={onChange}
        value={value}
      />
      {helperText && <p className="text-gray-500 text-sm">{helperText}</p>}
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  )
}

export default Input
