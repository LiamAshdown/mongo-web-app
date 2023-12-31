const Item = ({ name, storage, collections, indexes }) => {
  const convertBytesToKB = () => {
    return (storage / 1024).toFixed(2)
  }

  return (
    <div className="shadow-lg rounded-2xl bg-white p-4 border border-gray-200 cursor-pointer hover:shadow-xl transition-all duration-400 ease-in-out">
      <div>
        <h3 className="text-2xl font-medium text-green-700 mb-4">
          {name}
        </h3>
      </div>
      <div className="w-1/2">
        <div className="flex justify-between items-center">
          <div>
            <h4 className="underline decoration-dotted font-semibold mb-1">
              Storage Size:
            </h4>
            <p>
              {convertBytesToKB()} KB
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-1">
              Collections:
            </h4>
            <p>
              {collections}
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-1">
              Indexes:
            </h4>
            <p>
              {indexes}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Item
