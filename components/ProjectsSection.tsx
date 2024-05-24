import React from "react"
import Image from "next/image"
import Link from "next/link"
import SlideUp from "./SlideUp"
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"

const projects = [
  {
    name: "LLM Building Code Expert",
    description:
      "DollyExpertBuilder is an LLM assistant capable of domain-specific Question Answering by Retrieval using a custom Vector Database based on the XML sitemap of the Ontario Building Code.",
    image: "/dolly.png",
    github: "https://github.com/salgadev/dolly-expert-lite",
    link: "https://huggingface.co/spaces/salgadev/dolly-expert-builder",
  },
  {
    name: "Automatic Beverage Inspection",
    description: "SpiritVision is a multi-class image classifier capable of recognizing methanol spikes in mezcal drops. Trained with Transfer Learning using Pytorch and image processing with OpenCV.",
    image: "/spiritvision.png",
    github: "https://github.com/salgadev/spiritvision",
    link: "https://huggingface.co/spaces/salgadev/spiritvision-demo",
  },
  {
    name: "Image-based Surgical Planning Tool for Bone Conduction Devices",
    description:
      "Developed and validated a computer vision algorithm to aid in surgical planning of bone conduction devices by ray-tracing and segmentation of clinical CT images of the skull.",
    image: "/figures.webp",
    github: "",
    link: "https://www.cell.com/heliyon/fulltext/S2405-8440%2824%2903467-4",
  },
  {
    name: "Secure Multiparty Computation Course Development",
    description:
      "Developed course materials on Additive Secret Sharing and Beaver Triplets (Private Matrix multiplication) cryptography concepts and Python algorithm implementations and use cases of the PySyft library.",
    image: "/secret-sharing.jpg",
    github: "https://github.com/OpenMined/courses/blob/foundations-of-private-computation/secure-mpc/Additive%20Secret%20Sharing.ipynb",
    link: "https://courses.openmined.org/courses/foundations-of-private-computation",
  },
  {
    name: "AWS Geospatial Flask App",
    description:
      "A Web App displaying hospital bed availability in the USA originally deployed on AWS using a S3 hosted dataset, an EC2 instance and Elastic Beanstalk.",
    image: "/beds.png",
    github: "https://github.com/salgadev/hospital-beds",
    link: "",
  },
]

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28 ">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className=" md:w-1/2">
                    <Link href={project.link}>
                      <Image
                        src={project.image}
                        alt=""
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link>
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      <Link href={project.github} target="_blank">
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                      <Link href={project.link} target="_blank">
                        <BsArrowUpRightSquare
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          )
        })}
        
      </div>
    </section>
  )
}

export default ProjectsSection
