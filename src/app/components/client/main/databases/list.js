import { Skeleton } from '@/app/components/client/skeleton'
import Item from "./item"

export const List = ({ databases, loading }) => {
  return (
    <div className="space-y-2 mt-4">
      {loading && (
        <Skeleton
          rows={3}
          height='h-8'
        />
      )}
      {databases.databases.map((database, index) => (
        <Item
          key={index}
          name={database.name}
          storage={database.sizeOnDisk}
          indexes={database.indexes}
          collections={database.collections.length}
        />
      ))}
    </div>
  )
}
