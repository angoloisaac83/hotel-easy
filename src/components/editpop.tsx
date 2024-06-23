// components/Modal.tsx
import React from 'react';
import { MdOutlineClose } from "react-icons/md";
import ProfileForm from '../components/forms'
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onDelete: () => void;
}

const PopoverDemo: React.FC<ModalProps> = ({ isOpen, onClose , onDelete}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75">
      <div className="bg-white p-6 rounded-lg w-[40%]">
        <span className="w-full flex justify-between items-center h-fit py-[5px]"><h2 className="text-lg font-semibold mb-4">Edit Details</h2><MdOutlineClose onClick={onClose} className="text-2xl cursor-pointer"/></span>
          <ProfileForm />
      </div>
    </div>
  );
};

export default PopoverDemo;
