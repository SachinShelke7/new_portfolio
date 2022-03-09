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
      <div className="grid lg:grid-cols-2 gap-10 w-full px-5 md:px-[100px]">
        <ScrollAnimation animateIn="bounceInLeft" animateOut="fadeOut">
          <div className="skill_card">
            <div>
              <SiHtml5 size={100} color="#e2e2e2" />
              <p className="text-xl font-medium py-2 text-center">HTML</p>
            </div>
            <div className="flex flex-col space-y-10 justify-center items-center">
              Detail
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Officiis delectus veniam numquam beatae qui corrupti
                praesentium.
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
              <SiCss3 size={100} color="#e2e2e2" />
              <p className="text-xl font-medium py-2 text-center">CSS</p>
            </div>
            <div className="flex flex-col space-y-10 justify-center items-center">
              Detail
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Officiis delectus veniam numquam beatae qui corrupti
                praesentium.
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
              <p className="text-xl font-medium py-2 text-center">JAVASCRIPT</p>
            </div>
            <div className="flex flex-col space-y-10 justify-center items-center">
              Detail
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Officiis delectus veniam numquam beatae qui corrupti
                praesentium.
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
              <p className="text-xl font-medium py-2 text-center">React-JS</p>
            </div>
            <div className="flex flex-col space-y-10 justify-center items-center">
              Detail
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Officiis delectus veniam numquam beatae qui corrupti
                praesentium.
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
              <p className="text-xl font-medium py-2 text-center">Next-JS</p>
            </div>
            <div className="flex flex-col space-y-10 justify-center items-center">
              Detail
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Officiis delectus veniam numquam beatae qui corrupti
                praesentium.
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
              <p className="text-xl truncate font-medium py-2 text-center">
                Tailwind CSS
              </p>
            </div>
            <div className="flex flex-col space-y-10 justify-center items-center">
              Detail
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Officiis delectus veniam numquam beatae qui corrupti
                praesentium.
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
              <SiFirebase size={100} color="#e2e2e2" />
              <p className="text-xl font-medium py-2 text-center">FIREBASE</p>
            </div>
            <div className="flex flex-col space-y-10 justify-center items-center">
              Detail
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Officiis delectus veniam numquam beatae qui corrupti
                praesentium.
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
              <SiVisualstudiocode size={100} color="#e2e2e2" />
              <p className="text-xl font-medium py-2 text-center">VS CODE</p>
            </div>
            <div className="flex flex-col space-y-10 justify-center items-center">
              Detail
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Officiis delectus veniam numquam beatae qui corrupti
                praesentium.
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
              <SiChakraui size={100} color="#e2e2e2" />
              <p className="text-xl font-medium py-2 text-center truncate">
                CHAKRA UI
              </p>
            </div>
            <div className="flex flex-col space-y-10 justify-center items-center">
              Detail
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Officiis delectus veniam numquam beatae qui corrupti
                praesentium.
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
              <SiBootstrap size={100} color="#e2e2e2" />
              <p className="text-xl font-medium py-2 text-center">BOOTSTRAP</p>
            </div>
            <div className="flex flex-col space-y-10 justify-center items-center">
              Detail
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Officiis delectus veniam numquam beatae qui corrupti
                praesentium.
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
              <SiAntdesign size={100} color="#e2e2e2" />
              <p className="text-xl font-medium py-2 text-center truncate">
                ANT DESIGN
              </p>
            </div>
            <div className="flex flex-col space-y-10 justify-center items-center">
              Detail
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Officiis delectus veniam numquam beatae qui corrupti
                praesentium.
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
