import React from 'react';
import {BiLogoJavascript} from "react-icons/bi";
import {AiFillHtml5} from "react-icons/ai";
import {SiCss3} from "react-icons/si";
import {FaBootstrap} from "react-icons/fa";
import {FaGit} from "react-icons/fa";
import {DiGithubFull} from "react-icons/di";
import {SiNetlify} from "react-icons/si";
import {FcLinux} from "react-icons/fc";
import {BiLogoTailwindCss} from "react-icons/bi";
import {PiFileJsxBold} from "react-icons/pi";
import {FaReact} from "react-icons/fa";
import{TbSeo} from "react-icons/tb";
import {SiVite} from "react-icons/si";

import AOS from "aos";
import "aos/dist/aos.css";



const Skill = (props) => {

    const styling = {
        color: props.color
    }

  return (
    <a href={props.link} target='_blank' className=''>
    <div className='flex shadow-md flex-col items-center hover:animate-pulse w-fit border border-transparent space-y-2 hover:border-blue-800 duration-500 cursor-pointer p-2'>
        <div style={styling} className={` text-5xl md:text-8xl`}>{props.icon}</div>
        <p className='text-[.7rem] text-gray-600'>{props.name}</p>
    </div>
    </a>
  )
}



const Skills = () => {

    React.useEffect(() => {
        AOS.init({duration: 2000})
    }, [])
  return (
    <div id='skills' className='md:px-10 px-4 py-6 flex flex-col space-y-6'>

        <h1 data-aos="zoom-in" className='text-2xl md:text-5xl text-center md:text-start mb-4'><span className='border-b-4 text-gray-700 border-blue-800'>SKILLS</span></h1>

<div data-aos="zoom-in" className='flex flex-wrap gap-8 text-center items-center justify-center'>
      <Skill 
      icon={<AiFillHtml5 />}
      color="#FF0000"
      name="HTML5"
      link="https://devdocs.io/html/"
      />

    <Skill 
      icon={<SiCss3 />}
      color="#264de4"
      name="CSS3"
      link="https://devdocs.io/css/"
      />

    <Skill 
      icon={<BiLogoJavascript />}
      name="ES6 JAVASCRIPT"
      color="##323330"
      link="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
      />

<Skill 
      icon={<FaBootstrap />}
      name="BOOTSTRAP"
      color="purple"
      link="https://getbootstrap.com/"
      />

<Skill 
      icon={<BiLogoTailwindCss />}
      name="TAILWINDCSS"
      color="#b8c2cc"
      link="https://tailwindcss.com/"
      />

<Skill 
      icon={<FaReact />}
      name="REACT"
      color="#61dbfb"
      link="https://react.dev/blog/2023/03/16/introducing-react-dev"
      />

<Skill 
      icon={<PiFileJsxBold />}
      name="JAVASCRIPT XML"
      color="#61dbfb"
      link="https://legacy.reactjs.org/docs/introducing-jsx.html"
      />

<Skill 
      icon={<FaGit />}
      name="GIT"
      color="#F1502F"
      link="https://git-scm.com/docs/git"
      />

<Skill 
      icon={<DiGithubFull />}
      name="GITHUB"
      color="#171515"
      link="https://github.com/"
      />

<Skill 
      icon={<SiNetlify />}
      name="NETLIFY"
      color="teal"
      link="https://www.netlify.com/"
      />

<Skill 
      icon={<FcLinux />}
      name="LINUX"
      link="https://www.linux.com/what-is-linux/"
      />

<Skill 
      icon={<TbSeo />}
      name="SEO"
      color="#f94e14"
      link="https://developers.google.com/search/docs"
      />

<Skill 
      icon={<SiVite />}
      name="VITE"
      link="https://vitejs.dev/"
      />
    </div>

    </div>
    
  )
}

export default Skills
