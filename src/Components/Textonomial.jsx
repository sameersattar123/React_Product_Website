import React from "react";

const Textonomial = ({image , name}) => {
  return (
    <>
    <div>
      <div className=" bg-white-200 w-[400px] h-full  rounded-lg border-4">
        <img className="rounded-full mx-auto w-20 mt-2" src={image} alt="" />
        <h3 className="font-bold text-center m-4">{name}</h3>
        <p className="text-center text-black m-2 p-2">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem,
          dolores placeat repellat, quibusdam perferendis quaerat suscipit, vero
          enim similique corporis ad minima modi reiciendis quasi delectus
          soluta commodi adipisci vitae!
        </p>
      </div>
    </div>
    </>
  );
};

export default Textonomial;
