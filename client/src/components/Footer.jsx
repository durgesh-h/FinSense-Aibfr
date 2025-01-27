import React from "react";
import Section from "./Section";
import { socials } from "../constants";

const Footer = () => {
  return (
    <Section crosses className="!px-0 !py-10">
      <div className="container flex sm:justify-between justify-center items-center gap-10 max-sm:flex-col">
        <p className="caption text-n-4 lg:block">
          © {new Date().getFullYear()}. All rights reserved.
        </p>
        <p className="text-center text-gray-200 lg:block leading-normal text-xs sm:text-sm font-sans">
          <span className="font-medium text-gray-300">
            Crafted with passion
          </span>
          <span className="text-red-400 text-base sm:text-lg"> ♥ </span>
          <span className="font-semibold text-white">by a great team.</span>
          <br />
          <span className="font-medium sm:font-semibold sm:text-base text-white tracking-wide">
            <a
              href="https://portfolio-durgesh.com"
              target="_blank"
              className=" hover:underline"
            >
              Durgesh
            </a>{" "}
            •
            <a
              href="https://portfolio-sonal.com"
              target="_blank"
              className=" hover:underline"
            >
              Sonal
            </a>{" "}
            •
            <a
              href="https://portfolio-sankalp.com"
              target="_blank"
              className=" hover:underline"
            >
              Sankalp
            </a>{" "}
            •
            <a
              href="https://portfolio-abhishek.com"
              target="_blank"
              className="hover:underline"
            >
              Abhishek
            </a>
          </span>
        </p>

        <ul className="flex gap-5 flex-wrap">
          {socials.map((item) => (
            <a
              key={item.id}
              href={item.url}
              target="_blank"
              className="flex items-center justify-center w-10 h-10 bg-n-7 rounded-full transition-colors hover:bg-n-6"
            >
              <img src={item.iconUrl} width={16} height={16} alt={item.title} />
            </a>
          ))}
        </ul>
      </div>
    </Section>
  );
};

export default Footer;
