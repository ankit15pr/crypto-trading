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
import { Button } from '@/components/ui/button';
import { BookmarkFilledIcon } from '@radix-ui/react-icons';

function Watchlist() {
  const handleRemoveToWatchlist=(value)=>{
    comsole.log(value)
  }
  return (
    <div className="p-5 lg:px-20">
      <h1 className="font-bold text-3xl pb-5">Watchlist</h1>
      <Table className="border">
        <TableHeader>
          <TableRow>
            <TableHead className="py-5">Coin</TableHead>
            <TableHead>Symbol</TableHead>
            <TableHead>Volume</TableHead>
            <TableHead>Market Cap</TableHead>
            <TableHead>24h</TableHead>
            <TableHead className="">Price</TableHead>
            <TableHead className="text-right text-red-600">REMOVE</TableHead>
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
              <TableCell className="">$67949</TableCell>
              <TableCell className="text-right">
                <Button variant="ghost" onClick={() => handleRemoveToWatchlist(item.id)} size="icon" className="h-10 w-10"> 
                  <BookmarkFilledIcon className='w-6 h-6' />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

export default Watchlist