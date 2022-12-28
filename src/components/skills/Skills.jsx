import React from "react";
import { Element } from "react-scroll";
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiVisualstudiocode,
  SiChakraui,
  SiBootstrap,
  SiAntdesign,
  SiFirebase,
} from "react-icons/si";
import ScrollAnimation from "react-animate-on-scroll";

const SkillCard = ({ title, desc, rating, icon, animateIn, animateOut }) => {
  const Desc = desc.split("/");
  return (
    <div>
      <ScrollAnimation animateIn={animateIn} animateOut={animateOut}>
        <div className="skill_card pb-14">
          <div>{icon}</div>
          <div className="flex flex-col justify-center">
            {/* title */}
            <p className="text-xl font-medium text-center">{title}</p>
            {/* description */}
            {Desc.map((item, index) => {
              return <p key={index}>• {item}</p>;
            })}
            {/* rating */}
            <div className="min-w-full flex justify-center items-center">
              <div className="pt-5">
                <span className="text-white absolute left-[50%] z-1 filter saturate-0">
                  ⭐⭐⭐⭐⭐
                </span>
                <span className="text-yellow-500 absolute left-[50%] z-2">
                  {rating === "1" ? "⭐" : null}
                  {rating === "2" ? "⭐⭐" : null}
                  {rating === "3" ? "⭐⭐⭐" : null}
                  {rating === "4" ? "⭐⭐⭐⭐" : null}
                  {rating === "5" ? "⭐⭐⭐⭐⭐" : null}
                </span>
              </div>
            </div>
          </div>
        </div>
      </ScrollAnimation>
    </div>
  );
};

const Section = () => {
  return (
    <Element name="skill" className="element overflow-hidden pb-10">
      <ScrollAnimation animateIn="bounceInRight" animateOut="bounceOutLeft">
        <h1 className="text-center py-10 text-4xl font-medium">SKILLS</h1>
      </ScrollAnimation>
      {/* Cards */}
      <div className="grid lg:grid-cols-2 gap-10 w-full px-5 md:px-[100px]">
        <SkillCard
          title="HTML"
          desc={`The standard markup language for Web pages./HTML is easy to learn - You will enjoy it!/It defines structure of web content.`}
          rating="5"
          icon={<SiHtml5 size={100} color="#e2e2e2" />}
          animateIn="bounceInLeft"
          animateOut="fadeOut"
        />
        <SkillCard
          title="CSS"
          desc={`The language we use to style HTML document./A simple mechanism for adding style./e.g. fonts, colors, spacing, etc.`}
          rating="4"
          icon={<SiCss3 size={100} color="#e2e2e2" />}
          animateIn="bounceInRight"
          animateOut="fadeOut"
        />
        <SkillCard
          title="Tailwind CSS"
          desc={`Tailwind CSS is a utility-first CSS framework./rapidly building custom user interfaces./Most Popular Framework.`}
          rating="4"
          icon={<SiTailwindcss size={100} color="#e2e2e2" />}
          animateIn="bounceInLeft"
          animateOut="fadeOut"
        />
        <SkillCard
          title="JAVASCRIPT"
          desc={`The most popular programming language./Just-in-time compiled programming language with first-class functions.`}
          rating="2"
          icon={<SiJavascript size={100} color="#e2e2e2" />}
          animateIn="bounceInRight"
          animateOut="fadeOut"
        />
        <SkillCard
          title="React-JS"
          desc={`A JavaScript library for building user interfaces./To build single-page applications./To create reusable UI components.`}
          rating="3"
          icon={<SiReact size={100} color="#e2e2e2" />}
          animateIn="bounceInLeft"
          animateOut="fadeOut"
        />
        <SkillCard
          title="Next-JS"
          desc={`Next is a React framework./It provides Server-side Rendering/Image and font optimization.`}
          rating="3"
          icon={<SiNextdotjs size={100} color="#e2e2e2" />}
          animateIn="bounceInRight"
          animateOut="fadeOut"
        />
        <SkillCard
          title="VS CODE"
          desc={`A powerful, lightweight free code editor/Provides local emulators and extensions to build, run, and debug cloud apps directly from editor`}
          rating="4"
          icon={<SiVisualstudiocode size={100} color="#e2e2e2" />}
          animateIn="bounceInLeft"
          animateOut="fadeOut"
        />
        <SkillCard
          title="Next-JS"
          desc={`Next is a React framework./It provides Server-side Rendering/Image and font optimization.`}
          rating="3"
          icon={<SiNextdotjs size={100} color="#e2e2e2" />}
          animateIn="bounceInRight"
          animateOut="fadeOut"
        />
        <SkillCard
          title="CHAKRA UI"
          desc={`A simple, modular and accessible component library./Gives the building blocks need to build Webapp.`}
          rating="3"
          icon={<SiChakraui size={100} color="#e2e2e2" />}
          animateIn="bounceInLeft"
          animateOut="fadeOut"
        />
        <SkillCard
          title="ANT DESIGN"
          desc={`A design system for enterprise-level products./Create an efficient and enjoyable work experience.`}
          rating="2"
          icon={<SiAntdesign size={100} color="#e2e2e2" />}
          animateIn="bounceInRight"
          animateOut="fadeOut"
        />
        <SkillCard
          title="BOOTSTRAP"
          desc={`The most popular CSS, and JavaScript framework for
          developing responsive, mobile-first websites./Bootstrap is completely free to use!`}
          rating="2"
          icon={<SiBootstrap size={100} color="#e2e2e2" />}
          animateIn="bounceInLeft"
          animateOut="fadeOut"
        />
        <SkillCard
          title="Firebase"
          desc={`Provides tools to grow your app and business/Get your app up and running quickly & securely with fully managed backend infrastructure./Boost App Engagement.)`}
          rating="2"
          icon={<SiFirebase size={100} color="#e2e2e2" />}
          animateIn="bounceInRight"
          animateOut="fadeOut"
        />
      </div>
    </Element>
  );
};

export default Section;
