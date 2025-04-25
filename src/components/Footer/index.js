"use client";
import React from "react";
import { useForm } from "react-hook-form";
import {
  YoutubeIcon,
  FacebookIcon,
  LinkedinIcon,
  InstagramIcon,
} from "../Icons";
import Link from "next/link";
import Image from "next/image"; // Added import
import siteMetadata from "@/utils/siteMetaData";

const Footer = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <footer className="py-10 px-4 mb-4 border border-gray-300 dark:border-gray-700 rounded-lg shadow-lg bg-white dark:bg-black text-black dark:text-white">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Section - About */}
        <div className="max-w-md">
          <h2 className="text-3xl font-extrabold text-red-500 dark:text-red-300 flex items-center">
            <span className="mr-3">
              <Image
                src="/epics.jpg"
                width={40}
                height={40}
                alt="EPICS SOLUTION Logo"
                className="w-10 h-10 object-contain"
              />
            </span>
            EPICS SOLUTION
          </h2>
          <p className="mt-4 text-base leading-relaxed">
            Epic Solutions is a leading software house specializing in custom
            software, web & mobile app development, and AI-driven solutions. We
            turn ideas into powerful digital products with innovation and
            expertise.
          </p>
        </div>

        {/* Center Section - Useful Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">USEFUL LINKS</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/About-Us" className="hover:text-red-500 flex items-center">
                ➝ About Us
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="hover:text-red-500 flex items-center">
                ➝ privacy policy
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-red-500 flex items-center">
                ➝ Contact Us
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-red-500 flex items-center">
                ➝ Terms of Use
              </Link>
            </li>
            <li>
              <Link href="/dis" className="hover:text-red-500 flex items-center">
                ➝ Disclaimer Page
              </Link>
            </li>
          </ul>
        </div>

        {/* Right Section - Subscribe */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Let&apos;s Connect</h3>
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
            <input
              type="email"
              {...register("email", { required: "Email is required" })}
              placeholder="Enter your email"
              className="p-2 rounded-md border border-gray-400 focus:ring-2 focus:ring-red-500 dark:bg-gray-800 dark:border-gray-600 text-gray-900 dark:text-gray-100"
            />
            {errors.email && (
              <p className="text-red-500 dark:text-red-300 text-sm">
                {errors.email.message}
              </p>
            )}
            <button
              type="submit"
              className="mt-2 p-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-all"
            >
              ContactUs
            </button>
          </form>
        </div>
      </div>

      {/* Social Media Links */}
      <div className="flex items-center justify-center mt-8">
        <a
          href={siteMetadata.linkedin}
          rel="noopener noreferrer"
          className="inline-block w-6 h-6 mr-4"
          aria-label="Reach out to me via LinkedIn"
          target="_blank"
        >
          <LinkedinIcon className="hover:scale-125 transition-all ease duration-200 fill-current" />
        </a>
        <a
          href={siteMetadata.facebook}
          rel="noopener noreferrer"
          className="inline-block w-6 h-6 mr-4"
          aria-label="Reach out to me via Facebook"
          target="_blank"
        >
          <FacebookIcon className="hover:scale-125 transition-all ease duration-200 fill-current" />
        </a>
        <a
          href={siteMetadata.youtube}
          rel="noopener noreferrer"
          className="inline-block w-6 h-6 mr-4"
          aria-label="Check my profile on YouTube"
          target="_blank"
        >
          <YoutubeIcon className="hover:scale-125 transition-all ease duration-200 fill-current" />
        </a>
        <a
          href={siteMetadata.instagram}
          rel="noopener noreferrer"
          className="inline-block w-6 h-6 mr-4"
          aria-label="Check my profile on Instagram"
          target="_blank"
        >
          <InstagramIcon className="hover:scale-125 transition-all ease duration-200 fill-current" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
