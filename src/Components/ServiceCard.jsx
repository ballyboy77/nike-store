export default function ServiceCard({ imgURL, label, subtext }) {
  return (
    <div className=" flex-1 sm:w-[350px] sm:min-[350px] w-full rounded-[20px] shadow-3xl px-9 py-16 hover:translate-y-5 duration-500  cursor-pointer">
      <div className=" w-11 h-11 flex justify-center items-center bg-coral-red rounded-full   ">
        <img src={imgURL} alt={label} width={24} height={24} />
      </div>
      <h3 className=" mt-5 font-montserrat font-medium max-md:text-lg   lg:text-3xl leading-normal ">
        {label}
      </h3>
      <p className=" mt-3 break-words font-montserrat text-lg text-slate-gray  ">
        {subtext}
      </p>
    </div>
  );
}
