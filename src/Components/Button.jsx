export default function Button({
  label,
  iconUrl,
  backgroundColor,
  textColor,
  borderColor,
  fullWidth,
}) {
  return (
    <button
      className={`flex justify-center gap-1 px-4 border font-montserrat text-lg leading-9  
    ${
      backgroundColor
        ? `${backgroundColor} ${textColor} ${borderColor}`
        : "bg-coral-red text-white border-coral-red"
    }   rounded-full ${fullWidth && "w-full"}`}
    >
      {label}
      {iconUrl && (
        <img
          src={iconUrl}
          alt="icon url "
          className=" mt-1 rounded-full bg-red-400 w-10 h-8"
        />
      )}
    </button>
  );
}
