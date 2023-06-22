import avata1 from '../images/avatar-anisha.png'
import avata2 from '../images/avatar-ali.png'
import avata3 from '../images/avatar-richard.png'
import { Carousel } from '@mantine/carousel'

const TestiSection = () => {
  return (
    <div className="h-screen mx-auto text-center flex justify-center items-center ">
      <div className="flex flex-col">
        <div className="">
          <h2 className=" text-4xl font-bold text-center ">
            What they've said
          </h2>
        </div>
        <div className="hidden md:flex justify-between gap-2 lg:gap-8 xl:gap-10 mt-32">
          <div className="md:w-1/3 max-w-md flex flex-col gap-3 items-center rounded-lg bg-gray-100 p-6 space-y-2">
            <img className=" w-20 -mt-16" src={avata1} alt="" />
            <h4 className=" text-xl font-bold text-center">Anisha Li</h4>
            <p className=" text-center text-DarkGrayishBlue">
              Manage has supercharged out team's workflow. The maintain
              visibility on larger milestones at all times keeps everyone
              motivated.
            </p>
          </div>
          <div className=" md:w-1/3 max-w-md flex flex-col gap-3 items-center rounded-lg bg-gray-100 p-6 space-y-2">
            <img className=" w-20 -mt-16" src={avata2} alt="" />
            <h4 className=" text-xl font-bold text-center">Ali Bravo</h4>
            <p className=" text-center text-DarkGrayishBlue">
              We have been able to cancel so many other subscioptions since
              using Manage. There is no more cross-channel confusion and
              everyone is much more focused.
            </p>
          </div>
          <div className=" md:w-1/3 max-w-md flex flex-col gap-3 items-center rounded-lg bg-gray-100 p-6 space-y-2">
            <img className=" w-20 -mt-16" src={avata3} alt="" />
            <h4 className=" text-xl font-bold text-center">Richard Watts</h4>
            <p className=" text-center text-DarkGrayishBlue">
              Manage allows us to privide sturcture and keep us organized and
              focused. I cant't stop re them to everyone I talk to!.
            </p>
          </div>
        </div>
        <div className="md:hidden mt-20">
          <Carousel
            className="md:hidden"
            maw={460}
            mx="auto"
            withIndicators
            height={300}
            controlsOffset="lg"
            controlSize={30}
            styles={{
              control: {
                '&[data-inactive]': {
                  opacity: 0,
                  cursor: 'default',
                },
              },
            }}
          >
            <Carousel.Slide className=" py-10">
              <div className="flex flex-col gap-3 items-center rounded-lg bg-gray-100 p-5 h-[300px] space-y-2">
                <img className=" w-20 -mt-14" src={avata1} alt="" />
                <h4 className=" text-xl font-bold text-center">Anisha Li</h4>
                <p className=" text-center text-DarkGrayishBlue">
                  Manage has supercharged out team's workflow. The maintain
                  visibility on larger milestones at all times keeps everyone
                  motivated.
                </p>
              </div>
            </Carousel.Slide>
            <Carousel.Slide className=" py-10">
              <div className="flex flex-col gap-3 items-center rounded-lg bg-gray-100 p-5  h-[300px] space-y-2">
                <img className=" w-20 -mt-14" src={avata2} alt="" />
                <h4 className=" text-xl font-bold text-center">Ali Bravo</h4>
                <p className=" text-center text-DarkGrayishBlue">
                  We have been able to cancel so many other subscioptions since
                  using Manage. There is no more cross-channel confusion and
                  everyone is much more focused.
                </p>
              </div>
            </Carousel.Slide>
            <Carousel.Slide className=" py-10">
              <div className="flex flex-col gap-3 items-center rounded-lg bg-gray-100 p-5  h-[300px] space-y-2">
                <img className=" w-20 -mt-14" src={avata3} alt="" />
                <h4 className=" text-xl font-bold text-center">
                  Richard Watts
                </h4>
                <p className=" text-center text-DarkGrayishBlue">
                  Manage allows us to privide sturcture and keep us organized
                  and focused. I cant't stop re them to everyone I talk to!.
                </p>
              </div>
            </Carousel.Slide>
          </Carousel>
        </div>
        <div className="mt-12 md:mt-24">
          <button className="w-36 px-5 py-2 rounded-full bg-BrightRed hover:bg-red-400  transition ease-in duration-300  focus:ring-4 focus:ring-orange-600 text-white select-none baseline">
            Get Started
          </button>
        </div>
      </div>
    </div>
  )
}

export default TestiSection
