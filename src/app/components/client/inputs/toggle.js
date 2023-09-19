import classNames from "classnames"

const Toggle = ({ label, labelDirection = 'left', size = 'default', value, onChange }) => {
  const getSize = () => {
    if (size === 'small') {
      return 'w-9 h-5 after:h-4 after:w-4'
    } else if (size === 'default') {
      return 'w-11 h-6 after:h-5 after:w-5'
    } else if (size === 'large') {
      return 'w-14 h-7 after:h-6 after:w-6'
    }

    return 'w-11 h-6'
  }

  const getLabelDirection = () => {
    if (labelDirection === 'left') {
      let pixel = 0

      switch (size) {
        case 'small':
          pixel = 18
          break
        case 'default':
          pixel = 22
          break
        case 'large':
          pixel = 28
          break
      }

      return `after:right-[${pixel}px]`
    }

    return 'after:left-[2px]'
  }

  const getLabel = () => (
    <span className={`m${labelDirection === 'left' ? 'r' : 'l'}-2 text-sm font-medium text-black`}>{label}</span>
  )


  return (
    <label className="relative inline-flex items-center cursor-pointer">
      {labelDirection === 'left' && (
        getLabel()
      )}

      <input type="checkbox" value="" className="sr-only peer" onChange={onChange} checked={value} />
      <div
        className={classNames("bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:transition-all peer-checked:bg-blue-600",
          getSize(),
          getLabelDirection()
        )}
      />

      {labelDirection === 'right' && (
        getLabel()
      )}

    </label>
  )
}

export default Toggle
