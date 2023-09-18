import classNames from "classnames"

const Item = ({ children, isSelected = false }) => {

  return (
    <div className={classNames(`
      text-gray-500
      font-medium
      relative
      pb-2
      group
      cursor-pointer
    `, {
      'text-green-700': isSelected
    })}>
      {children}
      <span className={classNames(`
        absolute
        bottom-0
        left-0
        w-full
        h-1
        bg-gray-200
        rounded-full
        group-hover:block
      `, {
        'bg-green-700': isSelected,
        'block': isSelected,
        'hidden': !isSelected
      })}></span>
    </div>
  )
}

export default Item
