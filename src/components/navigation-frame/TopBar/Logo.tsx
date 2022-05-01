import stream from "../../../assets/stream.svg";

export const Logo = () => {
  return (
    <div className="flex flex-row items-center">
      <img className="h-[40px] mr-3" src={stream} />
      <span className="text-white text-[24px] font-[700] capitalize bg-gradient-to-r bg-clip-text  text-transparent from-green-400 to-blue-500 animate-text">
        Stream Protocol
      </span>
    </div>
  );
};
