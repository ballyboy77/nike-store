import { star } from "../assets/icons";

export default function PopularProductCard({ imgURL, name, price }) {
  return (
    <div className="flex flex-1 justify-center flex-col max-sm:w-full max-sm:pl-16  hover:shadow-xl rounded-3xl duration-500  cursor-pointer  ">
      <img src={imgURL} alt={name} className="w-[280px] h-[280px]" />
      <div className=" mt-6 flex justify-start gap-2 ml-5 ">
        <img src={star} alt="ratings" height={24} width={24} />
        <p className="font-montserrat text-xl  text-slate-gray">(4.5)</p>
        <h3 className="mt-1 text-xl  font-palanquin ">{name}</h3>
      </div>
      <p className=" ml-36  mt-2 font-semibold font-montserrat text-slate-gray">
        {price}
      </p>
    </div>
  );
}
