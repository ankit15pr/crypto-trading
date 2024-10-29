import { useEffect, useState } from "react";
import Navbar from "./page/Navbar/Navbar";
import Home from "./page/Home/Home";
import { Route, Routes } from "react-router-dom";
import Activity from "./page/Activity/Activity";
import Wallet from "./page/Wallet/Wallet";
import Withdrawl from "./page/Withdrawl/Withdrawl";
import PaymentDetails from "./page/PaymentDetails/PaymentDetails";
import StockDetails from "./page/StockDetails/StockDEtails";
import Watchlist from "./page/Watchlist/Watchlist";
import Profile from "./page/Profile/Profile";
import Search from "./page/Search/Search";
import Notfound from "./page/Notfound/Notfound";
import Portfolio from "./page/Portfolio/Portfolio";
import Auth from "./page/Auth/Auth";
import { useDispatch, useSelector } from "react-redux";
import { store } from "./State/Store";
import { getUser } from "./State/Auth/Action";
import StockChart from "./page/Home/StockChart";

function App() {

  // const {auth} = useSelector(store=>store)
  const auth = useSelector(state => state.auth); // Adjust the path if necessary

  const dispatch = useDispatch();

  console.log("  auth  ",auth);

  useEffect(() => {
    dispatch(getUser(auth.jwt || localStorage.getItem("jwt")))
  },[auth.jwt])

  return (
    <>
      {auth.user ? <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/activity" element={<Activity />} />
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/withdrawl" element={<Withdrawl />} />
          <Route path="/payment-details" element={<PaymentDetails />} />
          <Route path="/market/bitcoin" element={<StockDetails />} />
          <Route path="/watchlist" element={<Watchlist />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/search" element={<Search />} />
          <Route path="/*" element={<Notfound />} />
        </Routes>
      </div> : <Auth/>}
    </>
  );
}

export default App;
