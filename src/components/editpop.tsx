// components/Modal.tsx
import React from 'react';
import ProfileForm from '../components/form'
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onDelete: () => void;
}

const PopoverDemo: React.FC<ModalProps> = ({ isOpen, onClose , onDelete}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75">
      <div className="bg-white p-6 rounded-lg">
        <h2 className="text-lg font-semibold mb-4">Edit Details</h2>
          <ProfileForm />
      </div>
    </div>
  );
};

export default PopoverDemo;
