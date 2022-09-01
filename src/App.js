import {  NavLink, Route, Routes, useLocation } from "react-router-dom";
import { Fragment, useEffect, useRef, useState } from "react";
import Home from "./pages/Home";
import gsap from "gsap";
import Projects from "./pages/Projects";
import About from "./pages/About";
import NotFound from "./pages/404";


function App() {
  const location = useLocation()
  // gsap
  const button = useRef(null)
  const hover = useRef(null)

  document.body.addEventListener("mousemove",e => {
    const x = e.clientX
    const y = e.clientY

    gsap.to(hover.current,{
      x:x,
      y:y,
      stagger:-0.1
    })
  })

  useEffect(() => {
    gsap.to(button.current,{
      duration:0.7,
      y:"0%",
      ease:"power4.inOut",
      delay:0.4,
    })
  })

  const select = useRef()
  const nav = gsap.utils.selector(select)

  useEffect(() => {
    gsap.to(nav(".nav") , {
      x:"0%",
      ease:"power4.inOut",
      delay:0.6,
      duration:0.7,
      stagger:0.02
    })
  })

  const [color,changeColor] = useState((location.pathname === '/about') ? false : true)

  const initialColor = "text-black hover:bg-black hover:text-white"
  const afterColor = "text-white hover:bg-white hover:text-black"
  const initialClass = "nav rotate-90 translate-x-full h-fit text-xs  py-2"

  // gsap
  return (
    <div className="h-screen w-screen bg-slate-200 overflow-x-hidden">
      {/* <div className="hidden cursor md:fixed md:h-6 md:w-6 mix-blend-multiply md:flex bg-slate-400 sm:p-0 z-50 rounded-full " ref={hover}>
      </div> */}
      {/* nav button */}
      <div className="ml-auto absolute right-0 top-0 overflow-hidden">
        <div className="relative py-10 pr-0 h-[50vh] flex flex-col space-y-3  justify-between" ref={select}>
          <div className={ color ? initialClass +" "+initialColor : initialClass + " " + afterColor }>
            <NavLink to="/" className='px-8 py-2' onClick={() => changeColor(true)}>Home</NavLink>
          </div>
          <div className={ color ? initialClass +" "+initialColor : initialClass + " " + afterColor }>
            <NavLink to="/projects" className="px-8 py-2" onClick={() => changeColor(true)}>Project</NavLink>
          </div>
          <div className={ color ? initialClass +" "+initialColor : initialClass + " " + afterColor }>
            <NavLink to="/about" className="px-8 py-2" onClick={() => changeColor(false)}>About</NavLink>
          </div>
        </div>
      </div>
      {/* navigation */}
      <Routes>
        <Route path="/" element={
          <Fragment>
            <Home />
          </Fragment>
        }/>
        <Route path="/projects" element={
          <Fragment>
            <Projects />
          </Fragment>
        } />
        <Route path="/about" element={
          <Fragment>
            <About />
          </Fragment>
        } />
        <Route path="*" element={
          <Fragment>
            <NotFound />
          </Fragment>
        }/>
      </Routes>
    </div>
  );
}

export default App;
