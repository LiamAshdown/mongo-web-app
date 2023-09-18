import classNames from "classnames"

const TextArea = ({ value, onChange, rows = '2', disable }) => {
  return (
    <textarea
      className={classNames(`
        border-2
        border-gray-300
        rounded-xl
        p-4 w-full h-32
        focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent
        hover:ring-2 hover:ring-gray-100
        transition-all duration-400 ease-in-out
      `
      )}
      value={value}
      onChange={onChange}
      rows={rows}
      disabled={disable}
    />
  )
}

export default TextArea
