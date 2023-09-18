import Connection from '@/app/components/client/navs/connection/connection'

export default function Layout({ children }) {
  return (
    <div className="grid grid-cols-12 gap-4">
      <div className="col-span-3">
        <Connection />
      </div>
      <div className="col-span-6 pt-8">
        {children}
      </div>
    </div>
  )
}
