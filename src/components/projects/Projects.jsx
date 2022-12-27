import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { SiElectron } from "react-icons/si";
import { Element } from "react-scroll";
import "../styles/animation.css";
import amazon from "../../assets/images/project/amazon.jpg";
import dreamhome from "../../assets/images/project/dreamhome.jpg";
import fb from "../../assets/images/project/fb.jpg";
import hulu from "../../assets/images/project/hulu.jpg";
import blog from "../../assets/images/project/blog.jpg";
import modern from "../../assets/images/project/modern.jpg";
import calc from "../../assets/images/project/calc.jpg";
import google from "../../assets/images/project/google.jpg";
import old from "../../assets/images/project/old.jpg";
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiFirebase,
  SiChakraui,
  SiVercel,
  SiGraphql,
  SiGoogle,
} from "react-icons/si";

const Projects = () => {
  return (
    <Element
      name="projects"
      className="element flex flex-col gap-5 py-10 overflow-hidden project"
    >
      <ScrollAnimation animateIn="bounceInRight" animateOut="bounceOutLeft">
        <h1 className="text-center py-10 text-4xl font-medium">PROJECTS</h1>
      </ScrollAnimation>
      <div className="grid md:grid-cols-3 gap-20 mx-5 md:mx-[100px]">
        <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
          <div className="p-5 sachin -my-5 rounded-md">
            <div className="overflow-hidden rounded-md">
              <img src={amazon} alt="amazon" loading="lazy" />
            </div>
            <div className="flex space-x-2 items-center text-2xl font-medium pb-2">
              <SiElectron />
              <p className="py-2">Amazon Clone</p>
            </div>
            <div className="flex w-full gap-5">
              <SiHtml5 size="30px" />
              <SiReact size="30px" />
              <SiTailwindcss size="30px" />
              <SiVercel size="30px" />
            </div>
            <a
              href="https://e-com-feature.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              <button className="btn_download px-4 py-2 rounded-md mr-5 my-5">
                Live Preview
              </button>
            </a>
            <a
              href="https://github.com/SachinShelke7/Amazon-Feature-clone"
              target="_blank"
              rel="noreferrer"
            >
              <button className="btn_download px-4 py-2 rounded-md">
                Source Code
              </button>
            </a>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
          <div className="p-5 sachin -my-5 rounded-md">
            <div className="overflow-hidden rounded-md">
              <img src={dreamhome} alt="dreamhome" loading="lazy" />
            </div>
            <div className="flex space-x-2 items-center text-2xl font-medium pb-2">
              <SiElectron />
              <p className="py-2">
                Dream Home <span className="text-xs">Real Estate</span>{" "}
              </p>
            </div>
            <div className="flex w-full gap-5">
              <SiHtml5 size="30px" />
              <SiNextdotjs size="30px" />
              <SiChakraui size="30px" />
              <SiVercel size="30px" />
            </div>
            <a
              href="https://dream-home.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              <button className="btn_download px-4 py-2 rounded-md mr-5 my-5">
                Live Preview
              </button>
            </a>
            <a
              href="https://github.com/SachinShelke7/DreamHome_NextJS"
              target="_blank"
              rel="noreferrer"
            >
              <button className="btn_download px-4 py-2 rounded-md">
                Source Code
              </button>
            </a>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
          <div className="p-5 sachin -my-5 rounded-md">
            <div className="overflow-hidden rounded-md">
              <img src={modern} alt="modern" loading="lazy" />
            </div>
            <div className="flex space-x-2 items-center text-2xl font-medium pb-2">
              <SiElectron />
              <p className="py-2">Modern GPT-3 UI</p>
            </div>
            <div className="flex w-full gap-5">
              <SiHtml5 size="30px" />
              <SiCss3 size="30px" />
              <SiReact size="30px" />
              <SiVercel size="30px" />
            </div>
            <a
              href="https://modern-gpt-ui.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              <button className="btn_download px-4 py-2 rounded-md mr-5 my-5">
                Live Preview
              </button>
            </a>
            <a
              href="https://github.com/SachinShelke7/Modern_GPT-ui"
              target="_blank"
              rel="noreferrer"
            >
              <button className="btn_download px-4 py-2 rounded-md">
                Source Code
              </button>
            </a>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
          <div className="p-5 sachin -my-5 rounded-md">
            <div className="overflow-hidden rounded-md">
              <img src={blog} alt="blog" loading="lazy" />
            </div>
            <div className="flex space-x-2 items-center text-2xl font-medium pb-2">
              <SiElectron />
              <p className="py-2">Dev's Blog</p>
            </div>
            <div className="flex w-full gap-5">
              <SiHtml5 size="30px" />
              <SiNextdotjs size="30px" />
              <SiGraphql size="30px" />
              <SiVercel size="30px" />
            </div>
            <a
              href="https://blog-app-navy.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              <button className="btn_download px-4 py-2 rounded-md mr-5 my-5">
                Live Preview
              </button>
            </a>
            <a
              href="https://github.com/SachinShelke7/Modern_Blog-App"
              target="_blank"
              rel="noreferrer"
            >
              <button className="btn_download px-4 py-2 rounded-md">
                Source Code
              </button>
            </a>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
          <div className="p-5 sachin -my-5 rounded-md">
            <div className="overflow-hidden rounded-md">
              <img src={hulu} alt="hulu" loading="lazy" />
            </div>
            <div className="flex space-x-2 items-center text-2xl font-medium pb-2">
              <SiElectron />
              <p className="py-2">Hulu Clone</p>
            </div>
            <div className="flex w-full gap-5">
              <SiHtml5 size="30px" />
              <SiTailwindcss size="30px" />
              <SiNextdotjs size="30px" />
              <SiVercel size="30px" />
            </div>
            <a
              href="https://hulu2-0-rosy.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              <button className="btn_download px-4 py-2 rounded-md mr-5 my-5">
                Live Preview
              </button>
            </a>
            <a
              href="https://github.com/SachinShelke7/Hulu2.0"
              target="_blank"
              rel="noreferrer"
            >
              <button className="btn_download px-4 py-2 rounded-md">
                Source Code
              </button>
            </a>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
          <div className="p-5 sachin -my-5 rounded-md">
            <div className="overflow-hidden rounded-md">
              <img src={fb} alt="fb" loading="lazy" />
            </div>
            <div className="flex space-x-2 items-center text-2xl font-medium pb-2">
              <SiElectron />
              <p className="py-2">Facebook Clone</p>
            </div>
            <div className="flex w-full gap-5">
              <SiHtml5 size="30px" />
              <SiReact size="30px" />
              <SiFirebase size="30px" />
              <SiTailwindcss size="30px" />
              <SiVercel size="30px" />
            </div>
            <a
              href="https://facebook-clone-psi-seven.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              <button className="btn_download px-4 py-2 rounded-md mr-5 my-5">
                Live Preview
              </button>
            </a>
            <a
              href="https://github.com/SachinShelke7/Facebook-Clone"
              target="_blank"
              rel="noreferrer"
            >
              <button className="btn_download px-4 py-2 rounded-md">
                Source Code
              </button>
            </a>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
          <div className="p-5 sachin -my-5 rounded-md">
            <div className="overflow-hidden rounded-md">
              <img src={google} alt="google" loading="lazy" />
            </div>
            <div className="flex space-x-2 items-center text-2xl font-medium pb-2">
              <SiElectron />
              <p className="py-2">Google Search Clone</p>
            </div>
            <div className="flex w-full gap-5">
              <SiHtml5 size="30px" />
              <SiReact size="30px" />
              <SiTailwindcss size="30px" />
              <SiGoogle size="30px" />
              <SiVercel size="30px" />
            </div>
            <a
              href="https://google2-0-tan.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              <button className="btn_download px-4 py-2 rounded-md mr-5 my-5">
                Live Preview
              </button>
            </a>
            <a
              href="https://github.com/SachinShelke7/Google2.0"
              target="_blank"
              rel="noreferrer"
            >
              <button className="btn_download px-4 py-2 rounded-md">
                Source Code
              </button>
            </a>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
          <div className="p-5 sachin -my-5 rounded-md">
            <div className="overflow-hidden rounded-md">
              <img src={calc} alt="calc" loading="lazy" />
            </div>
            <div className="flex space-x-2 items-center text-2xl font-medium pb-2">
              <SiElectron />
              <p className="py-2">Calculator</p>
            </div>
            <div className="flex w-full gap-5">
              <SiHtml5 size="30px" />
              <SiJavascript size="30px" />
              <SiTailwindcss size="30px" />
              <SiVercel size="30px" />
            </div>
            <a
              href="https://oibsip.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              <button className="btn_download px-4 py-2 rounded-md mr-5 my-5">
                Live Preview
              </button>
            </a>

            <a
              href="https://github.com/SachinShelke7/OIBSIP_LVL2-TASK1"
              target="_blank"
              rel="noreferrer"
            >
              <button className="btn_download px-4 py-2 rounded-md">
                Source Code
              </button>
            </a>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
          <div className="p-5 sachin -my-5 rounded-md">
            <div className="overflow-hidden rounded-md">
              <img src={old} alt="old" loading="lazy" />
            </div>
            <div className="flex space-x-2 items-center text-2xl font-medium pb-2">
              <SiElectron />
              <p className="py-2">Old Portfolio</p>
            </div>
            <div className="flex w-full gap-5">
              <SiHtml5 size="30px" />
              <SiTailwindcss size="30px" />
              <SiVercel size="30px" />
            </div>
            <a
              href="https://dev-s-portfolio.vercel.app"
              target="_blank"
              rel="noreferrer"
            >
              <button className="btn_download px-4 py-2 rounded-md mr-5 my-5">
                Live Preview
              </button>
            </a>
            <a
              href="https://github.com/SachinShelke7/Dev-s_Portfolio"
              target="_blank"
              rel="noreferrer"
            >
              <button className="btn_download px-4 py-2 rounded-md">
                Source Code
              </button>
            </a>
          </div>
        </ScrollAnimation>
      </div>
      <div className="w-full flex justify-end">
        <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
          <a
            href="http://github.com/sachinshelke7"
            target="_blank"
            rel="noreferrer"
          >
            <button className="btn_download px-4 py-2 rounded-md mt-20 mx-5 md:mx-[100px]">
              More Projects
            </button>
          </a>
        </ScrollAnimation>
      </div>
    </Element>
  );
};

export default Projects;
