import React from "react";
import { Element } from "react-scroll";
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiFirebase,
  SiVisualstudiocode,
  SiChakraui,
  SiBootstrap,
  SiAntdesign,
} from "react-icons/si";

const Card = ({ name, detail, Icon }) => {
  return (
    <div className="relative flex justify-center w-full cursor-pointer">
      <div>
        <div className="w-[300px] h-[400px] p-[20px] rounded-md transform transition-all duration-[500ms] sachin hover:scale-105">
          <h1 className="text-base font-medium text-center text-orange-500">
            {name}
          </h1>

          <div>
            <div className="flex w-full justify-center transform transition-all duration-1000 py-1">
              {Icon}
            </div>
            <p>{detail}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
const Section = () => {
  return (
    <Element name="skill" className="element">
      <div className="flex flex-col md:flex-row space-y-20 md:space-y-0 md:space-x-20 p-20">
        <Card
          name="REACT-JS"
          detail="React is a Frontend JavaScript UI library. Facebook and
              open-source developer community run it. React is widely used in
              web development. The library first appeared in May 2013 and is now
              one of the most commonly used frontend libraries for web
              development."
          Icon={<SiReact size={100} color="#e2e2e2" />}
        />
        <Card
          name="NEXT-JS"
          detail="Next.js is an open-source development framework built on top of
              Node.js enabling React based web applications functionalities such
              as server-side rendering and generating static websites.Next.js
              was first released as an open-source project on GitHub on October
              25, 2016."
          Icon={<SiNextdotjs size={100} color="#e2e2e2" />}
        />
        <Card
          name="TAILWIND CSS"
          detail="Tailwind CSS is basically a utility-first CSS framework for
              rapidly building custom user interfaces. It is a highly
              customizable, low-level CSS framework that gives you all of the
              building blocks,build bespoke designs without any
              annoying opinionated styles you have to fight to override."
          Icon={<SiTailwindcss size={100} color="#e2e2e2" />}
        />
      </div>
      <div className="grid grid-cols-2 gap-10 w-full px-[100px]">
        <div className="skill_card">
          <div>
            <SiHtml5 size={100} color="#e2e2e2" />
            <p className="text-xl font-medium py-2 text-center">HTML</p>
          </div>
          <div className="flex flex-col space-y-10 justify-center items-center">
            Detail
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
              delectus veniam numquam beatae qui corrupti praesentium.
              <p className="text-yellow-500 text-center text-4xl">
                ---<span className="text-white">--</span>
              </p>
            </p>
          </div>
        </div>

        <div className="skill_card">
          <div>
            <SiCss3 size={100} color="#e2e2e2" />
            <p className="text-xl font-medium py-2 text-center">CSS</p>
          </div>
          <div className="flex flex-col space-y-10 justify-center items-center">
            Detail
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
              delectus veniam numquam beatae qui corrupti praesentium.
              <p className="text-yellow-500 text-center text-4xl">
                ---<span className="text-white">--</span>
              </p>
            </p>
          </div>
        </div>

        <div className="skill_card">
          <div>
            <SiJavascript size={100} color="#e2e2e2" />
            <p className="text-xl font-medium py-2 text-center">JAVASCRIPT</p>
          </div>
          <div className="flex flex-col space-y-10 justify-center items-center">
            Detail
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
              delectus veniam numquam beatae qui corrupti praesentium.
              <p className="text-yellow-500 text-center text-4xl">
                ---<span className="text-white">--</span>
              </p>
            </p>
          </div>
        </div>

        <div className="skill_card">
          <div>
            <SiFirebase size={100} color="#e2e2e2" />
            <p className="text-xl font-medium py-2 text-center">FIREBASE</p>
          </div>
          <div className="flex flex-col space-y-10 justify-center items-center">
            Detail
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
              delectus veniam numquam beatae qui corrupti praesentium.
              <p className="text-yellow-500 text-center text-4xl">
                ---<span className="text-white">--</span>
              </p>
            </p>
          </div>
        </div>

        <div className="skill_card">
          <div>
            <SiVisualstudiocode size={100} color="#e2e2e2" />
            <p className="text-xl font-medium py-2 text-center">VS CODE</p>
          </div>
          <div className="flex flex-col space-y-10 justify-center items-center">
            Detail
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
              delectus veniam numquam beatae qui corrupti praesentium.
              <p className="text-yellow-500 text-center text-4xl">
                ---<span className="text-white">--</span>
              </p>
            </p>
          </div>
        </div>

        <div className="skill_card">
          <div>
            <SiChakraui size={100} color="#e2e2e2" />
            <p className="text-xl font-medium py-2 text-center">CHAKRA UI</p>
          </div>
          <div className="flex flex-col space-y-10 justify-center items-center">
            Detail
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
              delectus veniam numquam beatae qui corrupti praesentium.
              <p className="text-yellow-500 text-center text-4xl">
                ---<span className="text-white">--</span>
              </p>
            </p>
          </div>
        </div>

        <div className="skill_card">
          <div>
            <SiBootstrap size={100} color="#e2e2e2" />
            <p className="text-xl font-medium py-2 text-center">BOOTSTRAP</p>
          </div>
          <div className="flex flex-col space-y-10 justify-center items-center">
            Detail
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
              delectus veniam numquam beatae qui corrupti praesentium.
              <p className="text-yellow-500 text-center text-4xl">
                ---<span className="text-white">--</span>
              </p>
            </p>
          </div>
        </div>

        <div className="skill_card">
          <div>
            <SiAntdesign size={100} color="#e2e2e2" />
            <p className="text-xl font-medium py-2 text-center">ANT DESIGN</p>
          </div>
          <div className="flex flex-col space-y-10 justify-center items-center">
            Detail
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
              delectus veniam numquam beatae qui corrupti praesentium.
              <p className="text-yellow-500 text-center text-4xl">
                ---<span className="text-white">--</span>
              </p>
            </p>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default Section;
