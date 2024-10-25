import React, { useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getCoinList } from "@/State/Coin/Action";

function AssetTable({coin = [], category}) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  
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
        {coin.map((item, index) => (
          <TableRow key={item.id}>
            <TableCell
              onClick={() => navigate(`/stock-details`)}
              className="font-medium flex items-center gap-2"
            >
              <Avatar className="-z-50">
                <AvatarImage src={item.image} />
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
