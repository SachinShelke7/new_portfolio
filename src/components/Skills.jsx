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
import ScrollAnimation from "react-animate-on-scroll";

const Section = () => {
  return (
    <Element name="skill" className="element overflow-hidden pb-10">
      <ScrollAnimation animateIn="bounceInRight" animateOut="bounceOutLeft">
        <h1 className="text-center py-10 text-4xl font-medium">SKILLS</h1>
      </ScrollAnimation>
      <div className="grid lg:grid-cols-2 gap-10 w-full px-5 md:px-[100px]">
        <ScrollAnimation animateIn="bounceInLeft" animateOut="fadeOut">
          <div className="skill_card">
            <div>
              <SiHtml5 size={100} color="#e2e2e2" />
            </div>
            <div className="flex flex-col justify-center items-center">
              <p className="text-xl font-medium text-center">HTML</p>
              <div>
                <p>• The standard markup language for Web pages.</p>{" "}
                <p>• HTML is easy to learn - You will enjoy it!</p>
                <p>• It defines structure of web content</p>
                <p className="text-yellow-500 text-center text-4xl">
                  ---<span className="text-white">--</span>
                </p>
              </div>
            </div>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="bounceInRight" animateOut="fadeOut">
          <div className="skill_card">
            <div>
              <SiCss3 size={100} color="#e2e2e2" />
            </div>
            <div className="flex flex-col justify-center items-center">
              <p className="text-xl font-medium text-center">CSS</p>
              <p>
                <p>• The language we use to style HTML document.</p>
                <p>• A simple mechanism for adding style.</p>
                <p>• e.g. fonts, colors, spacing, etc.</p>
                <p className="text-yellow-500 text-center text-4xl">
                  ---<span className="text-white">--</span>
                </p>
              </p>
            </div>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="bounceInLeft" animateOut="fadeOut">
          <div className="skill_card">
            <div>
              <SiJavascript size={100} color="#e2e2e2" />
            </div>
            <div className="flex flex-col justify-center items-center">
              <p className="text-xl font-medium text-center">JAVASCRIPT</p>
              <p>
                <p>• The most popular programming language.</p>{" "}
                <p>
                  • Just-in-time compiled programming language with first-class
                  functions.
                </p>
                <p className="text-yellow-500 text-center text-4xl">
                  ---<span className="text-white">--</span>
                </p>
              </p>
            </div>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="bounceInRight" animateOut="fadeOut">
          <div className="skill_card">
            <div>
              <SiReact size={100} color="#e2e2e2" />
            </div>
            <div className="flex flex-col justify-center items-center">
              <p className="text-xl font-medium text-center">React-JS</p>
              <p>
                <p>• A JavaScript library for building user interfaces.</p>{" "}
                <p>• To build single-page applications.</p>
                <p>• To create reusable UI components.</p>
                <p className="text-yellow-500 text-center text-4xl">
                  ---<span className="text-white">--</span>
                </p>
              </p>
            </div>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="bounceInLeft" animateOut="fadeOut">
          <div className="skill_card">
            <div>
              <SiNextdotjs size={100} color="#e2e2e2" />
            </div>
            <div className="flex flex-col justify-center items-center">
              <p className="text-xl font-medium text-center">Next-JS</p>
              <p>
                <p>• Next is a React framework.</p>
                <p>• It provides Server-side Rendering</p>
                <p>• Image and font optimization.</p>
                <p className="text-yellow-500 text-center text-4xl">
                  ---<span className="text-white">--</span>
                </p>
              </p>
            </div>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="bounceInRight" animateOut="fadeOut">
          <div className="skill_card">
            <div>
              <SiTailwindcss size={100} color="#e2e2e2" />
            </div>
            <div className="flex flex-col justify-center items-center">
              <p className="text-xl font-medium text-center">Tailwind CSS</p>
              <p>
                <p>• Tailwind CSS is a utility-first CSS framework.</p>
                <p>• rapidly building custom user interfaces.</p>
                <p>• Most Popular Framework.</p>
                <p className="text-yellow-500 text-center text-4xl">
                  ---<span className="text-white">--</span>
                </p>
              </p>
            </div>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="bounceInLeft" animateOut="fadeOut">
          <div className="skill_card">
            <div>
              <SiVisualstudiocode size={100} color="#e2e2e2" />
            </div>
            <div className="flex flex-col justify-center items-center">
              <p className="text-xl font-medium text-center">VS CODE</p>
              <p>
                <p>• A powerful, lightweight free code editor</p>
                <p>
                  • Provides local emulators and extensions to build, run, and
                  debug cloud apps directly from editor
                </p>
                <p className="text-yellow-500 text-center text-4xl">
                  ---<span className="text-white">--</span>
                </p>
              </p>
            </div>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="bounceInRight" animateOut="fadeOut">
          <div className="skill_card">
            <div>
              <SiChakraui size={100} color="#e2e2e2" />
            </div>
            <div className="flex flex-col justify-center items-center">
              <p className="text-xl font-medium  text-center">CHAKRA UI</p>
              <p>
                <p>• A simple, modular and accessible component library.</p>
                <p>• Gives the building blocks need to build Webapp.</p>
                <p className="text-yellow-500 text-center text-4xl">
                  ---<span className="text-white">--</span>
                </p>
              </p>
            </div>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="bounceInLeft" animateOut="fadeOut">
          <div className="skill_card">
            <div>
              <SiBootstrap size={100} color="#e2e2e2" />
            </div>
            <div className="flex flex-col justify-center items-center">
              <p className="text-xl font-medium text-center">BOOTSTRAP</p>
              <p>
                <p>
                  • The most popular CSS, and JavaScript framework for
                  developing responsive, mobile-first websites.
                </p>
                <p>• Bootstrap is completely free to use!</p>
                <p className="text-yellow-500 text-center text-4xl">
                  ---<span className="text-white">--</span>
                </p>
              </p>
            </div>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="bounceInRight" animateOut="fadeOut">
          <div className="skill_card">
            <div>
              <SiAntdesign size={100} color="#e2e2e2" />
            </div>
            <div className="flex flex-col justify-center items-center">
              <p className="text-xl font-medium text-center">ANT DESIGN</p>
              <p>
                <p>• A design system for enterprise-level products.</p>
                <p>• Create an efficient and enjoyable work experience.</p>
                <p className="text-yellow-500 text-center text-4xl">
                  ---<span className="text-white">--</span>
                </p>
              </p>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </Element>
  );
};

export default Section;
