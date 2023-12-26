"use client";

import React from 'react';
import Image from 'next/image';
import Typewriter from 'typewriter-effect';
import { useForm } from '@formspree/react';
import { Analytics } from '@vercel/analytics/react';
import { useState } from 'react';

import {BsFillMoonStarsFill} from 'react-icons/bs';
import { AiFillLinkedin,AiFillGithub,AiFillMail, AiFillInstagram} from 'react-icons/ai';
import {BiLogoJavascript,BiLogoCss3,BiLogoTailwindCss, BiLogoBootstrap} from 'react-icons/bi'
import {SiHtml5} from 'react-icons/si'

import masoma from '../../public/Masoma.png';
import design from '../../public/design.png';
import code from '../../public/code.png';
import consulting from '../../public/consulting.png';
import plastic from '../../public/plastic.png';
import change_makers from '../../public/change-makers.png';



const portfolioStyle = {
  layout: 'responsive',
  hover: 'opacity-75',
  
}


const scroll = {
  scrollBehavior: 'smooth !important',
}



export default function Home() {

  const [darkMode, setDarkMode] = useState(true);
  const [state, handleSubmit] = useForm('mrgwzblg');

  if (state.succeeded) {
  
    return <p className='text-5xl text-cyan-500 justify-center items-center flex py-50'>Submitted Successfully</p>;
  }

  return (
    <div className={darkMode ? 'dark' : ''}>
        <main className='bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-950'>
          <section className=' min-h-screen'>
            <nav className='py-10 mb-12 flex justify-between dark:text-white'>
              <h1 className='text-xl font-dancing dark:text-white '> <a href='#'> Hi, I'm Masooma</a>  </h1>
              <nav className='hidden lg:block md:block'>
                <ul className='flex items-center justify-center flex-row px-2 lg:gap-4 md:gap-4' >
                  <li className='hover:text-cyan-500'> <a href='#about' style={scroll} >About</a> </li>
                  <li className='hover:text-cyan-500'> <a href='#skills' style={scroll}>Skills</a> </li>
                  <li className='hover:text-cyan-500'> <a href='#services' style={scroll}>Services</a> </li>
                  <li className='hover:text-cyan-500'> <a href='#projects' style={scroll}>Projects</a> </li>
                  <li className='hover:text-cyan-500'> <a href='#contact' style={scroll}>Contact</a> </li>
                </ul>
              </nav>
              

              
              <ul className='flex items-center justify-end'>
                <li> <BsFillMoonStarsFill onClick={()=> setDarkMode(!darkMode)} className='cursor-pointer text-2xl dark:text-gray-200' /> </li>
     
              </ul>
              
            </nav>

          

            <div className='text-center p-10 ' id='about'>
              <h2 className='text-5xl py-4 text-teal-600 font-medium dark:text-gradient-to-r from-cyan-700 to-cyan-500 md:text-6xl'> 
              
              <Typewriter
                options={{
                  strings: [
                    "Hi I'm masooma hossaini"
                ],
                  autoStart: true,
                  loop: true,
                  delay: 90,
                  skipAddStyles: true,
                  deleteSpeed: 50,
                  pauseFor: 1000,
                }} 
              />
              </h2>
               
              <h3 className='text-3xl py-2 dark:text-white md:text-3xl'>Web Designer</h3>
              <p className='text-md py-5 leading-8 text-gray-800 dark:text-gray-200 md:text-xl max-w-10xl mx-auto'>


              👋 Hi, I'm A web enthusiast with a solid command of HTML, CSS, and Tailwind. Over A year, I've immersed myself in various web design projects, honing my skills in creating visually stunning and user-friendly websites. From coding elegant structures to navigating the ever-evolving landscape of design trends, I find joy in crafting seamless online experiences. Let's connect and explore the endless possibilities of the digital realm!


              </p>
              {/* flex justify-center flex-col items-center */}
              <div className='text-5xl flex justify-center flex-row items-center text-gray-600 dark:text-gray-400 md:flex md:gap-10 lg:flex lg:gap-10 '>
                <a href='https://www.linkedin.com/in/masooma-hossaini-28324b274/'  className='hover:text-cyan-500'><AiFillLinkedin /></a>
                <a href='https://www.instagram.com/masooma.hossaini/'  className='hover:text-cyan-500'><AiFillInstagram /></a>
                <a href='https://github.com/Masoma2023'  className='hover:text-cyan-500'><AiFillGithub /></a>
                <a href='mailto:masoomahossaini404@gmail.com'  className='hover:text-cyan-500'><AiFillMail /></a>
              </div>
              <div className='flex items-center justify-center text-center mx-auto overflow-hidden'>
                <div className='relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-64 h-64 mt-20 overflow-hidden md:h-96 md:w-96 lg:w-96 lg:h-96'>
                  <Image  src={masoma} fill={true}  />
                </div>
              </div>
            </div>
          </section>

          {/* Skills */}
          <div id='skills' >
              <div>
                <h1 className='text-5xl py-3 text-black dark:text-gray-200'> My Skills</h1>
              </div>
              <div className='text-center p-10 rounded-xl my-10   '>

                <h2 className='text-3xl p-7 dark:text-gray-200'>Languages</h2>
                <div className='flex flex-wrap justify-evenly'>
                 
                  <div className='p-2 text-xl dark:text-gray-200'><BiLogoJavascript className='w-20 h-20 text-cyan-500 md:w-20 md:h-20 lg:w-28 lg:h-28'/>Java script</div>
                 
                </div>
    

                <h2 className='text-3xl p-10 my-13 dark:text-gray-200 '>Front End</h2>
                <div className='flex flex-wrap justify-evenly'>
                  
                  <div className='p-2 text-xl dark:text-gray-200'><SiHtml5 className='w-20 h-20 text-cyan-500 md:w-20 md:h-20 lg:w-28 lg:h-28'/>HTML</div>
                  <div className='p-2 text-xl dark:text-gray-200'><BiLogoCss3 className='w-20 h-20 text-cyan-500 md:w-20 md:h-20 lg:w-28 lg:h-28'/>CSS</div>
                  <div className='p-2 text-xl dark:text-gray-200'><BiLogoTailwindCss className='w-20 h-20 text-cyan-500 md:w-20 md:h-20 lg:w-28 lg:h-28'/>Tailwind CSS</div>
                  <div className='p-2 text-xl dark:text-gray-200'><BiLogoBootstrap className='w-20 h-20 text-cyan-500 md:w-20 md:h-20 lg:w-28 lg:h-28'/>Bootstrap</div>
                </div>
              </div>
             
          </div>


         
          {/* 2nd Section here */}

          <section id='services'>
            <div>
              <h3 className='text-5xl py-3 mb-6 dark:text-white'>Services I Offer</h3>
              <p className='text-2xl py-2 leading-8 text-grey-800 dark:text-gray-200'>
                  As a WEB  Designer I offer the following services:
              </p>
              
                <ul className='text-lg py-2 leading-8 text-grey-800 dark:text-gray-200 text-justify list-disc ml-9 '>
                  <li className='my-4'> <span className='text-cyan-500'>Full Stack Web Development  </span> : I can design with tailwind in projects that will develop with next js.</li>
                </ul>
              
            </div>
            <div className='lg:flex gap-10'>
              <div className='text-center shadow-lg  p-10 rounded-xl my-10 dark:bg-gradient-to-b from-cyan-800 to-cyan-500'>
                <div className='flex justify-center flex-col items-center '>
                  <Image src={design} width={100} height={100}/>
                  <h3 className='text-lg font-medium pt-8 pb-2'>Responsive Design</h3>
                  <p className='py-2'>I made standard responsived website which the same as figma.</p>

                </div>
              </div>

            
              <div className='text-center shadow-lg  p-10 rounded-xl my-10 dark:bg-gradient-to-b from-cyan-800 to-cyan-500'>
                <div className='flex justify-center flex-col items-center '>
                  <Image src={code} width={100} height={100}/>
                  <h3 className='text-lg font-medium pt-8 pb-2'>Fast Desingning</h3>
                  <p className='py-2'>I focus and work fast to finish the designs on the time.</p>
              
                </div>
              </div>
            
              

              <div className='text-center shadow-lg  p-10 rounded-xl my-10 dark:bg-gradient-to-b from-cyan-800 to-cyan-500'>
                <div className='flex justify-center flex-col items-center '>
                  <Image src={consulting} width={100} height={100}/>
                  <h3 className='text-lg font-medium pt-8 pb-2'>Best Final Product</h3>
                  <p className='py-2'>After finishing the designs I always learn new things and deploy it.</p>

                </div>
              </div>
            </div>
          </section>

          <section className='py-10' id='projects'>
            <div>
              <h3 className='text-5xl py-2 mb-6 dark:text-white'>Portfolio</h3>
              <p className='text-md py-2 leading-8 text-grey-800 dark:text-gray-200'>
                Welcome to my portfolio, a showcase of my passion for web design. Specializing in crafting visually appealing and user-friendly interfaces, my expertise lies in <span className='text-cyan-500'>HTML, CSS, and Tailwind</span>. 
                Explore a variety of projects, including <span className='text-cyan-500'>Pizzeria-react-app, FlySmart, Medical Insurance Premium prediction, Intelligent Traffic Management System, and my Portfolio Website</span>.  
                Each project not only demonstrates my flair for design but also reflects my dedication to creating seamless online experiences. 
              </p>
              <p className='text-md py-2 leading-8 text-grey-800 dark:text-gray-200'>
                Within my portfolio, I aim to present the artistry behind my work, offering potential employers and collaborators a glimpse into my creative process. 
                It's more than a collection of web pages—it's a visual journey showcasing my commitment to aesthetic excellence and thoughtful user experiences. 
                Explore my portfolio to see how my design skills can elevate your projects.
              </p>

            </div>
            
            <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap'>

              <div className='basis-1/3 flex-1 '>
                <a href='https://change-makers-7pgbzkach-mars-coders.vercel.app/' className='relative'>
                  <Image src={change_makers} className='rounded-lg object-cover ' width={'100%'} height={'100%'} style={portfolioStyle} title='Checkout online'/>
                  <div className='absolute inset-0 flex items-center justify-center  opacity-0 hover:opacity-100 transition-opacity duration-300'>
                    <p className='text-xl text-center text-black mb-32 hover:text-3xl md:text-2xl lg:text-2xl'>  
                      Click Me to Checkout Vercel app
                    </p>
                  </div>
                </a>
              </div>
              <div className='basis-1/3 flex-1 '>
                <a href='https://github.com/Masoma2023/final-projects' className='relative'>
                  <Image src={plastic} className='rounded-lg object-cover ' width={'100%'} height={'100%'} style={portfolioStyle} title='Checkout Code on Github'/>
                  <div className='absolute inset-0 flex items-center justify-center  opacity-0 hover:opacity-100 transition-opacity duration-300'>
                    <p className='text-xl text-center text-black hover:text-3xl md:text-2xl lg:text-2xl'>  
                      Click Me to Checkout Code on Github
                    </p>
                  </div>
                </a>
              </div>
        
            </div>

          </section>



          <section className='py-10' id='contact'>
          <h1 className='text-5xl dark:text-gray-200 py-5'>Contact Me</h1>
            <form onSubmit={handleSubmit}>
              <label htmlFor='name' className='dark:text-gray-200'>Name</label>
              <input type='text' id='name' className='border-2 border-cyan-500 p-2 rounded-lg w-full dark:border-cyan-500 dark:bg-black dark:text-gray-200'/>
              <label htmlFor='email' className='dark:text-gray-200'>Email</label>
              <input type='email' id='email' className='border-2 border-cyan-500 p-2 rounded-lg w-full dark:border-cyan-500 dark:bg-black dark:text-gray-200 '/>
              <label htmlFor='message' className='dark:text-gray-200'>Message</label>
              <textarea name='message' id='message' cols='30' rows='10' className='border-2 border-cyan-500  p-2 py-4 rounded-lg w-full dark:border-cyan-500 dark:bg-black dark:text-gray-200 '></textarea>
              <button disabled={state.submitting} className='bg-gradient-to-r from-cyan-700 to-cyan-500  text-white px-4 py-2 rounded-lg'>Submit</button>
            </form>  
            
          </section>
          </main>
          <Analytics/>
    </div>
    
  )
}
