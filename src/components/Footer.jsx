import logo from '../images/logo.svg'
import facebook from '../images/icon-facebook.svg'
import youtube from '../images/icon-youtube.svg'
import twitter from '../images/icon-twitter.svg'
import pinterest from '../images/icon-pinterest.svg'
import instagram from '../images/icon-instagram.svg'
import Contactme from './Contactme'

const Footer = () => {
  return (
    <>
      <div className=" bg-VeryDarkBlue">
        <div className="container mx-auto flex flex-col-reverse md:flex-row justify-between py-14 md:py-8 lg:py-10 px-10">
          <div className="flex flex-col-reverse md:flex-col gap-10 md:gap-20">
            <p className=" text-gray-500 text-sm md:hidden text-center">
              Copyright 2023. All Right Reserved.
            </p>
            <img
              className="bg-white w-60 md:w-40 mx-auto hover:bg-gray-400  transition ease-in duration-300  p-1 cursor-pointer select-none"
              src={logo}
              alt=""
            />

            <div className=" flex justify-center gap-6 md:gap-1 lg:gap-3">
              <img
                className="hover:bg-gray-500  transition ease-in duration-300  rounded h-10 md:h-6 cursor-pointer select-none"
                src={facebook}
                alt=""
              />
              <img
                className="hover:bg-gray-500  transition ease-in duration-300  rounded h-10 md:h-6 cursor-pointer select-none"
                src={youtube}
                alt=""
              />
              <img
                className="hover:bg-gray-500  transition ease-in duration-300  rounded h-10 md:h-6 cursor-pointer select-none"
                src={twitter}
                alt=""
              />
              <img
                className="hover:bg-gray-500  transition ease-in duration-300  rounded h-10 md:h-6 cursor-pointer select-none"
                src={pinterest}
                alt=""
              />
              <img
                className="hover:bg-gray-500  transition ease-in duration-300  rounded h-10 md:h-6 cursor-pointer select-none"
                src={instagram}
                alt=""
              />
            </div>
          </div>

          <div className="flex justify-center md:justify-stretch py-8 md:py-0 gap-36 md:gap-10 lg:gap-40 xl:gap-80">
            <div className="flex flex-col gap-3">
              <p className=" text-white hover:text-gray-400  transition ease-in duration-300  cursor-pointer select-none">
                Home
              </p>
              <p className=" text-white hover:text-gray-400  transition ease-in duration-300  cursor-pointer select-none">
                Pricing
              </p>
              <p className=" text-white hover:text-gray-400  transition ease-in duration-300  cursor-pointer select-none">
                Products
              </p>
              <p className=" text-white hover:text-gray-400  transition ease-in duration-300  cursor-pointer select-none">
                About Us
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <p className=" text-white hover:text-gray-400  transition ease-in duration-300  cursor-pointer select-none">
                Careers
              </p>
              <p className=" text-white hover:text-gray-400  transition ease-in duration-300  cursor-pointer select-none">
                Community
              </p>
              <p className=" text-white hover:text-gray-400  transition ease-in duration-300  cursor-pointer select-none">
                Privacy Policy
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-between items-center md:items-start">
            <form>
              <input
                type="text"
                className="bg-gray-200 focus:bg-white px-3 md:px-6 py-3 rounded-l-3xl md:rounded-full outline-none "
                placeholder="Update in your inbox..."
              />
              <button className="md:ml-2 px-5 md:px-6 py-3 rounded-r-3xl md:rounded-full text-white bg-BrightRed hover:bg-orange-700  transition ease-in duration-300  focus:bg-orange-700 focus:ring-2 focus:ring-gray-200 select-none shadow-lg font-semibold">
                Go
              </button>
            </form>
            <p className="text-gray-500 hidden md:block">
              Copyright 2023. All Right Reserved.
            </p>
          </div>
        </div>
      </div>
      <Contactme />
    </>
  )
}

export default Footer
