import classNames from "classnames"

export const Skeleton = ({ rows = 1, height = 'h-4', className }) => {
  return (
    <div className={classNames(`
      animate-pulse
      rounded-xl
      p-4 w-full
      ${className}
    `)}>
      {Array(rows).fill().map((_, i) => (
        <div key={i} className={classNames(`
          bg-gray-200
          ${height}
          mb-2
        `)}></div>
      ))}
    </div>
  )
}

export default Skeleton
