import React from "react";
import profile from "../../assets/images/SACHIN.jpg";
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
  const FadeUp = batch(Fade(), Move());

  return (
    <div className="text-white text-center">
      <ScrollContainer>
        <ScrollPage page={0}>
          <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
            <div
              style={{ fontSize: "30px" }}
              className="w-full flex justify-center items-center flex-col bg-transparent"
            >
              <div className="w-full flex justify-center items-center flex-col">
                <img src={profile} alt="" className="rounded-full w-32 h-32" />
                {/* <div className="rounded-full w-32 h-32 bg-white p-20" /> */}
                <h4 className="whitespace-nowrap py-2">I'm Sachin Shelke</h4>
                <p className="text-[0.9rem]">React Frontend Developer</p>
              </div>
              <div className="animate-arrow">
                <FcDown />
              </div>{" "}
            </div>
          </Animator>
        </ScrollPage>
        <ScrollPage page={1}>
          <Animator animation={ZoomInScrollOut}>
            <span className="text-[20px] lg:text-[40px] whitespace-nowrap">
              Lets Get into Portfolio
            </span>
          </Animator>
        </ScrollPage>
      </ScrollContainer>
    </div>
  );
};

export default Intro;
