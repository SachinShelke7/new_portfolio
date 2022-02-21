import React from "react";
// import profile from "../assets/images/SACHIN.jpg";
import {
  Animator,
  ScrollContainer,
  ScrollPage,
  batch,
  Fade,
  FadeIn,
  Move,
  MoveOut,
  Sticky,
  StickyIn,
  ZoomIn,
} from "react-scroll-motion";
import { FcDown } from "react-icons/fc";

const Intro = () => {
  const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
  const FadeUp = batch(Fade(), Move(), Sticky());

  return (
    <div className="bg-[#191919] text-white text-center">
      <ScrollContainer>
        <ScrollPage page={0}>
          <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
            <div
              style={{ fontSize: "30px" }}
              className="w-full flex justify-center items-center flex-col"
            >
              <div className="w-full flex justify-center items-center flex-col">
                {/* <img src={profile} alt="" className="rounded-full w-32 h-32" /> */}
                <div className="rounded-full w-32 h-32 bg-white p-20" />
                <h4>I'm Sachin Shelke</h4>
                <p className="text-[15px]">React Frontend Developer</p>
              </div>
              <div className="animate-bounce pt-5">
                <FcDown />
              </div>{" "}
            </div>
          </Animator>
        </ScrollPage>
        <ScrollPage page={1}>
          <Animator animation={ZoomInScrollOut}>
            <span style={{ fontSize: "40px" }}>Lets Get into Protfolio</span>
          </Animator>
        </ScrollPage>
        <ScrollPage page={2}>
          <Animator animation={FadeUp}>
            <span style={{ fontSize: "29px" }}>
              Visit Github For More Projects
            </span>
          </Animator>
        </ScrollPage>
      </ScrollContainer>
      <div className="py-[20%]"></div>
    </div>
  );
};

export default Intro;
