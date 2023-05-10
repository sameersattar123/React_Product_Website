import React from "react";
import Service from "./Service";

const Services = () => {
  return (
    <div className="flex container flex-col md:flex-row mx-auto mt-10 space-y-12 md:space-y-0 justify-center">
      <div className=" space-y-12 flex flex-col md:w-1/2">
        <h1 className="max-w-md text-4xl font-bold text-center md:text-left">
          What's different about Manage ?
        </h1>
        <p className="text-darkGrayishBlue max-w-sm text-center md:text-left">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam odit
          nam nisi accusantium eveniet aliquam! Eius nisi laborum, eveniet nulla
          obcaecati, facilis culpa commodi qui tempore porro quidem vitae in!
        </p>
      </div>
      <div className="flex flex-col md:w-1/2 ">
        <Service
          num={"01"}
          description={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam sit quaerat a dolore nemo rem, minima dolor accusamus cupiditate natus nulla, nobis optio tempora repellat quia voluptatum eveniet aperiam voluptas!"
          }
          title={"Track company-wide progress"}
        />
        <Service
          num={"02"}
          description={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam sit quaerat a dolore nemo rem, minima dolor accusamus cupiditate natus nulla, nobis optio tempora repellat quia voluptatum eveniet aperiam voluptas!"
          }
          title={"Advanced built-in reports"}
        />
        <Service
          num={"03"}
          description={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam sit quaerat a dolore nemo rem, minima dolor accusamus cupiditate natus nulla, nobis optio tempora repellat quia voluptatum eveniet aperiam voluptas!"
          }
          title={"Everything you need in one place"}
        />
      </div>
    </div>
  );
};

export default Services;
