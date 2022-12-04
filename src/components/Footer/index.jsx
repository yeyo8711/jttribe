import FTTProfile from "../../assets/FFTProfile.png";

const Footer = () => {
  return (
    <section>
      <footer
        aria-label="Site  Footer"
        class="bg-[#025522] border-t border-gray-200"
      >
        <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
          <div class="flex flex-col gap-4 sm:flex-row sm:justify-between items-center">
            <div className="flex justify-center gap-3 items-center font-semibold text-white text-xl">
              <img
                class="w-12 h-12 object-cover rounded-full"
                src={FTTProfile}
                alt="User avatar"
              />
              <h2>Fred The Turtle</h2>
            </div>

            <p class="mt-4 text-center text-sm text-white lg:mt-0 lg:text-right">
              Copyright &copy; 2022. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
