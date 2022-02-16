import React from 'react'
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, Move, MoveOut, Sticky, StickyIn, ZoomIn } from "react-scroll-motion";
import { FcDown } from "react-icons/fc";

const Intro = () => {
    const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
const FadeUp = batch(Fade(), Move(), Sticky());

  return (
<div className='bg-[#191919] text-white'>
<ScrollContainer>
  <ScrollPage page={0}>
    <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
      <span style={{ fontSize: "30px" }}> <div className='animate-bounce'><FcDown /></div> </span>
    </Animator>
  </ScrollPage>
  <ScrollPage page={1}>
    <Animator animation={ZoomInScrollOut}>
      <span style={{ fontSize: "40px" }}>I'm Sachin Shelke</span>
    </Animator>
  </ScrollPage>
  <ScrollPage page={2}>
    <Animator animation={FadeUp}>
      <span style={{ fontSize: "40px" }}>Lets Get into Protfolio</span>
      <br/>
      <span style={{ fontSize: "29px" }}>
        Visit Github For More Projects
      </span>
    </Animator>
  </ScrollPage>
</ScrollContainer>
<div className='py-[20%]'></div>
</div>
  )
}

export default Intro