import { useEffect } from 'react';
import { FaTimes } from 'react-icons/fa';

const Modal = ({ children, onClose }) => {
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.keyCode === 27) onClose();
    };
    window.addEventListener('keydown', handleEsc);

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black bg-opacity-75"
      onClick={onClose}
    >
    <div 
  className="relative bg-white rounded-lg w-3/4 h-3/4 max-w-2xl max-h-2xl"
  onClick={(e) => e.stopPropagation()}
>

  {children}
</div>
    </div>
  );
};

export default Modal;