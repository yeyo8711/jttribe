const TokenInfo = () => {
  return (
    <section className="w-full flex justify-center min-h-[70vh]">
      <div class="max-w-screen-2xl w-full flex justify-center items-center">
        <div class="block rounded-lg shadow-lg bg-[#91af25] text-center">
          <div class="py-3 px-6 border-b bg-[#12883f] text-white rounded-tl-lg rounded-tr-lg font-Carter text-[#075424]' border-gray-300">
            Your $FRED Balance: 134.324
          </div>
          <div class="p-6">
            <div className="w-72 sm:w-[400px] h-52 bg-white mb-5 rounded-xl"></div>

            <button
              type="button"
              class=" inline-block font-Carter px-6 py-2.5 text-[#075424] bg-[#b8e220] font-medium text-xs leading-tight uppercase rounded shadow-md  focus:outline-none focus:ring-0 active:bg-[#779706] active:shadow-lg transition duration-150 ease-in-out"
            >
              Claim Tokens
            </button>
          </div>
          <div class="py-3 flex justify-center items-center px-6 border-t bg-[#f7f7f7] boder-rounde font-Francois border-gray-300 text-gray-600 rounded-bl-lg rounded-br-lg">
            Awailable to claim:{" "}
            <p className="text-[#075424] font-semibold ml-3">84.972</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TokenInfo;
