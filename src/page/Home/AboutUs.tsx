/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import office from "../../assets/office.jpg";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

const Aboutus = () => {
  const [open, setOpen] = React.useState(1);

  const handleOpen = (value: any) => setOpen(open === value ? 0 : value);

  return (
    <div className="w-full py-10 bg-gradient-to-r from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 items-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">About Us</h2>
            <Accordion
              open={open === 1}
              className="rounded-xl border border-blue-gray-100 shadow-sm bg-white"
              placeholder=""
            >
              <AccordionHeader
                onClick={() => handleOpen(1)}
                className={`text-lg font-semibold px-5 py-4 transition-all duration-300 ease-in-out ${
                  open === 1 ? "text-blue-600" : "text-gray-800"
                }`}
                placeholder=""
              >
                🎯 What is Our Mission?
              </AccordionHeader>
              <AccordionBody
                className={`text-gray-700 px-5 pb-5 pt-2 text-base leading-relaxed ${
                  open === 1 ? "block" : "hidden"
                }`}
              >
                At the core of our platform lies a commitment to optimizing the
                distribution process of relief goods following natural
                disasters, humanitarian crises, and emergencies. We believe that
                every individual affected by a disaster deserves timely access
                to critical supplies, including food, water, shelter, and
                medical aid. Our mission is to streamline the logistics of
                relief efforts, minimize bottlenecks, and maximize the impact of
                humanitarian assistance.
              </AccordionBody>
            </Accordion>
          </div>

          <div className="relative">
            <img
              src={office}
              alt="Our Office"
              className="w-full h-auto rounded-xl shadow-lg transition-all duration-300 hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-10 rounded-xl hover:bg-opacity-20 transition-all duration-300" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
