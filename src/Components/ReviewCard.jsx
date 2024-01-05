import { star } from "../assets/icons";

export default function ReviewCard({ imgURL, customerName, rating, feedback }) {
  return (
    <div className="flex justify-center items-center">
      <img
        src={imgURL}
        alt="customer"
        className="rounded-full  w-[120px] h-[120px] mt-10"
      />
      <p className=" mt-6 pl-10 max-w-sm info-text">{feedback}</p>
      <div className=" mt-[10rem]   absolute  px-[8rem] flex justify-center items-center gap-2">
        <img
          src={star}
          width={24}
          height={24}
          alt="rating star"
          className="object-contain m-0"
        />
        <p className="text-xl font-montserrat text-slate-gray">{rating}</p>
      </div>
      <h3 className=" font-palanquin text-right">{customerName}</h3>
    </div>
  );
}
