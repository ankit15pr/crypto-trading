import React from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

function Withdrawl() {
  return (
    <div className="p-5 lg:px-20">
    <h1 className="font-bold text-3xl pb-5">Withdrawl</h1>
    <Table className="border">
      <TableHeader>
        <TableRow>
          <TableHead className="py-5">Date</TableHead>
          <TableHead>Method</TableHead>
          <TableHead>Amount</TableHead>
          <TableHead className="text-right ">Status</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {[1, 1, 1, 1, 1, 1, 1, 1, 1].map((item, index) => (
          <TableRow key={index}>
            <TableCell>
              <p>October 22, 2024 at 11:37 PM</p>
            </TableCell>
            <TableCell>Bank</TableCell>
            <TableCell>1.94936</TableCell>
            <TableCell className="text-right">$67949</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </div>
  )
}

export default Withdrawl