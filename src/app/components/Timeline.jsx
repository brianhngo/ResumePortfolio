"use client";
import React from "react";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Image from "next/image";

export default function Timeline() {
  return (
    <section className='flex flex-col items-center justify-center min-h-screen text-black py-8 px-4 mt-5'>
      <h1 className='text-center md:text-[3.75rem] text-[2.5rem] font-bold leading-none tracking-tight text-white'>
        My Professional Timeline
      </h1>
      <VerticalTimeline>
        <VerticalTimelineElement
          visible={true}
          className='vertical-timeline-element--work'
          date={<span style={{ color: "#fff" }}>Aug 2024 - Current</span>}
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={
            <div
              style={{
                position: "relative",
                width: "100%",
                height: "100%",
                borderRadius: "50%",
                overflow: "hidden",
              }}>
              <Image
                src='/others/abstruse1.jpeg'
                alt='Bootcamp'
                layout='fill'
                objectFit='cover' // Use cover to ensure the image covers the container
              />
            </div>
          }>
          <h3 className='vertical-timeline-element-title'>
            Software Developer
          </h3>
          <h4 className='vertical-timeline-element-subtitle rounded-full'>
            Abstruse
          </h4>
          <ul className='list-disc ml-6 space-y-2'>
            <li>
              Developed API routes with Node.js and JavaScript, integrating
              third-party services like SendGrid for automated email solutions.
            </li>
            <li>
              Designed and maintained RESTful APIs to optimize communication
              between the frontend and backend.
            </li>
            <li>
              Created and implemented new frontend features using React and
              Tailwind CSS, delivering dynamic and responsive user interfaces.
            </li>
            <li>
              Integrated backend services with frontend components, ensuring
              smooth data flow and real-time interactions for an enhanced user
              experience.
            </li>
            <li>
              Conducted comprehensive testing and debugging to optimize
              performance, security, and reliability across both frontend and
              backend systems.
            </li>
            <li>
              Developed unit tests for frontend and backend components using
              frameworks like Jest and Mocha, improving code quality and
              stability.
            </li>
          </ul>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          visible={true}
          className='vertical-timeline-element--work'
          date={<span style={{ color: "#fff" }}>Apr 2023 - Aug 2023</span>}
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={
            <div
              style={{
                position: "relative",
                width: "100%",
                height: "100%",
                borderRadius: "50%",
                overflow: "hidden",
              }}>
              <Image
                src='/others/fsa.png'
                alt='Bootcamp'
                layout='fill'
                objectFit='cover' // Use cover to ensure the image covers the container
              />
            </div>
          }>
          <h3 className='vertical-timeline-element-title'>
            Software Engineering & Web Development Bootcamp
          </h3>
          <h4 className='vertical-timeline-element-subtitle rounded-full'>
            Fullstack Academy
          </h4>
          <ul className='list-disc ml-6 space-y-2'>
            <li>
              Successfully completed rigorous 17-week immersive program tailored
              acquiring a comprehensive understanding of the PERN stack
              (PostgreSQL, Express, React, Node.js).
            </li>
            <li>
              Employed JavaScript to craft dynamic user interfaces, manipulate
              the DOM, and implement various front-end frameworks and libraries
              like React and Redux Toolkit.
            </li>
            <li>
              Successfully executed projects involving back-end development
              utilizing Node.js and Express.js, seamlessly integrating with
              PostgreSQL databases to construct scalable, efficient, and secure
              web applications.
            </li>
            <li>
              Effectively harnessed Git and GitHub for version control,
              collaborating with fellow developers on team projects.
              Demonstrated expertise in code change management, branching,
              merging, and facilitating code reviews.
            </li>
            <li>
              Proficiently applied Agile project management methodologies to
              efficiently plan, execute, and deliver projects, fostering
              collaboration, adaptability, and a continuous improvement approach
              within cross-functional teams.
            </li>
          </ul>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          visible={true}
          className='vertical-timeline-element--work'
          date={<span style={{ color: "#fff" }}>Apr 2023 - Aug 2023</span>}
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={
            <div
              style={{
                position: "relative",
                width: "100%",
                height: "100%",
                borderRadius: "50%",
                overflow: "hidden",
              }}>
              <Image
                src='/others/BioceptLogo.png'
                alt='Bootcamp'
                layout='fill'
                objectFit='cover' // Use cover to ensure the image covers the container
              />
            </div>
          }>
          <h3 className='vertical-timeline-element-title'>
            Associate R&D Engineer
          </h3>
          <h4 className='vertical-timeline-element-subtitle'>
            Biocept <br /> San Diego, CA
          </h4>
          <ul className='list-disc ml-6 space-y-2'>
            <li>
              Collaborated as a lead member of the team that spearheaded the
              successful development of a cutting-edge microfluidic device,
              contributing to its journey from concept to market launch for
              liquid biopsy.
            </li>
            <li>
              Designed and executed a cell-based assay tailored for commercial
              use, focusing on tumor cell enrichment and FISH analysis,
              elevating the company's product offerings and research
              capabilities.
            </li>
            <li>
              Played an integral role in optimizing manufacturing processes and
              enhancing quality control procedures, resulting in streamlined
              production and improved overall product quality.
            </li>
            <li>
              Achieved a significant 30% reduction in both processing time and
              costs for clinical commercial operations through process
              optimization and efficiency enhancements.
            </li>
          </ul>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          visible={true}
          className='vertical-timeline-element--work'
          date={<span style={{ color: "#fff" }}>Apr 2023 - Aug 2023</span>}
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={
            <div
              style={{
                position: "relative",
                width: "100%",
                height: "100%",
                borderRadius: "50%",
                overflow: "hidden",
              }}>
              <Image
                src='/others/BioceptLogo.png'
                alt='Bootcamp'
                layout='fill'
                objectFit='cover' // Use cover to ensure the image covers the container
              />
            </div>
          }>
          <h3 className='vertical-timeline-element-title'>
            Research Associate I, Technology Development
          </h3>
          <h4 className='vertical-timeline-element-subtitle'>
            Biocept <br /> San Diego, CA
          </h4>
          <ul className='list-disc ml-6 space-y-2'>
            <li>
              Partnered closely with external third-party companies to revamp
              and standardize company software contracts, resulting in optimized
              tumor cell detection capabilities and improved business
              partnerships.
            </li>
            <li>
              Facilitated seamless collaboration with department leaders,
              contributing to the successful execution of concurrent projects
              within the R&D domain.
            </li>
            <li>
              Orchestrated the creation of validation documentation tailored for
              Clinical Laboratory Improvement Amendments (CLIA) laboratory use,
              ensuring compliance with stringent quality and regulatory
              standards.
            </li>
            <li>
              Spearheaded maintenance, calibration, and inspection efforts
              across all laboratory machinery, ensuring optimal functionality
              and adherence to quality assurance protocols.
            </li>
            <li>
              Cultured cell lines for use in R&D activities, meticulously
              adhering to facility protocols and fostering the availability of
              critical resources for ongoing research initiatives.
            </li>
          </ul>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          visible={true}
          className='vertical-timeline-element--work'
          date={<span style={{ color: "#fff" }}>Apr 2023 - Aug 2023</span>}
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={
            <div
              style={{
                position: "relative",
                width: "100%",
                height: "100%",
                borderRadius: "50%",
                overflow: "hidden",
              }}>
              <Image
                src='/others/Biofluidica.png'
                alt='Bootcamp'
                layout='fill'
                objectFit='cover' // Use cover to ensure the image covers the container
              />
            </div>
          }>
          <h3 className='vertical-timeline-element-title'>
            Manufacturing Intern
          </h3>
          <h4 className='vertical-timeline-element-subtitle'>
            Biofluidica <br /> San Diego, CA
          </h4>
          <ul className='list-disc ml-6 space-y-2'>
            <li>
              Played a pivotal role in improving product quality by introducing
              a sterilization step into the manufacturing process, resulting in
              a notable 20% reduction in quality control rejection rates.
            </li>
            <li>
              Efficiently prepared and produced essential wash buffers and
              reagents for experimental procedures, contributing to the seamless
              execution of research activities.
            </li>
            <li>
              Demonstrated meticulous attention to detail by packaging,
              inventorying, and labeling crucial components such as microfluidic
              chips, blood sample kits, and plates.
            </li>
            <li>
              Met production goals by consistently manufacturing the required
              daily quota of microfluidic chips essential for Clinical
              Laboratory Improvement Amendments (CLIA) testing, ensuring the
              smooth flow of critical testing processes.
            </li>
          </ul>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          visible={true}
          className='vertical-timeline-element--education'
          date={<span style={{ color: "#fff" }}>Apr 2023 - Aug 2023</span>}
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          icon={
            <div
              style={{
                position: "relative",
                width: "100%",
                height: "100%",
                borderRadius: "50%",
                overflow: "hidden",
              }}>
              <Image
                src='/others/ucsd.jpeg'
                alt='Bootcamp'
                layout='fill'
                objectFit='cover' // Use cover to ensure the image covers the container
              />
            </div>
          }>
          <h3 className='vertical-timeline-element-title'>
            Bachelor of Science in Bioengineering: Biotechnology
          </h3>
          <h4 className='vertical-timeline-element-subtitle'>
            University of California, San Diego
          </h4>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </section>
  );
}
