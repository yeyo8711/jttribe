const TokenInfo = () => {
  return (
    <section className="w-full flex justify-center min-h-[70vh]">
      <div class="max-w-screen-2xl w-full flex justify-center items-center">
        <div class="block rounded-lg shadow-lg bg-white text-center">
          <div class="py-3 px-6 border-b font-semibold border-gray-300">
            Your $FRED Balance: 134.324
          </div>
          <div class="p-6">
            <div className="w-72 sm:w-[400px] h-52 bg-orange-600 mb-5 rounded-xl"></div>

            <button
              type="button"
              class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              Claim Tokens
            </button>
          </div>
          <div class="py-3 px-6 border-t border-gray-300 text-gray-600">
            Awailable to claim: 84.972
          </div>
        </div>
      </div>
    </section>
  );
};

export default TokenInfo;
