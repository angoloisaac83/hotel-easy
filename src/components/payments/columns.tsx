"use client"
import fs from 'fs';
import path from 'path';
import { NextApiRequest, NextApiResponse } from 'next';
import { ColumnDef } from "@tanstack/react-table"
import { Checkbox } from "@/components/ui/checkbox"
import { MoreHorizontal } from 'lucide-react'
import { Button } from "@/components/ui/button"
import React, { useState } from 'react';
import Modal from '../modal/modal';
import { toast } from "sonner";
import PopoverDemo from '../editpop';

import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Payment = {
  availability: string,
  types: string,
  price: string,
  roomno: string,
  bg: string,
  color: string
}

export const columns: ColumnDef<Payment>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "types",
    header: "Rooms",
  },
  {
    accessorKey: "roomno",
    header: "Room No",
  },
  {
    accessorKey: "price",
    header: "Room Prices",
  },
  {
    accessorKey: "availability",
    header: ({ columns })=>{
      return(
        <button
        className=""
        >
          Availability
        </button>
      )
    },
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const payment = row.original
      const [isModalOpen, setIsModalOpen] = useState(false);
      const openModal = () =>{
         setIsModalOpen(true);
      }
      const closeModal = () => setIsModalOpen(false);
      const deleteUser = () =>{
        toast('User deleted Successfully')
        closeModal()
      }
    
      const [isEditOpen, setIsEditOpen] = useState(false);
      const openEdit = () =>{
         setIsEditOpen(true);
      }
      const closeEdit = () => setIsModalOpen(false);
 
      return (
        <>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0 active:border-none active:outline-none">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={openEdit}>Edit Details</DropdownMenuItem>
            <DropdownMenuItem onClick={openModal} className="text-red-500">Delete Details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <Modal isOpen={isModalOpen} onDelete={deleteUser} onClose={closeModal} />
        <PopoverDemo isOpen={isEditOpen} onDelete={deleteUser} onClose={closeEdit} />
        </>
      )
    }
  }
]
