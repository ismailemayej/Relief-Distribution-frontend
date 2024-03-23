/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import office from "../../assets/office.jpg";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import Heading from "../../component/Heading";

const AboutUs = () => {
  const [open, setOpen] = React.useState(1);

  const handleOpen = (value: any) => setOpen(open === value ? 0 : value);

  return (
    <>
      <Heading title="About Us" subTitle="" />
      <div className="grid lg:grid-cols-2 grid-cols-1 my-9 w-full p-4 gap-3">
        <Accordion
          placeholder=""
          open={open === 1}
          className="mb-2 rounded-lg border border-blue-gray-100"
        >
          <AccordionHeader
            placeholder=""
            onClick={() => handleOpen(1)}
            className={`border-b-0 transition-colors text-xl border px-3 ${
              open === 1 ? "text-blue-500 hover:!text-blue-700 border" : ""
            }`}
          >
            What is Mission?
          </AccordionHeader>
          <AccordionBody
            className={`border-b-0 transition-colors border px-3 text-md ${
              open === 1 ? "text-blue-900 hover:!text-blue-700" : "hidden"
            }`}
          >
            At the core of our platform lies a commitment to optimizing the
            distribution process of relief goods following natural disasters,
            humanitarian crises, and emergencies. We believe that every
            individual affected by a disaster deserves timely access to critical
            supplies, including food, water, shelter, and medical aid. Our
            mission is to streamline the logistics of relief efforts, minimize
            bottlenecks, and maximize the impact of humanitarian assistance.
          </AccordionBody>
        </Accordion>

        <div>
          <img
            src={office}
            className="lg:block hidden w-full rounded-xl"
            alt=""
          />{" "}
        </div>
      </div>
    </>
  );
};
export default AboutUs;
