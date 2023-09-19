'use client'

import classNames from 'classnames'
import { useEffect, useRef } from "react"
import { AiOutlineLoading3Quarters } from 'react-icons/ai'

const Button = ({ variant = 'primary', size = 'default', block, ripple = false, onClick = null, Icon = null, loading = false, children }) => {
  const getVariant = () => {
    let style = []
    switch (variant) {
      case 'primary':
        style.push('bg-green-800 text-white hover:bg-green-900 hover:outline-none hover:ring-4 hover:ring-green-400 hover:ring-opacity-25')
        break
      case 'outline-primary':
        style.push('bg-white text-green-800 border border-green-800 hover:outline-none hover:ring-4 hover:ring-green-400 hover:ring-opacity-25')
        break
      case 'white':
        style.push('bg-white text-gray-800 border border-gray-400 hover:outline-none hover:ring-4 hover:ring-gray-400 hover:ring-opacity-25')
        break
    }

    style.push('transition-all duration-400 ease-in-out')
    style.push('font-medium')

    return classNames(style)
  }

  const getSize = () => {
    switch (size) {
      case 'default':
        return 'px-4 py-2 text-sm'
      case 'small':
        return 'px-2 py-1 text-xs'
    }
  }

  const getLoading = () => {
    if (loading) {
      return 'opacity-50 pointer-events-none'
    }

    return ''
  }

  const ref = useRef(null)

  useEffect(() => {
    if (ripple) {
      const btn = ref.current
      const createRipple = (event) => {
        const circle = document.createElement('span')
        const diameter = Math.max(btn.clientWidth, btn.clientHeight)
        const radius = diameter / 2

        circle.style.width = circle.style.height = `${diameter}px`
        circle.style.left = `${event.clientX - (btn.offsetLeft + radius)}px`
        circle.style.top = `${event.clientY - (btn.offsetTop + radius)}px`
        circle.classList.add('ripple')

        const ripple = btn.getElementsByClassName('ripple')[0]

        if (ripple) {
          ripple.remove()
        }

        btn.appendChild(circle)
      }

      btn.addEventListener('click', createRipple)

      return () => {
        btn.removeEventListener('click', createRipple)
      }
    }
  }, [ripple])

  return (
    <button className={classNames(
      'rounded-lg px-4 py-2 overflow-hidden relative',
      getVariant(),
      getSize(),
      {
        'w-full': block
      },
      getLoading()
    )}
      ref={ref}
      onClick={onClick}
    >
      {(Icon && !loading) && (
        <div className="flex items-center justify-center gap-1">
          {Icon}
          {children}
        </div>
      )}

      {loading && (
        <AiOutlineLoading3Quarters size={18} className="animate-spin inline mr-2" />
      )}
      {!Icon && children}
    </button>
  )
}

export default Button
