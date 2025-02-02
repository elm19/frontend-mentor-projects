"use client";

import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Button } from "../ui/button";
import { CheckIcon } from "lucide-react";
// import Image from "next/image";
import { userInput } from "@/app/multi-step-form/page";

interface step3Props {
  setCurrentStep: (number: number) => void;
  userInput: userInput;
  setUserInput: (userInput: userInput) => void;
}

const card3Data = [
  {
    title: "Online service",
    desc: "Access to multiplayer games",
    priceMonthly: "$1/mo",
    priceYearly: "$10/yr",
  },
  {
    title: "Larger storage",
    desc: "Extra 1TB of cloud save",
    priceMonthly: "$2/mo",
    priceYearly: "$20/yr",
  },
  {
    title: "Customizable profile",
    desc: "Custom theme on your profile",
    priceMonthly: "$2/mo",
    priceYearly: "$20/yr",
  },
];

const Step3Card = ({
  id,
  yearly,
  selected,
  setSelected,
}: {
  id: 0 | 1 | 2;
  yearly: boolean;
  selected: {
    onlineService: boolean;
    largerStorage: boolean;
    customProfile: boolean;
  };
  setSelected: Dispatch<
    SetStateAction<{
      onlineService: boolean;
      largerStorage: boolean;
      customProfile: boolean;
    }>
  >;
}) => {
  const dictKeys: Record<number, keyof typeof selected> = {
    0: "onlineService",
    1: "largerStorage",
    2: "customProfile",
  };
  return (
    <div className="border rounded-[10px] cursor-pointer hover:border-[#5247a5]">
      <label
        className="flex items-center h-full"
        onClick={() => {
          setSelected((prev) => ({
            ...prev,
            [dictKeys[id]]: !prev[dictKeys[id]],
          }));
        }}
      >
        <input
          type="radio"
          name={card3Data[id].title}
          className="sr-only peer group"
          onClick={() => {
            setSelected((prev) => ({
              ...prev,
              [dictKeys[id]]: !prev[dictKeys[id]],
            }));
          }}
        />
        <div
          className={`p-4 rounded-[10px] items-center border peer-checked:border-1 bord flex justify-between gap-x-4 h-full w-full ${
            selected[dictKeys[id]] ? "border-[#5247a5] bg-[#fafbff]" : ""
          } `}
        >
          <div className="flex gap-4 items-center">
          <div
            className={`w-5 h-5 peer-checked:bg-black border rounded flex justify-center p-0 items-center text-white font-bold ${
              selected[dictKeys[id]] ? "bg-[#4540f4] " : ""
            }  `}
          >
            <CheckIcon className="w-full" />
          </div>

          <div>
            <div className="m-0 text-[#012a5a] font-bold">
              {card3Data[id].title}
            </div>
            <div className="text-[#9699ab] ">
              {card3Data[id].desc}
            </div>
          </div>
          </div>
          <div className="text-[#6654f4] ">
          +{!yearly ? card3Data[id].priceYearly : card3Data[id].priceMonthly}
          </div>
        </div>
      </label>
    </div>
  );
};

const Step3 = ({ setCurrentStep, setUserInput, userInput }: step3Props) => {
  const yearly = userInput.yearly;
  const [selected, setSelected] = useState({
    onlineService: false,
    largerStorage: false,
    customProfile: false,
  });
  useEffect(() => {
    console.log(selected); // Logs the updated selected state
  }, [selected]);
  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    console.log(selected);

    setUserInput({
      ...userInput,
      ...selected,
    });
    console.log(setUserInput)
    setCurrentStep(4);
  };

  return (
    <div className="absolute md:relative md:top-0 md:m-0 top-[100px] left-0 right-0 min-w-96 shadow-lg md:shadow-none md:min-h- bg-white w-[91.2%] text-left m-auto rounded-[10px] p-6 md:justify-between md:w-[550px]">
      <div className="flex flex-col gap-3 mb-8">
        <h2 className="text-[#02295a] text-2xl font-extrabold">
          Select your plan
        </h2>
        <p className="text-[#9699ab] font-light">
          You have the option of monthly or yearly billing.
        </p>
      </div>
      <form
        onSubmit={onSubmit}
        className="flex flex-col md:gap-20 h-full
      "
      >
        <div className="flex flex-col md:gap-5">
          <div className="flex flex-col gap-4">
            <Step3Card
              selected={selected}
              id={0}
              yearly={yearly}
              setSelected={setSelected}
            />
            <Step3Card
              selected={selected}
              id={1}
              yearly={yearly}
              setSelected={setSelected}
            />
            <Step3Card
              selected={selected}
              id={2}
              yearly={yearly}
              setSelected={setSelected}
            />
          </div>
        </div>
        <div className="fixed bottom-0 left-0 right-0 bg-white w-full flex justify-between h-20 p-4 px-10 items-center md:relative md:bg-transparent md:h-auto md:p-0 md:top-10">
          <Button
            variant="ghost"
            className="hover:text-[#012a5a] text-[#9699ab] font-bold"
            onClick={() => setCurrentStep(2)}
          >
            Go Back
          </Button>
          <Button
            type="submit"
            className="w-24 h-10 bg-[#012a5a] text-white rounded-[10px] hover:bg-[#174a8b]"
          >
            Next Step
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Step3;
