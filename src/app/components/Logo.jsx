export const Logo = () => {
  return (
    <div>
      <div className=" absolute border top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full border-grey bg-[#f3f4f6] size-35">
        <img
          src="/Vector.svg"
          alt=""
          className="absolute  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ml-8"
        />
        <img
          src="/group 4.svg"
          alt=""
          className="absolute  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 "
        />
      </div>
      <div className="absolute border top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full border-gray-500 size-85"></div>
      <div className="absolute border top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full border-gray-500 size-135"></div>
      <div className="absolute border top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full border-gray-500 size-235"></div>
    </div>
  );
};
