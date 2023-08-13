const ErrorModal = ({ errorTitle = "Error", errorMessage = "Something Went Wrong!", errorButtonText = "Close", onErrorButtonClick }) => (
  <div className="fixed inset-0 flex items-center justify-center z-50">
    <div className="fixed inset-0 bg-black opacity-50"></div>
    <div className="bg-white w-80 p-6 rounded-lg shadow-lg relative">
      <h2 className="text-red-600 text-lg font-semibold mb-2 ">{errorTitle}</h2>
      <p className="text-gray-800">{errorMessage}</p>
      <div className="mt-4 flex justify-end">
        {typeof onErrorButtonClick === "function" && (
          <button onClick={onErrorButtonClick} className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
            {errorButtonText}
          </button>
        )}
      </div>
    </div>
  </div>
);

export default ErrorModal;
