import { Button, Menu } from '@mantine/core'
import logoImg from '../images/logo.svg'
import hamburger from '../images/icon-hamburger.svg'
const Navbar = () => {
  return (
    <div className=" relative container mx-auto p-6">
      <div className=" flex items-center justify-between">
        <div className="">
          <img
            className=" mt-2 w-56 cursor-pointer hover:translate-y-1  transition ease-in duration-300 "
            src={logoImg}
            alt=""
          />
        </div>
        <div className="hidden md:flex gap-1 lg:gap-5  ">
          <p className=" hover:text-DarkGrayishBlue  transition ease-in duration-300 cursor-pointer select-none text-lg">
            Pricing
          </p>
          <p className=" hover:text-DarkGrayishBlue  transition ease-in duration-300 cursor-pointer select-none text-lg">
            Product
          </p>
          <p className=" hover:text-DarkGrayishBlue  transition ease-in duration-300 cursor-pointer select-none text-lg">
            About Us
          </p>
          <p className=" hover:text-DarkGrayishBlue  transition ease-in duration-300 cursor-pointer select-none text-lg">
            Careers
          </p>
          <p className=" hover:text-DarkGrayishBlue  transition ease-in duration-300 cursor-pointer select-none text-lg">
            Community
          </p>
        </div>
        <button className="hidden md:block px-5 py-2  rounded-full bg-BrightRed hover:bg-red-400  transition ease-in duration-300 text-white select-none focus:ring-4 focus:ring-orange-600 ">
          Get Started
        </button>
        <div className="sm:block md:hidden flex items-center justify-center">
          <Menu shadow="md" width={200}>
            <Menu.Target className="hover:bg-gray-200">
              <Button>
                <img src={hamburger} />
              </Button>
            </Menu.Target>

            <Menu.Dropdown>
              <Menu.Item className="text-center font-semibold">
                Pricing
              </Menu.Item>
              <Menu.Item className="text-center font-semibold">
                Product
              </Menu.Item>
              <Menu.Item className="text-center font-semibold">About</Menu.Item>
              <Menu.Item className="text-center font-semibold">
                Careers
              </Menu.Item>
              <Menu.Item className="text-center font-semibold">
                Community
              </Menu.Item>
            </Menu.Dropdown>
          </Menu>
        </div>
      </div>
    </div>
  )
}

export default Navbar
