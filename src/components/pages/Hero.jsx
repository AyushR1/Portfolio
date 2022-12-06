import Button from "../parts/Button";
import Lottie from "lottie-react";
import Animation from "../../assets/img/animation.json";
import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
export default function Hero(props) {
  const [letterClass, setLetterClass] = useState('text-animate')

  const nameArray = ['H', 'i', '!']
  const jobArray = 
[ 'I',' ','am',' ','Ayush'] 
const job = 
  [
    'Software',
    // 'o',
    // 'f',
    // 't',
    // 'w',
    // 'a',
    // 'r',
    // 'e',
    '  ',
    'Developer',
    // 'e',
    // 'v',
    // 'e',
    // 'l',
    // 'o',
    // 'p',
    // 'e',
    // 'r',
  ]

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 400)
  }, [])
  return (
    <div className="flex flex-col mb-24">
      <div className="flex flex-col md:flex-row items-center">
        <div className="flex flex-col flex-1 py-5">
          <div className="py-5 text-[45px] font-semibold text-white bg-clip-text bg-gradient-to-r from-sky-500 to-grayfont-poppins">
          <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            /><br></br>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray to-white">
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={22}
            /><br></br>
            </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-gray ">
            <AnimatedLetters
              letterClass={letterClass}
              strArray={job}
              idx={22}
            />
            </span>
          </div>
          <div className="py-[50px]">
            <a href="https://drive.google.com/file/d/1TERh1dRKbsWl8utCpqWhoNTdly-INw8P/view?usp=sharing">
              <Button title={"Resume"} />
            </a>
          </div>
        </div>

        <div className="flex flex-col flex-1 md:pl-[220px] w-48 md: h-max md:w-48">
          <Lottie animationData={Animation}  />
        </div>
      </div>
    </div>
  );
}
