import gsap from 'gsap'
import { TextPlugin } from 'gsap/all'
import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  gsap.registerPlugin(TextPlugin)
  const title = useRef(null)
  const desc = useRef(null)
  const descGroup = gsap.utils.selector(desc)
  const skil = useRef(null)
  const title2 = useRef(null)
  const skillGroup = gsap.utils.selector(skil)
  const hr1 = useRef(null)
  const text = useRef(null)
  const footer = useRef(null)
  const footerGroup = gsap.utils.selector(footer)
  // const cursor = useRef(null)

  useEffect(() => {
    gsap.to(title.current, {
      x: "0%",
      duration: 0.7,
      ease: "power4.inOut",

    })
  })
  useEffect(() => {
    gsap.to(descGroup('.desc'), {
      x: "0%",
      duration: 0.7,
      ease: "power4.inOut",
      delay: 0.2,
      stagger:0.3
    })
  })
  useEffect(() => {
    gsap.to(hr1.current,{
      width:"90vw",
      duration:0.5,
      ease:"power4.inOut",
      delay:1
    })
  })

  useEffect(() => {
    gsap.to(skil.current, {
      y: '0%',
      ease: 'power4.inOut',
      duration: 0.8,
    })
  })

  useEffect(() => {
    gsap.to(skillGroup('.skill'),{
      y:'0%',
      ease:"power3.inOut",
      duration:0.5,
      delay:0.4,
      stagger:0.4,
    })
  })
  useEffect(() => {
    gsap.to(title2.current,{
      x:"0%",
      duration:0.5,
      ease:"power4.inOut",
      delay:0.3
    })
  })

  // useEffect(() => {
  //   gsap.fromTo(cursor.current,{
  //     autoAlpha: 0,
  //     x:-10
  //   },{
  //     autoAlpha: 1,
  //     duration: 0.5, 
  //     repeat: -1, 
  //     ease: SteppedEase.config(1)
  //   })
  // })

  useEffect(() => {
    gsap.to(text.current,{
      text: {value: "thank you for coming!"},
      duration: 2.5, 
      delay: 1, 
      ease: "none"
    })
  })



  return (
    <div className='flex flex-col space-y-3 min-h-full bg-black text-white  items-start p-6 '>
      <div className=' h-[100vh] flex flex-col justify-between mb-5'>
        <div>
          <div className="overflow-hidden bg-black w-fit">
            <h1 className='text-3xl font-bold tracking-wider translate-x-full p-8' ref={title}>about me.</h1>
          </div>
          <div className='flex justify-between w-full'>
            <div className='w-[40vw] p-8 overflow-hidden bg-black flex flex-col space-y-5' ref={desc}>
              <p className='-translate-x-full tracking-wide desc leading-relaxed'  >
                Hi !, my name is Radithya Sidqi,
                 Junior software engineer from Bandung, Indonesia. 
                I graduated from Vocation High School 11 Bandung.
                <br />
                <br />
                I interested in explore and learn new technology.
                my hobby is read comic and listen music.
              </p>
              <p className='-translate-x-full tracking-wide desc leading-relaxed'>
                i have skil make website and mobile app ,
                i can use framework such as <span className='text-[#F9322C]'>Laravel</span> , <span className='text-[#61DAFB]'>React.Js</span> and <span className='text-[#0468D7]'>Flutter</span>.
              </p>
              <p className='-translate-x-full tracking-wide desc leading-relaxed'>
                i also can design and make mockup using Figma.
              </p>
            </div>
            <div className='flex w-[50vw] justify-center items-center text-6xl font-bold'>
              <span className='text text-center' ref={text}>
              </span>
              {/* <span className='cursor inline-block' ref={cursor}>
                |
              </span> */}
            </div>
          </div>
        </div>
        <hr className='border border-white w-1 ml-8 my-20' ref={hr1}/>
      </div>
      <div className='-mt-20 pb-10 flex px-8 justify-start space-x-16 w-full' ref={footerGroup}>
        <div className="flex flex-col">
          <h1 className='font-bold header'>Social</h1>
          <ul className='flex flex-col space-y-3 mt-3 '>
            <li className='text-xs footer-content '><a href="https://github.com/rdhtsdq" target="_blank" rel="noopener noreferrer">Github</a></li>
            <li className='text-xs footer-content '><a href="https://www.linkedin.com/in/radithia-sidqi-551843240/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            <li className='text-xs footer-content '><a href="https://www.instagram.com/rdhtsdq_/" target="_blank" rel="noopener noreferrer">Instagram</a></li>
          </ul>
        </div>
        <div className="flex flex-col">
          <h1 className='font-bold header'>Contact</h1>
          <ul className='flex flex-col space-y-3 mt-3 '>
            <li className='text-xs footer-content '><a href="mailto:radithiasidqi@gmail.com" target="_blank" rel="noopener noreferrer">Email</a></li>
            <li className='text-xs footer-content '><a href="telp:+6289617435097">Telp</a></li>
          </ul>
        </div>
        <div className="flex flex-col">
          <h1 className='font-bold header'>Others</h1>
          <ul className='flex flex-col space-y-3 mt-3 '>
            <li className='text-xs footer-content '><Link to="./CV_Radithya.pdf" download={true} target="_blank">Download my CV</Link></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default About
