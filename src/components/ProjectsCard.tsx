import { useRef, useState, useEffect } from "react";
import "../styles/ProjectsCard.css";
import * as motion from "motion/react-client";

const myProjects = [
  "Raleigh Paving Employee Portal",
  "Local Produce Website",
  "My Portfolio Website",
  "Data Vis Platform",
  "Environmental Image Segmentation",
];

const rpImages = [
  { rotate: 6, src: "../../public/rpPhotos/schedulemobile.png" },
  { rotate: 3, src: "../../public/rpPhotos/addschedule.png" },
  { rotate: 2, src: "../../public/rpPhotos/timesheets.png" },
  { rotate: 1, src: "../../public/rpPhotos/vacationrequest.png" },
  { rotate: 0, src: "../../public/rpPhotos/login.png" },
];

export default function ProjectsCardReact({ greenIcon, pinkIcon }: any) {
  const [isOpen, setIsOpen] = useState(false);
  const [whichOpen, setWhichOpen] = useState<number | null>(null);
  const [imageOpen, setImageOpen] = useState(false);

  function handleImageClick() {
    setImageOpen(!imageOpen);
    console.log("image clicked");
  }

  function handleProjectClick(item: number) {
    setIsOpen(!isOpen);
    if (whichOpen === null) {
      setWhichOpen(item);
    } else {
      setWhichOpen(null);
      if (imageOpen === true) {
        setImageOpen(false);
      }
    }
  }

  return (
    <div>
      <motion.div
        className="relative"
        initial={{ opacity: 0, scale: 0.4 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 2,
          delay: 1.1,
          scale: {
            type: "spring",
            bounce: 0.3,
          },
        }}
      >
        <motion.div
          layout
          transition={{
            layout: { duration: 0.8, type: "spring", bounce: 0.2 },
          }}
          className={`${
            imageOpen
              ? "fixed top-0 mt-24 inset-x-0 mx-auto flex flex-col items-center justify-center w-[70vw] max-w-[90vw] h-fit z-[51]"
              : "flex flex-col justify-start px-6 pb-6 max-w-5xl"
          } backdrop-blur-md shadow-lime-700/30 shadow-2xl bg-slate-900/20 border-2 rounded-2xl border-pink-900`}
        >
          {!isOpen && (
            <div>
              <div className="flex flex-row justify-center mt-3">
                <motion.div layout="position">{pinkIcon}</motion.div>
                <motion.p layout="position" className="">
                  ~/My Projects
                </motion.p>
              </div>
            </div>
          )}
          {myProjects.map((item, index) => (
            <motion.div
              layout
              className={`flex flex-row ml-2 ${whichOpen !== null && whichOpen !== index ? "collapse" : "mt-6 z-0"}`}
              key={index}
            >
              {greenIcon}
              <motion.p
                layout="position"
                onClick={() => handleProjectClick(index)}
                id="projectP"
                className={`ml-2 ${whichOpen !== null && whichOpen === index ? "text-xl text-cyan-900 mb-3" : ""}`}
              >
                {item}
              </motion.p>
            </motion.div>
          ))}
          <div className="flex flex-row">
            {isOpen && !imageOpen && (
              <div className="">
                <motion.div className="">
                  <p className="text-justify">
                    <p className="font-mono">
                      Optimized and re-designed the Raleigh Paving employee
                      portal improving operational efficiency
                    </p>
                    <br />
                    <p className="font-mono">
                      <span className="text-lime-900">Features Added: </span>
                      Fully responsive layout, re-factored systems for employee
                      tracking, equipment repairs, job tracking, and time-sheet
                      forms.
                    </p>
                    <br />
                    <p className="font-mono">
                      <span className="text-lime-900">Technology: </span>
                      PhP, Filemaker Server, Javascript, and Figma
                    </p>
                    <br />
                    <a
                      id="projectP"
                      className="font-bold text-cyan-900 w-fit"
                      href="https://app.easternservicesllc.com/login.php"
                    >
                      Link to live site
                    </a>
                  </p>
                </motion.div>
              </div>
            )}
            {isOpen && (
              <div>
                <div className="relative">
                  <motion.div
                    layout
                    onClick={() => handleImageClick()}
                    className={`${imageOpen ? " w-fit h-fit rounded-lg mb-6 px-10" : "w-72 rounded-lg ml-5"}`}
                    // className="w-72 rounded-lg ml-5"
                  >
                    <motion.img
                      // className="rounded-lg w-screen h-[500px]"
                      className={`${imageOpen ? "rounded-lg w-[800px]" : "rounded-lg"}`}
                      src="../../public/rpPhotos/login.png"
                    />
                  </motion.div>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
