import gsap from 'gsap'
import React, { useEffect, useRef } from 'react'
import Card from '../components/Card'
import doit from '../assets/DoIt.png'
import mylib from '../assets/Mylib.png'
import myschool from '../assets/Myschool.png'
import rantangan from '../assets/Rantangan.png'

const Projects = () => {
  const title = useRef(null)
  const group1 = useRef(null)
  const group2 = useRef(null)
  const util = gsap.utils.selector(group1)
  const util2 = gsap.utils.selector(group2)
  useEffect(() => {
    gsap.to(title.current,{
      y:"0%",
      duration:0.7,
      ease:"power4.inOut",

    })
  })


  useEffect(() => {
     gsap.fromTo(util('.card'),{
      yPercent:100
     },{
      yPercent:0,
      duration:0.7,
      ease:"power4.inOut",
      stagger:0.3,
      delay:0.3
     })
  })
  useEffect(() => {
    gsap.fromTo(util2('.card'),{
     yPercent:-100
    },{
     yPercent:0,
     duration:0.7,
     ease:"power4.inOut",
     stagger:0.3,
    })
 })

  return (
    <div className='overflow-hidden'>
      <div className='overflow-hidden bg-slate-200 mt-6 ml-6'>
        <h1 className='text-3xl font-bold tracking-wider translate-y-full' ref={title}>my projects.</h1>
      </div>
      <div className="flex flex-col h-[90vh] space-y-5 w-full py-6 justify-center items-center">
        <div className="flex flex-wrap space-x-4 ml-44 justify-start bg-slate-200 h-fit p-2 overflow-hidden" ref={group1}>
          <Card imgsrc={mylib} cname="card"  title="My Lib" desc="Library app using flutter (UI Only)"/>
          <Card imgsrc={myschool} cname="card"  title="My School" desc="Dashboard School app using React.Js(UI only)"/>
          {/* <Card imgsrc={"https://picsum.photos/200"} cname="card"  title="my first project" desc="lorem ipsum"/> */}
        </div>
        <div className="flex flex-wrap pr-30 space-x-4 mx-32 overflow-hidden bg-slate-200" ref={group2}>
          <Card imgsrc={doit} cname="card"  title="Do It!" desc="Todo App using flutter (without Backend)"/>
          <Card imgsrc={rantangan} cname="card"  title="Rantangan" desc="static web page using html & css"/>
          {/* <Card imgsrc={"https://picsum.photos/200"} cname="card"  title="my first project" desc="lorem ipsum"/> */}
        </div>
      </div>
    </div>
  )
}

export default Projects
