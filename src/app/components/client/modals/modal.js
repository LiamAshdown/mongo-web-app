import classNames from 'classnames'
import Button from '@/app/components/client/inputs/button'

const Modal = ({ show = false, title, size = 'xl', children, onClose = null, onAction = null }) => {
  return (
    <div id="medium-modal" tabIndex="-1"
      className={classNames("fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full flex justify-center bg-black bg-opacity-50 transition-all duration-300 ease-in-out", {
        'hidden': !show
      })}>
      <div className={classNames('relative w-full max-h-full pt-24', {
        'max-w-sm': size === 'sm',
        'max-w-md': size === 'md',
        'max-w-lg': size === 'lg',
        'max-w-xl': size === 'xl',
      })}>
        <div className="relative bg-white rounded-lg shadow">
          <div className="flex items-center justify-between p-5 border-b rounded-t">
            <h3 className="text-xl font-medium text-gray-900">
              {title}
            </h3>
            <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center" data-modal-hide="medium-modal" onClick={onClose}>
              <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          <div className="p-6">
            {children}
          </div>
          <div className="flex items-center justify-end p-6 space-x-2 border-t border-gray-200 rounded-b">
            <Button variant="white" onClick={onClose}>Cancel</Button>
            <Button variant="white" onClick={onAction}>Save</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal
