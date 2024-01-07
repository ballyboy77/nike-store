import { useState } from "react";
import Button from "../Components/Button";
import ShoeCard from "../Components/ShoeCard";
import { arrowRight } from "../assets/icons";
import { bigShoe1 } from "../assets/images";
import { shoes, statistics } from "../Constants";

export default function Hero() {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);
  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col min-h-screen gap-10 max-container"
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <p className=" text-xl font-montserrat text-coral-red xl:ml-10">
          Our Summer Collections
        </p>
        <h1 className=" mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-semibold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
            The New Arrival
          </span>
          <br />
          <span className=" text-red-600 inline-block mt-6 pr-4 animate-pulse shadow-lg  ">
            NIKE
          </span>
          Shoes
        </h1>
        <p className="font-montserrat text-slate-gray text-lg leading-9 mt-7 mb-12 sm:max-w-sm xl:ml-10">
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </p>
        <Button label="shop now" iconUrl={arrowRight} />

        <div className="flex justify-start items-start flex-wrap w-full mt-20 sm:ml-6 gap-10">
          {statistics.map((stat, index) => (
            <div
              key={index}
              className="hover:text-emerald-400 duration-300 cursor-pointer "
            >
              <p className=" text-4xl font-palanquin font-bold">{stat.value}</p>
              <p className=" leading-7 font-montserrat text-slate-gray">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40    bg-primary bg-hero bg-center">
        <img
          src={bigShoeImg}
          alt="red-shoe"
          width={600}
          height={500}
          className="object-contain relative z-10"
        ></img>
        <div className=" flex gap-4 sm:gap-6 absolute -bottom-1">
          {shoes.map((shoe) => (
            <div key={shoe}>
              <ShoeCard
                imgURL={shoe}
                changeBigShoeImage={(shoe) => setBigShoeImg(shoe)}
                bigShoeImg={bigShoeImg}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
