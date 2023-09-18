'use client'

import { usePathname } from 'next/navigation'
import Item from './item'

const Top = () => {
  const pathname = usePathname()

  const getSelected = (path) => {
    if (pathname === path) {
      return true
    }

    return false
  }

  return (
    <div className="w-full mb-4">
      <div className="flex gap-12">
        <Item isSelected={getSelected('/main/queries')}>My Queries</Item>
        <Item isSelected={getSelected('/main/databases')}>Databases</Item>
        <Item isSelected={getSelected('/main/performance')}>Performance</Item>
      </div>
      <span className="block h-px bg-gray-200 my-2 z-10 relative -mt-[1px]"></span>
    </div>
  )
}

export default Top
