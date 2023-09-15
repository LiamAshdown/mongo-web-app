import Connection from '@/app/components/client/navs/connection'

export default function Layout({ children }) {
  return (
    <div className="grid grid-cols-12 gap-4">
      <div className="col-span-2">
        <Connection />
      </div>
      <div className="col-span-8">
        {children}
      </div>
    </div>
  )
}
