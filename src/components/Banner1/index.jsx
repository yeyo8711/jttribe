const Banner1 = ({ spots }) => {
  return (
    <section className="w-full text-lg font-Carter font-semibold text-[#255d3a] bg-[#A4D302] h-7 flex justify-center items-center">
      Presale Spots Remaining:{" "}
      <p className="text-[#f6f9fa] ml-4 mr-2">{spots}</p> /
      <p className="text-[#255d3a] ml-2"> 200</p>
    </section>
  );
};

export default Banner1;
