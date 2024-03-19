/* eslint-disable @typescript-eslint/no-explicit-any */
import { FormOutlined } from "@ant-design/icons";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function EditModal({ props }: any) {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const handldesurebutton = () => [
    setShowModal(false),
    navigate("/dashboard/allsupplypost"),
  ];
  return (
    <>
      <button type="button" onClick={() => setShowModal(true)}>
        <FormOutlined />
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex w-full overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="relative p-6 flex-auto">
                  <p className="my-4 text-blueGray-500 text-lg text-black leading-relaxed">
                    <p className="text-left">Title</p>
                    <input
                      className="px-2 py-1 rounded-xl border w-96"
                      type="text"
                      defaultValue={props.title}
                    />
                  </p>
                  <p className="my-4 text-blueGray-500 text-lg text-black leading-relaxed">
                    <p className="text-left">image Link</p>
                    <input
                      className="px-2 py-1 rounded-xl border w-96"
                      type="text"
                      defaultValue={props.image}
                    />
                  </p>
                  <p className="my-4 text-blueGray-500 text-lg text-black leading-relaxed">
                    <p className="text-left">Category</p>
                    <input
                      className="px-2 py-1 rounded-xl border w-96"
                      type="text"
                      defaultValue={props.category}
                    />
                  </p>
                  <p className="my-4 text-blueGray-500 text-lg text-black leading-relaxed">
                    <p className="text-left">Amount</p>
                    <input
                      className="px-2 py-1 rounded-xl border w-96"
                      type="text"
                      defaultValue={props.amount}
                    />
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
                    className="bg-yellow-600 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="submit"
                    onClick={handldesurebutton}
                  >
                    Update
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
