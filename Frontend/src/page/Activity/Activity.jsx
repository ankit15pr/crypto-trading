import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { BookmarkFilledIcon } from "@radix-ui/react-icons";

function Activity() {
  return (
    <div className="p-5 lg:px-20">
      <h1 className="font-bold text-3xl pb-5">Activity</h1>
      <Table className="border">
        <TableHeader>
          <TableRow>
            <TableHead className="py-5">Date & Time</TableHead>
            <TableHead>Tradin Pair</TableHead>
            <TableHead>Buy Price</TableHead>
            <TableHead>Sell Price</TableHead>
            <TableHead>Order Type</TableHead>
            <TableHead >Profit/Loss</TableHead>
            <TableHead className="text-right ">Value</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {[1, 1, 1, 1, 1, 1, 1, 1, 1].map((item, index) => (
            <TableRow key={index}>
              <TableCell>
                <p>18-10-2024</p>
                <p className="text-gray-400">03:40PM</p>
              </TableCell>
              <TableCell className="font-medium flex items-center gap-2">
                <Avatar className="-z-50">
                  <AvatarImage src="https://assets.coingecko.com/coins/images/1/standard/bitcoin.png?1696501400" />
                </Avatar>
                <span>BitCoin</span>
              </TableCell>
              <TableCell>BTC</TableCell>
              <TableCell>45800690381</TableCell>
              <TableCell>1342176974465</TableCell>
              <TableCell>1.94936</TableCell>
              <TableCell className="text-right">$67949</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default Activity;
