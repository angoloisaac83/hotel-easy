// components/Modal.tsx
import React from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onDelete: () => void;
}

const PaymentModal: React.FC<ModalProps> = ({ isOpen, onClose , onDelete}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75">
      <div className="bg-white p-6 rounded-lg">
        <h2 className="text-lg font-semibold mb-4">Delete</h2>
        <p className="mb-4">Are you sure you want to delete this User?</p>
        <span className='flex items-center justify-center w-fit h-fit gap-[20px]'>
            <button className="bg-red-500 text-white px-4 py-2 rounded" onClick={onDelete}>Delete</button>
            <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-blue-600" onClick={onClose}>Cancel</button>
        </span>
      </div>
    </div>
  );
};

export default PaymentModal;
