import classNames from 'classnames'

const Label = ({ children, className }) => {
  return (
    <label className={classNames("block text-sm font-medium text-black", className)}>
      {children}
    </label>
  )
}

export default Label
