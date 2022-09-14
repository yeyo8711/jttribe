import React, { useContext } from "react";
import { AppContext } from "../../context/appContext";

const Main = () => {
  const { userAddress, netWork } = useContext(AppContext);
  return (
    <div className=' h-[calc(100vh-56px)] w-full flex justify-center items-center'>
      <div className='flex flex-col p-10 items-center w-[400px] justify-center bg-slate-500 rounded-md'>
        <h3>Network: {netWork}</h3>
        <h3>Address: {userAddress}</h3>
        <h3>Balance: {}</h3>
        <h3>ReadOnly value: {}</h3>
      </div>
    </div>
  );
};
export default Main;
