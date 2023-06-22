const CtaSection = () => {
  return (
    <div className=" bg-BrightRed">
      <div className="container mx-auto flex flex-col gap-10 md:flex-row  justify-between py-14 px-10 ">
        <h2 className="max-w-md text-center md:text-start text-4xl text-white font-bold">
          Simplify how your team works today.
        </h2>

        <div className="flex items-center justify-center ">
          <button className="px-10 py-4 rounded-full bg-white hover:bg-gray-200  transition ease-in duration-300  focus:ring-4 focus:ring-gray-200 text-BrightRed select-none shadow-lg font-semibold">
            Get Started
          </button>
        </div>
      </div>
    </div>
  )
}

export default CtaSection
