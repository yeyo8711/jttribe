const Stats = () => {
  return (
    <section className="w-full bg-white">
      <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div class="grid grid-cols-2 row-gap-8 md:grid-cols-4">
          <div class="text-center md:border-r">
            <h6 class="text-4xl font-bold lg:text-5xl xl:text-6xl">5M</h6>
            <p class="text-sm font-medium tracking-widest text-gray-800 uppercase lg:text-base">
              Tokens
            </p>
          </div>
          <div class="text-center md:border-r">
            <h6 class="text-4xl font-bold lg:text-5xl xl:text-6xl">125K</h6>
            <p class="text-sm font-medium tracking-widest text-gray-800 uppercase lg:text-base">
              MC Entry
            </p>
          </div>
          <div class="text-center md:border-r">
            <h6 class="text-4xl font-bold lg:text-5xl xl:text-6xl">45</h6>
            <p class="text-sm font-medium tracking-widest text-gray-800 uppercase lg:text-base">
              Days Vested
            </p>
          </div>
          <div class="text-center">
            <h6 class="text-4xl font-bold lg:text-5xl xl:text-6xl">2.2%</h6>
            <p class="text-sm font-medium tracking-widest text-gray-800 uppercase lg:text-base">
              Daily Unlock
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
