import HeroBannerImage from "../assets/images/banner.png"
import {useAuth0} from '@auth0/auth0-react';
import { Link } from "react-router-dom";
// const HeroBanner = () => {
//   const { user } = useAuth0();

//   return (
//     <>

//       {/* <section className="text-gray-600 body-font mt-16 lg:mt-0">
//         <div className="mx-auto container flex md:flex-row flex-col items-center md:items-start">
//           <div className="lg:flex-grow md:w-1/2 flex flex-col md:items-start md:text-left mb-28 lg:mb-52 items-center text-center relative py-10 md:px-20 md:py-20 lg:py-36">
//             <h1 className="title-font text-3xl mb-6 font-semibold text-indigo-900 dark:text-indigo-400">
//               Welcome {user?.name}
//             </h1>
//             <h1 className="title-font sm:text-5xl text-4xl mb-4 font-bold text-gray-900 dark:text-gray-200">
//               Sweat, Smile
//               <br className="md:inline-block hidden" /> & Repeat.
//             </h1>
//             <p className="mb-8 leading-relaxed dark:text-gray-200">Check out the most effective exercises</p>
//             <div className="flex justify-center">
//               <Link
//               to="/exercise"
//                 className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
//               >
//                 Explore Exercises
//               </Link>
//             </div>
//             <div className="opacity-10 hidden sm:block font-semibold text-[200px] text-indigo-900 -z-10 absolute top-20 md:top-96 -left-20 md:left-20 pointer-events-none dark:text-gray-500">
//               Exercises
//             </div>
//           </div>

//           <div className="md:w-1/2 w-0 md:float-right">
//             <img
//               // src={HeroBannerImage}
//               src="https://i2-prod.mirror.co.uk/incoming/article9991086.ece/ALTERNATES/s615b/Su17_RN_Breaking2_EKipchoge_Portrait_2_original.jpg"
//               alt="Banner"
//               className="object-cover object-center pointer-events-none rounded-[70px] lg:rounded-all"
//             />
//           </div>
//         </div>
//       </section> */}
//     </>
//   )
// }

// export default HeroBanner



import React from "react";
import {
  Navbar,
  Collapse,
  Button,
  IconButton,
  Typography,
  Input,
} from "@material-tailwind/react";
import {
  RectangleStackIcon,
  UserCircleIcon,
  CommandLineIcon,
  Squares2X2Icon,
} from "@heroicons/react/24/solid";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import VideoContainer from "./VideoCard";



function NavItem({ children }) {
  return (
    <li>
      <Typography
        as="a"
        href="#"
        variant="paragraph"
        color="blue-gray"
        className="text-blue-gray-700 flex items-center gap-2 font-medium"
      >
        {children}
      </Typography>
    </li>
  );
}

function HeroBanner() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen((cur) => !cur);
  const { loginWithRedirect, logout, isAuthenticated , user} = useAuth0();
  const checking = () => {
    if (!isAuthenticated) {
      window.location.reload(false);
    }
  }
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpen(false),
    );
  }, []);

  return (
    <>
      
      <header className="bg-white p-8">
        <div className="grid mt-16 min-h-[82vh] w-full lg:h-[54rem] md:h-[34rem] place-items-stretch bg-[url('/image/bg-hero-17.svg')] bg-center bg-contain bg-no-repeat">
          <div className="container mx-auto px-4 text-center flex flex-col items-center justify-start ">
            <Typography className="inline-flex text-xs rounded-lg border-[1.5px] border-blue-gray-50 bg-white py-1 lg:px-4  font-medium text-primary">
              Welcome 🎉 {user?.name &&  user?.name} to Fitness Fast.
            </Typography>
            <Typography
              variant="h1"
              color="blue-gray"
              className="mx-auto my-6 w-full leading-snug  !text-2xl lg:max-w-3xl lg:!text-5xl"
            >
              Get ready to push your{" "}
              <span className="text-orange-500 leading-snug ">
                limits
              </span>{" "}
              and achieve{" "}
              <span className="leading-snug text-orange-500">
                peak performance!💪🏋️‍♂️
              </span>
            </Typography>
            <Typography
              variant="lead"
              className="mx-auto w-full !text-gray-500 lg:text-lg text-base"
            >
              The time is now to embrace your strength, break barriers, and stand out. 
              <br />
              It's your moment to be bold, to be powerful, and to redefine what’s possible!" 🚀🔥
            </Typography>
            <div className="mt-8 grid w-full place-items-start md:justify-center">
              <div className="mb-2 flex w-full flex-col gap-4 md:flex-row">
                <Link to="/exercise">
                <Button
                  color="gray"
                  className="w-full px-4 md:w-[12rem]"
                  onClick={checking}
                  >
                  get started
                </Button>
                </Link>
              </div>
            </div>
            <VideoContainer videoUrl={'/video.webm'}/>
          </div>
        </div>
      </header>
    </>
  );
}

export default HeroBanner;
