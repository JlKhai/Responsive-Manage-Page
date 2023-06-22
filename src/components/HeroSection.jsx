import intro from '../images/illustration-intro.svg'

const HeroSection = () => {
  return (
    <div className="container h-screen mx-auto  flex items-center justify-center">
      <div className="flex flex-col-reverse md:flex-row lg:ml-10">
        <div className="  md:w-1/2 lg:w-1/2 flex flex-col gap-10 p-3 md:p-0">
          <h1 className="max-w-md font-bold  text-center md:text-start text-4xl md:text-5xl">
            Bring everyone together to build better products.
          </h1>
          <p className="max-w-[100%] md:max-w-sm  text-center md:text-left text-DarkGrayishBlue">
            Manage makes it simple for software teams to plan day-to-dat tasks
            while keeping the larger team goals in view.
          </p>
          <div className="mx-auto md:mx-0">
            <button className="w-36 px-5 py-2 rounded-full bg-BrightRed hover:bg-red-400  transition ease-in duration-300  focus:ring-4 focus:ring-orange-600 text-white select-none baseline">
              Get Started
            </button>
          </div>
        </div>
        <div className=" md:w-1/2 lg:w-1/2">
          <img src={intro} alt="" />
        </div>
      </div>
    </div>
  )
}

export default HeroSection
