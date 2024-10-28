import { Button } from "@/components/ui/button";
import React, { useEffect, useState } from "react";
import AssetTable from "./AssetTable";
import StockChart from "./StockChart";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Cross1Icon, DotIcon } from "@radix-ui/react-icons";
import { MessageCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { getCoinList } from "@/State/Coin/Action";
import { useDispatch, useSelector } from "react-redux";
import { store } from "@/State/Store";

function Home() {
  const [category, setCategory] = useState("all");
  const [inputValue, setInputValue] = useState("");
  const [isBotRelease, setIsBotRelease] = useState(false);
  // const {coin}=useSelector(store=>store);
  const coin = useSelector(state => state.coin);
  console.log("Current coin state:", coin); // Add this line 

  const dispatch = useDispatch();

  const handleBotRelease = () => setIsBotRelease(!isBotRelease);

  const handlCategory = (value) => {
    setCategory(value);
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key == "Enter") {
      console.log(inputValue);
    }
    setInputValue("");
  };

  useEffect(() => {
    dispatch(getCoinList(1));
  }, []);

  return (
    <div className="relative">
      <div className="lg:flex">
        <div className="lg:w-[50%] lg:border-r">
          <div className="p-3 flex items-center gap-4">
            <Button
              onClick={() => handlCategory("all")}
              variant={category == "all" ? "default" : "outline"}
              className="rounded-full"
            >
              All
            </Button>

            <Button
              onClick={() => handlCategory("top50")}
              variant={category == "top50" ? "default" : "outline"}
              className="rounded-full"
            >
              Top 50
            </Button>

            <Button
              onClick={() => handlCategory("topGainers")}
              variant={category == "topGainers" ? "default" : "outline"}
              className="rounded-full"
            >
              Top Gainers
            </Button>

            <Button
              onClick={() => handlCategory("topLosers")}
              variant={category == "topLosers" ? "default" : "outline"}
              className="rounded-full"
            >
              Top Losers
            </Button>
          </div>
          <AssetTable coin={coin.getCoinList} category={category} />
        </div>
        <div className="hidden lg:block lg:w-[50%] p-5">
          <StockChart />

          <div className="flex gap-5 items-center">
            <div>
              <Avatar>
                <AvatarImage
                  src={
                    "https://assets.coingecko.com/coins/images/279/standard/ethereum.png?1696501628"
                  }
                />
              </Avatar>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <p>ETH</p>
                <DotIcon className="text-gray-400" />
                <p className="text-gray-400">Ethereum</p>
              </div>
              <div className="flex items-end gap-2">
                <p className="text-xl font-bold">5464</p>
                <p className="text-red-600">
                  <span>-1318045278.578</span>
                  <span>(-0.29803%)</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="absolute bottom-5 right-5 z-40 flex flex-col justify-end items-end gap-2">
        {isBotRelease && <div className="rounded-md w-[20rem] md:w-[25rem] lg:w-[25rem] h-[70vh] bg-slate-900 ">
          <div className="flex justify-between items-center border-b px-6 h-[12%] ">
            <p>Chat Bot</p>
            <Button onClick={handleBotRelease} variant="ghost" size="icon">
              <Cross1Icon />
            </Button>
          </div>

          <div className="h-[76%] flex flex-col overflow-y-auto gap-5 px-5 py-2 scroll-container">
            <div className="self-start pb-5 w-auto">
              <div className="justify-end self-end px-5 py-2 rounded-md bg-slate-800 w-auto">
                <p>hi, Raam Arora</p>
                <p>you can ask crypto related any question</p>
                <p>like, price, market cap extra...</p>
              </div>
            </div>

            {[1, 1, 1, 1].map((item, i) => (
              <div
                key={i}
                className={` ${
                  i % 2 == 0 ? "self-start" : "self-end"
                } "pb-5 w-auto"`}
              >
                {i % 2 == 0 ? (
                  <div className="justify-end self-end px-5 py-2 rounded-md bg-slate-800 w-auto">
                    <p>prompt who are you</p>
                  </div>
                ) : (
                  <div className="justify-end self-end px-5 py-2 rounded-md bg-slate-800 w-auto">
                    <p>ans hi, Raam Arora</p>
                  </div>
                )}
              </div>
            ))}

            <div className="h-[12%] border-t">
              <Input
                className="w-full h-full order-none outline-none"
                placeholder="write prompt"
                onChange={handleChange}
                value={inputValue}
                onKeyPress={handleKeyPress}
              />
            </div>
          </div>
        </div>}

        <div className="relative w-[10rem] cursor-pointer group">
          <Button
            onClick={handleBotRelease}
            className="w-full h-[3rem] gap-2 items-center"
          >
            <MessageCircle
              size={30}
              className="fill-[#1e293b] -rotate-90 stroke-none group-hover:fill-[#1a1a1a]"
            />
            <span className="text-2xl">Chat Bot</span>
          </Button>
        </div>
      </section>
    </div>
  );
}

export default Home;
