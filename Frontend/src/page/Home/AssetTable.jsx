import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

function AssetTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">COIN</TableHead>
          <TableHead>SYMBOL</TableHead>
          <TableHead>VOLUME</TableHead>
          <TableHead>MARKET CAP</TableHead>
          <TableHead>24h</TableHead>
          <TableHead className="text-right">PRICE</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {[1, 1, 1, 1, 1, 1, 1, 1, 1].map((item, index) => (
          <TableRow key={index}>
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
  );
}

export default AssetTable;
