import {useState} from 'react'

const DomainPopup = ({isOpen, setIsOpen}) => {
  const [input, setInput] = useState("");
  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-80">
            <p className="mb-4 text-sm text-gray-300">Enter your input below:</p>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
              placeholder="Type something..."
            />
            <div className="flex justify-between">
              <button
                onClick={() => {
                  console.log("Input submitted:", input);
                  setIsOpen(false);
                }}
                className="bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded text-white text-sm"
              >
                Submit
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 text-sm hover:text-white"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
  )
}

export default DomainPopup