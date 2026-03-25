const Modal = ({ open, onClose, children }) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg w-[500px] max-h-[90vh] overflow-y-auto relative p-6">
        
        
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500"
        >
          ✖
        </button>

        {children}
      </div>
    </div>
  );
};

export default Modal;