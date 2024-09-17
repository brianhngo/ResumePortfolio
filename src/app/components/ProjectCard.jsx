import React from 'react';
import { CodeBracketIcon, EyeIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

const ProjectCard = ({
  imgUrl,
  title,
  summary,
  description,
  gitUrl,
  previewUrl,
  technologies,
}) => {
  return (
    <div>
      <div
        className="h-52 md:h-72 rounded-t-xl relative group"
        style={{
          backgroundImage: `url(${imgUrl})`,
          backgroundSize: 'cover', // Ensures the image covers the entire container

          backgroundRepeat: 'no-repeat', // Prevents tiling/repeating
        }}>
        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 ">
          {gitUrl ? (
            <Link
              href={gitUrl}
              className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link">
              <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
            </Link>
          ) : null}
          {previewUrl ? (
            <Link
              href={previewUrl}
              className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link">
              <EyeIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
            </Link>
          ) : null}
        </div>
      </div>
      <div className="text-white rounded-b-xl mt-3 bg-[#181818]py-6 px-4">
        <h5 className="text-2xl font-semibold mb-2">{title}</h5>
        <p className="text-[#ADB7BE] text-lg font-semibold mb-2"> {summary}</p>
        {description.length > 0 ? (
          <ul className="list-disc list-inside">
            {description.map((point, index) => (
              <li
                key={index}
                className="text-[#ADB7BE] text-md gap-2 mb-1 mt-1">
                {point}
              </li>
            ))}
          </ul>
        ) : null}
        <div className="flex flex-wrap gap-2 mt-auto">
          {technologies.length > 0
            ? technologies.map((technology, index) => (
                <span key={index} className="text-white text-md">
                  #{technology}
                </span>
              ))
            : null}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
