import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { BookmarkFilledIcon, DotIcon } from "@radix-ui/react-icons";
import { BookmarkIcon } from "lucide-react";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import TradingForm from "./TradingForm";
import StockChart from "../Home/StockChart";


function StockDetails() {
  return (
    <div className="p-5 mt-5">
      <div className="flex justify-between">
        <div className="flex gap-5 items-center">
          <div>
            <Avatar>
              <AvatarImage src="https://assets.coingecko.com/coins/images/1/standard/bitcoin.png?1696501400" />
            </Avatar>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <p>BTC</p>
              <DotIcon className="text-gray-400" />
              <p className="text-gray-400">Bitcoin</p>
            </div>
            <div className="flex items-end gap-2">
              <p className="text-xl font-bold">$6544</p>
              <p className="text-red-600">
                <span>-1319085244.123</span>
                <span>(-0.29803%)</span>
              </p>
            </div>
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <Button>
            {true ? (
              <BookmarkFilledIcon className="h-6 w-6" />
            ) : (
              <BookmarkIcon className="h-6 w-6" />
            )}
          </Button>
          <Dialog>
            <DialogTrigger>
              <Button size="lg">Trade</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>How much do you want to spend?</DialogTitle>
              </DialogHeader>
              <TradingForm />
            </DialogContent>
          </Dialog>
        </div>
      </div>
      <div className="mt-14">
        <StockChart />
      </div>
    </div>
  );
}

export default StockDetails;
