"use client" // this is a client component
import React from "react"
import Image from "next/image"
import { Link } from "react-scroll/modules"
import { HiArrowDown } from "react-icons/hi"

const HeroSection = () => {
  return (
    <section id="home">
      <div className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-10 py-16 sm:py-32 md:py-48 md:flex-row md:space-x-4 md:text-left">
        <div className="md:mt-2 md:w-1/2">
          <Image
            src="/headshot.png"
            alt=""
            width={325}
            height={325}
            className="rounded-full shadow-2xl"
          />
        </div>
        <div className="md:mt-2 md:w-3/5">
          <h1 className="text-4xl font-bold mt-6 md:mt-0 md:text-7xl">Hi, I&#39;m Carlos!</h1>
          <p className="text-lg mt-4 mb-6 md:text-2xl">
            A seasoned{" "}
            <span className="font-semibold text-latte-green dark:text-ctp-green">
              Software Developer{" "}
            </span>
            based in Kingston, Ontario. I use my expertise in Artificial Intelligence, Signal Processing and QA Test Automation to turn ideas into MVPs.
          </p>
          <div className="flex space-x-4">
            <Link
              to="projects"
              className="font-semibold px-6 py-3 bg-ctp-blue hover:bg-ctp-sky rounded shadow dark:bg-ctp-sky dark:hover:bg-ctp-blue text-ctp-crust"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              Projects
            </Link>
            <a
              href="https://donate.stripe.com/14k6qc2kGdA78tG7ss"
              className="font-semibold px-6 py-3 bg-ctp-green hover:bg-ctp-yellow rounded shadow dark:bg-ctp-yellow dark:hover:bg-ctp-green text-ctp-crust"
              target="_blank"
              rel="noopener noreferrer"
            >
              Donate!
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center text-center justify-center ">
        <Link
          to="about"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <HiArrowDown size={35} className="animate-bounce" />
        </Link>
      </div>
    </section>
  )
}

export default HeroSection;