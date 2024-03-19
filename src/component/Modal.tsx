import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Modal() {
  const navigate = useNavigate();

  const handldesurebutton = () => [
    setShowModal(false),
    navigate("/dashboard/piechart"),
  ];
  return (
    <>
      <button
        className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Donate
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="relative p-6 flex-auto">
                  <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                    We are writing on behalf of our company, Glasses for Kids.
                    We are a non-profit organization that works to bring glasses
                    to children in developing countries Many of the children we
                    help cannot go to school because of poor eyesight, so by
                    giving them the gift of sight, we also give the gift of
                    education. We fell short of our fundraising goal this year,
                    and cannot serve as many children as we would like. With
                    your help, we can reach nearly 1,000 children this year.
                    Would you consider donating to our organization? As little
                    as $5 helps put a pair of glasses in the hands of a child
                    who needs them. What can you contribute? Thank you for
                    taking the time to read this letter, and we hope you will
                    consider donating your time or money to our cause. The kids
                    need you. Sincerely, Emma Jones Program Director Glasses for
                    Kids Just click her button and donate : are your sure want
                    to donate?
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="submit"
                    onClick={handldesurebutton}
                  >
                    Sure
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
