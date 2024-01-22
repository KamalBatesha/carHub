"use client";
import { CarProps } from "@/types";
import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";
import { Fragment, useState } from "react";
import { generateCarImageUrl } from "@/utils/indenx";
interface CarDetailsProps {
  isOpen: boolean;
  close: () => void;
  car: CarProps;
}

function CarDetails({ isOpen, close, car }: CarDetailsProps) {
  return (
    <div>
      <Transition appear as={Fragment} show={isOpen}>
        <Dialog onClose={close} as="div" className=" relative z-10">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className=" fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-90"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-90"
              >
                <Dialog.Panel
                  className=" relative w-full max-w-lg max-h-[90vh]
                 bg-white p-6 transform overflow-y-auto rounded-2xl text-left transition-all shadow-xl flex flex-col gap-5"
                >
                  <button
                    className=" bg-primary-blue-100 absolute top-2 right-2 p-2 rounded-full w-fit z-10"
                    type="button"
                    onClick={close}
                  >
                    <Image
                      src="/close.svg"
                      alt="close"
                      width={20}
                      height={20}
                      className=" object-contain"
                    />
                  </button>
                  <div className=" flex-1 flex flex-col gap-3">
                    <div className=" bg-pattern w-full h-40 relative bg-cover bg-center rounded-lg">
                      <Image
                        src={generateCarImageUrl(car)}
                        fill
                        priority
                        className="object-contain "
                        alt="car image"
                      />
                    </div>
                    <div className="flex gap-3 p-1 ">
                      <div className=" relative flex-1 w-full bg-primary-blue-100 h-24 rounded-lg">
                        <Image
                          src={generateCarImageUrl(car, "29")}
                          fill
                          priority
                          className="object-contain "
                          alt="car image"
                        />
                      </div>
                      <div className=" relative flex-1 w-full bg-primary-blue-100 h-24 rounded-lg">
                        <Image
                          src={generateCarImageUrl(car, "33")}
                          fill
                          priority
                          className="object-contain "
                          alt="car image"
                        />
                      </div>
                      <div className=" relative flex-1 w-full bg-primary-blue-100 h-24 rounded-lg">
                        <Image
                          src={generateCarImageUrl(car, "13")}
                          fill
                          priority
                          className="object-contain "
                          alt="car image"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col gap-2">
                    <h2 className=" font-semibold text-lg capitalize">
                      {car.make}
                      {car.model}
                    </h2>
                    <div className="mt-3 flex flex-wrap gap-4">
                      {Object.entries(car).map(([key, value]) => (
                        <div
                          className=" w-full flex justify-between items-center gap-5"
                          key={key}
                        >
                          <h4 className=" text-grey capitalize">
                            {key.split("_").join(" ")}
                          </h4>
                          <p className=" text-black-100 font-semibold">
                            {value}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
}

export default CarDetails;
