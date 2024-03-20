import React from "react"
import Image from "next/image"
import { Link } from "react-scroll/modules"
import { HiArrowDown } from "react-icons/hi"

const skills = [
  { skill: "Python" },
  { skill: "Nix" },
  { skill: "Tailwind CSS" },
  { skill: "HTML" },
  { skill: "JavaScript" },
  { skill: "Computer Vision" },
  { skill: "Git" },
  { skill: "Test Automation" },
  { skill: "Natural Language Processing"},
]

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Get to know me!
            </h1>
            <p>
              Hi, my name is Carlos and I am a{" "}
              <span className="font-bold">{"highly ambitious"}</span> and
              <span className="font-bold">{" self-motivated"}</span> software developer based in Kingston, Ontario.
            </p>
            <br />
            <p>
              I graduated from Western University with a Master&#39;s in Electrical and Computer engineering. I am passionate about turning concepts into reality and I leverage Artificial Intelligence, Signal Processing and QA Test Automation to architect <span className="font-bold text-latte-teal dark:text-ctp-teal">
                state-of-the-art
              </span>{" "}Minimum Viable Products (MVPs).
            </p>

            <br />
            <p>
              I am a {" "}
              <span className="font-bold text-latte-red dark:text-ctp-red">
                tinkerer
              </span>{" "}
              at heart and I find joy discovering new niches to dive into, from software development and test engineering to regulations, quality standards, and documentation. If any part of my background resonates with you, please feel free to connect. I am always open to discussing new opportunities. 🙂


            </p>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">My Skills</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-ctp-overlay2 px-4 py-2 mr-2 mt-2 text-ctp-crust rounded font-semibold dark:bg-ctp-surface2/[0.7] dark:text-ctp-blue"
                  >
                    {item.skill}
                  </p>
                )
              })}
            </div>
            <Image
              src="/hero-image.png"
              alt=""
              width={325}
              height={325}
              className="hidden md:block md:relative md:bottom-4 md:left-32 md:z-0"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
