import React from "react";
import DenemeGaleri from "./DenemeGaleri";

function Deneme(props) {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <button
        className="bg-white text-neutral-900 font-light uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Detayları Gör
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative m-20 w-auto my-6 mx-auto max-w-6xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <div>
                    <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-12">
                      <div className=" flex items-center md:-m-2">
                        <div className="flex items-center w-60">
                          <div className="w-full p-1 md:p-2">
                            <img
                              alt="gallery"
                              className="block h-full w-full rounded-lg object-cover object-center"
                              src={props.imgUrl}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <h1 className="text-2xl">{props.title}</h1>
                  <p className="my-4 text-blueGray-500 md:text-lg text-xs leading-relaxed">
                    {props.desc}
                  </p>
                </div>

                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="bg-neutral-500 text-white font-light uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Kapat
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

export default Deneme;
