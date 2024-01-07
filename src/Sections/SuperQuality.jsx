import Button from "../Components/Button";
import { shoe7, shoe8 } from "../assets/images";

export default function SuperQuality() {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex flex-1 flex-col">
        <h2 className=" font-palanquin capitalize  max-sm:text-[2.5rem] text-[4rem] lg:max-w-lg font-bold ">
          We Provide You
          <span className=" pl-5 text-coral-red">Super</span>
          <span className="text-coral-red pr-3">Quality</span>
          Shoes
        </h2>
        <p className=" mt-5 lg:max-w-lg info-text">
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Our dedication to detail and excellence ensures your satisfaction
        </p>
        <div className="mt-11 m-36 ">
          <Button label={"View Details"} />
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center">
        <img src={shoe8} alt="product detail" height={570} width={522}></img>
      </div>
    </section>
  );
}
