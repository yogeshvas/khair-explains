import React from "react";

const Footer = () => {
  return (
    <>
      <footer class=" mt-10">
        <div class="container px-6 py-12 mx-auto">
          <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
            <div class="sm:col-span-2">
              <h1 class="max-w-lg text-xl font-semibold tracking-tight text-gray-800 xl:text-2xl dark:text-white">
                Subscribe our newsletter to get update.
              </h1>

              <div class="flex flex-col mx-auto mt-6 space-y-3 md:space-y-0 md:flex-row">
                <input
                  id="email"
                  type="text"
                  class="px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300"
                  placeholder="Email Address"
                />

                <button class="w-full px-6 py-2.5 text-sm font-medium tracking-wider text-white transition-colors duration-300 transform md:w-auto md:mx-4 focus:outline-none bg-gray-800 rounded-lg hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80">
                  Subscribe
                </button>
              </div>
            </div>

            <div>
              <p class="font-semibold text-gray-800 dark:text-white">
                Quick Link
              </p>

              <div class="flex flex-col items-start mt-5 space-y-2">
                <a
                  href="#"
                  class="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
                >
                  Home
                </a>
                <a
                  href="#"
                  class="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
                >
                  Who We Are
                </a>
                <a
                  href="#"
                  class="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
                >
                  Our Philosophy
                </a>
              </div>
            </div>

            <div>
              <p class="font-semibold text-gray-800 dark:text-white">
                Industries
              </p>

              <div class="flex flex-col items-start mt-5 space-y-2">
                <a
                  href="#"
                  class="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
                >
                  Retail & E-Commerce
                </a>
                <a
                  href="#"
                  class="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
                >
                  Information Technology
                </a>
                <a
                  href="#"
                  class="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
                >
                  Finance & Insurance
                </a>
              </div>
            </div>
          </div>

          <hr class="my-6 border-gray-200 md:my-8 dark:border-gray-700" />

          <div class="flex items-center justify-between">
            <a href="#" className="flex items-center justify-center gap-2">
              <img class="w-auto h-7" src="/img/logo.png" alt="" />
              <p>Khair Explains</p>
            </a>

            <div class="flex -mx-2">
              <a
                href="https://www.linkedin.com/in/yogeshvashisth"
                class="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                aria-label="LinkedIn"
                target="_blank"
              >
                <svg
                  class="w-5 h-5 fill-current"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22.225 0H1.771C0.791 0 0 0.77 0 1.723v20.554C0 23.231 0.79 24 1.771 24h20.451C23.206 24 24 23.231 24 22.277V1.723C24 0.77 23.206 0 22.225 0zM7.12 20.452H3.556V9.024H7.12v11.428zM5.34 7.657c-1.141 0-2.066-.937-2.066-2.093 0-1.155.925-2.093 2.066-2.093 1.141 0 2.065.938 2.065 2.093 0 1.156-.924 2.093-2.065 2.093zm15.111 12.795h-3.563v-5.585c0-1.33-.025-3.042-1.855-3.042-1.855 0-2.141 1.448-2.141 2.946v5.681H9.33V9.024h3.418v1.557h.048c.475-.9 1.635-1.846 3.367-1.846 3.6 0 4.267 2.365 4.267 5.44v6.277z"
                    fill="currentColor"
                  />
                </svg>
              </a>

              <a
                href="https://www.youtube.com/@khairexplains"
                target="_blank"
                class="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                aria-label="Youtube"
              >
                <svg
                  class="w-5 h-5 fill-current"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M23.498 6.186a2.837 2.837 0 00-2.004-2.004C19.904 3.642 12 3.642 12 3.642s-7.904 0-9.494.54A2.837 2.837 0 00.502 6.186C0 7.776 0 12 0 12s0 4.224.502 5.814a2.837 2.837 0 002.004 2.004c1.59.54 9.494.54 9.494.54s7.904 0 9.494-.54a2.837 2.837 0 002.004-2.004C24 16.224 24 12 24 12s0-4.224-.502-5.814zM9.753 15.351v-6.702L15.677 12l-5.924 3.351z"
                    fill="currentColor"
                  />
                </svg>
              </a>

              <a
                href="https://github.com/yogeshvas"
                target="_blank"
                class="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                aria-label="Github"
              >
                <svg
                  class="w-5 h-5 fill-current"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12.026 2C7.13295 1.99937 2.96183 5.54799 2.17842 10.3779C1.395 15.2079 4.23061 19.893 8.87302 21.439C9.37302 21.529 9.55202 21.222 9.55202 20.958C9.55202 20.721 9.54402 20.093 9.54102 19.258C6.76602 19.858 6.18002 17.92 6.18002 17.92C5.99733 17.317 5.60459 16.7993 5.07302 16.461C4.17302 15.842 5.14202 15.856 5.14202 15.856C5.78269 15.9438 6.34657 16.3235 6.66902 16.884C6.94195 17.3803 7.40177 17.747 7.94632 17.9026C8.49087 18.0583 9.07503 17.99 9.56902 17.713C9.61544 17.207 9.84055 16.7341 10.204 16.379C7.99002 16.128 5.66202 15.272 5.66202 11.449C5.64973 10.4602 6.01691 9.5043 6.68802 8.778C6.38437 7.91731 6.42013 6.97325 6.78802 6.138C6.78802 6.138 7.62502 5.869 9.53002 7.159C11.1639 6.71101 12.8882 6.71101 14.522 7.159C16.428 5.868 17.264 6.138 17.264 6.138C17.6336 6.97286 17.6694 7.91757 17.364 8.778C18.0376 9.50423 18.4045 10.4626 18.388 11.453C18.388 15.286 16.058 16.128 13.836 16.375C14.3153 16.8651 14.5612 17.5373 14.511 18.221C14.511 19.555 14.499 20.631 14.499 20.958C14.499 21.225 14.677 21.535 15.186 21.437C19.8265 19.8884 22.6591 15.203 21.874 10.3743C21.089 5.54565 16.9181 1.99888 12.026 2Z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
