"use client";
import { Payment, columns } from "./columns"
import { DataTable } from "./data-table"
import { VendorData } from '../../data'
// import {  Modal,   ModalContent,   ModalHeader,   ModalBody,   ModalFooter} from "@nextui-org/modal";

// async function getData(): Promise<Payment[]> {
  const vendors = VendorData.filter((item) => {
    return item.CompanyName === 'Brass Suites';
});

export default async function Table() {
  const data = vendors.flatMap((items) => {
    return items.RoomTypes.map((roomtypes) => {
      return {
        availability: `${roomtypes.availability}`,
        types: `${roomtypes.type}`,
        price: `${roomtypes.price}`,
        roomno: `${roomtypes.roomno}`,
        bg: `${roomtypes.bg}`,
        color: `${roomtypes.color}`
      };
    });
  })

  return (
    <div className="container bg-white rounded-lg shadow-2xl w-[86%] mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  )
}
