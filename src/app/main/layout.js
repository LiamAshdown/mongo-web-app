import MainNav from '@/app/components/client/navs/main/main'
import TopNav from '@/app/components/client/navs/main/top/top'

export default function Layout({ children }) {
  return (
    <div className="grid grid-cols-12 gap-4">
      <div className="col-span-3">
        <MainNav />
      </div>
      <div className="col-span-9 pt-4">
        <div className="p-4">
          <TopNav />
          {children}
        </div>
      </div>
    </div>
  )
}
