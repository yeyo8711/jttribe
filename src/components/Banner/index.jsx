import { useContext } from "react";
import { AppContext } from "../../context/appContext";

const Banner = () => {
  const { userAddress, setUserAddress, setSigner } = useContext(AppContext); // no auto-completion?

  return (
    <div>
      {userAddress == null ? (
        <section className="w-full text-lg font-Carter font-semibold text-[#255d3a] bg-[#A4D302] h-7 flex justify-center items-center">
          Presale Spots Remaining:{" "}
          <p className="text-[#f6f9fa] ml-4 mr-2">150</p> /{" "}
          <p className="text-[#255d3a] ml-2"> 150</p>
        </section>
      ) : (
        <section className="w-full sm:text-lg font-Carter font-semibold px-2 py-3 text-[#255d3a] bg-[#A4D302] text-sm text-center flex justify-center items-center">
          Remember, you are <p className="text-[#f6f9fa] ml-2 mr-2">one</p> of
          150 lucky Turtles. The World is our Oyster & BNB is our Shell! Lets
          lead, together...
        </section>
      )}
    </div>
  );
};

export default Banner;
