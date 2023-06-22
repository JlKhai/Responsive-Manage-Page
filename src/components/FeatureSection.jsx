const FeatureSection = () => {
  return (
    <div className="container h-screen mx-auto flex justify-center items-center">
      <div className="flex flex-col md:flex-row gap-0 xl:gap-24 p-3 md:p-0">
        <div className="md:w-1/2 flex flex-col gap-10 mb-10">
          <h2 className="max-w-md font-bold text-4xl md:text-4xl text-center md:text-start">
            What's different about Manage?
          </h2>
          <p className="max-w-[100%] md:max-w-sm text-center md:text-start text-DarkGrayishBlue">
            Manage provides all the functionality your team needs, without the
            complexity.Our software is tailor-made for modern digital product
            teams.
          </p>
        </div>
        <div className="md:w-1/2 flex flex-col gap-10">
          <div className="flex flex-col space-y-0 md:space-x-6 md:flex-row">
            <div className="rounded-l-full bg-red-200 md:bg-transparent">
              <div className="flex items-center space-x-2">
                <div className="px-4 py-2 text-white rounded-full md:py-1 bg-BrightRed ">
                  01
                </div>
                <h3 className="text-bold font-bold md:mb-4 md:hidden">
                  Track company-wide progress
                </h3>
              </div>
            </div>
            <div>
              <h3 className="hidden mb-4 text-lg font-bold md:block">
                Track company-wide progress
              </h3>
              <p className="text-DarkGrayishBlue md:max-w-sm mt-2">
                See how your day-to-day tasks fit into the vision.Go from
                tracking progress at the milestone level all the way done to the
                smallest of details.Never lose sight of the bigger picture
                again.
              </p>
            </div>
          </div>
          <div className="flex flex-col space-y-0 md:space-x-6 md:flex-row">
            <div className="rounded-l-full bg-red-200 md:bg-transparent">
              <div className="flex items-center space-x-2 ">
                <div className="px-4 py-2 text-white rounded-full md:py-1 bg-BrightRed">
                  02
                </div>
                <h3 className="text-bold font-bold md:mb-4 md:hidden">
                  Advanced built-in reports
                </h3>
              </div>
            </div>
            <div>
              <h3 className="hidden mb-4 text-lg font-bold md:block">
                Advanced built-in reports
              </h3>
              <p className="text-DarkGrayishBlue md:max-w-sm mt-2">
                Set internal delivery estimates and track progress toword
                company goals. Our customisable dashboard helps you build out
                the reports you need to keep key stakeholders informed.
              </p>
            </div>
          </div>
          <div className="flex flex-col space-y-0 md:space-x-6 md:flex-row">
            <div className="rounded-l-full bg-red-200 md:bg-transparent">
              <div className="flex items-center space-x-2">
                <div className="px-4 py-2 text-white rounded-full md:py-1 bg-BrightRed ">
                  03
                </div>
                <h3 className="text-bold font-bold md:mb-4 md:hidden">
                  Everything you need in one place
                </h3>
              </div>
            </div>
            <div>
              <h3 className="hidden mb-4 text-lg font-bold md:block">
                Everything you need in one place
              </h3>
              <p className="text-DarkGrayishBlue md:max-w-sm mt-2 ">
                Stop jumping from one service to another to communicate, store
                files,track tasks and share documents. Manage offers an
                all-in-one team productivity solution.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeatureSection
