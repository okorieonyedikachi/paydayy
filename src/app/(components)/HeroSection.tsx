import Image from "next/image";
import React from "react";
import logo from "@/assets/logo.fb5bdedb.webp";
import heroPhoto from "@/assets/card-phone-green.780dcb9e.png";
import { Button } from "@/components/ui/button";
import appleLogo from "@/assets/app-store-white.68d21f61.svg";
import playstoreLogo from "@/assets/play-store-white.eedf08b4.svg";
import rating from "@/assets/rated.37580629.png";
import star from "@/assets/rate.b1add213.svg";
import blankstar from "@/assets/ratings.2a82f4a2.svg";

const HeroSection = () => {
  return (
    <div className="bg-black w-full flex flex-col items-center h-full max-sm:bg-yellow-950">
      <section className="w-10/12 bg-blue500 mt-6">
        <nav className="flex items-center justify-between">
          <Image src={logo} alt="logo" width={120}></Image>
          <div className="flex items-center max-sm:hidden">
            <ul className="text-white flex items-center mr-8 gap-8">
              <li>Products</li>
              <li>About</li>
              <li>FAQ</li>
              <li>Blog</li>
            </ul>
            <div>
              <Button>Download App</Button>
            </div>
          </div>
        </nav>
      </section>
      <section className="w-10/12 lg:mt-24 flex max-sm:mt-8 items-center">
        <div className="lg:w-6/12 ">
          <div className="bg-primary w-7/12 pl-2 rounded-2xl py-1 text-xs max-sm:w-10/12 max-sm:truncate">
            <span className="bg-black text-primary text-sm px-3 mr-4 rounded-lg">
              New
            </span>
            Announcing our $2M + pre-seed funding 🎉
          </div>
          <h1 className="font-bold text-5xl text-primary my-9 max-sm:text-3xl">
            Open USD, EUR, & GBP Bank Accounts for free
          </h1>
          <h4 className="text-primary text-lg text-wrap tracking-wider">
            The Borderless Neobank for African remote workers, freelancers, and
            creatives.
          </h4>
          <div className="flex justify-between w-7/12 mt-9 gap-4">
            <Image
              src={appleLogo}
              alt="apple-logo"
              className="max-sm:w-36"
            ></Image>
            <Image
              src={playstoreLogo}
              alt="playstore-logo"
              className="max-sm:w-36"
            ></Image>
          </div>
          <div className="mt-8 mb-10 flex items-center gap-2">
            <Image src={rating} alt="rating" width={100}></Image>
            <div>
              <div className="flex">
                <Image src={star} alt="star-rating"></Image>
                <Image src={star} alt="star-rating"></Image>
                <Image src={star} alt="star-rating"></Image>
                <Image src={star} alt="star-rating"></Image>
                <Image src={blankstar} alt="blank-star"></Image>
              </div>
              <p className="text-slate-700 text-xs">
                Rated 4.5 by 30,000+ Africans
              </p>
            </div>
          </div>
        </div>
        <div className="absolute right-0 hidden lg:flex mt-48">
          <Image src={heroPhoto} alt="hero-photo" width={800}></Image>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
