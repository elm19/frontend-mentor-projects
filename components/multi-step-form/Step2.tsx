"use client";

import { useState } from "react";
import { Button } from "../ui/button";
// import { Switch } from "../ui/switch";
import * as Switch from "@radix-ui/react-switch";
import Image from "next/image";
import { userInput } from "@/app/multi-step-form/page";

interface step2Props {
  setCurrentStep: (number: number) => void;
  userInput: userInput;
  setUserInput: (userInput: userInput) => void;
}

const card2Data = [
  {
    icon: "multi-step-form/icon-arcade.svg",
    title: "Arcade",
    priceMonthly: "$9/mo",
    priceYearly: "$90/yr",
  },
  {
    icon: "multi-step-form/icon-advanced.svg",
    title: "Advanced",
    priceMonthly: "$12/mo",
    priceYearly: "$120/yr",
  },
  {
    icon: "multi-step-form/icon-pro.svg",
    title: "Pro",
    priceMonthly: "$15/mo",
    priceYearly: "$150/yr",
  },
];

const Step2Card = ({
  id,
  yearly,
  selected,
  setSelected,
}: {
  id: 0 | 1 | 2;
  yearly: boolean;
  selected: number;
  setSelected: (number: number) => void;
}) => {
  return (
    <div
      className="border rounded-[10px] cursor-pointer md:w-[138px] md:h-[160px]  hover:border-[#5247a5]"
      onClick={() => setSelected(id)}
    >
      <label className="flex items-center h-full">
        <input
          type="radio"
          name={card2Data[id].title}
          className="sr-only peer group"
        />
        <div
          className={`p-4 rounded-[10px] items-start border peer-checked:border-1 bord flex  md:flex-col md:justify-between gap-x-4 h-full w-full ${
            selected === id ? "border-[#5247a5] bg-[#fafbff]" : ""
          } `}
        >
          <Image
            src={card2Data[id].icon}
            alt={card2Data[id].title}
            width={40}
            height={40}
            className="m-0"
          />
          <div>
            <div className="m-0 text-[#012a5a] font-bold">
              {card2Data[id].title}
            </div>
            <div className="text-[#9699ab] ">
              {!yearly ? card2Data[id].priceYearly : card2Data[id].priceMonthly}
            </div>
            {!yearly && <div className="text-[#012a5a] ">2 months free</div>}
          </div>
        </div>
      </label>
    </div>
  );
};
interface monthlyYearlySwitchProps {
  yearly: boolean;
  setYearly: () => void;
}

const MonthlyYearlySwitch = ({
  yearly,
  setYearly,
}: monthlyYearlySwitchProps) => {
  return (
    <div
      className="bg-[#fafbff] w-full h-[48px] flex items-center justify-center rounded-[10px] gap-5"
      onClick={setYearly}
    >
      <div className={yearly ? "text-[#9699ab] font-bold" : "font-bold"}>
        Monthly
      </div>
      <Switch.Root className="relative w-12 h-6 bg-[#012a5a] rounded-full transition ">
        <Switch.Thumb className="block w-4 h-4 bg-white rounded-full shadow transform translate-x-0.5 transition data-[state=checked]:translate-x-7" />
      </Switch.Root>
      <div className={yearly ? "font-bold " : "font-bold text-[#9699ab]"}>
        Yearly
      </div>
    </div>
  );
};

const Step1 = ({ setCurrentStep, setUserInput, userInput}: step2Props) => {
  const [yearly, setYearly] = useState(true);
  const [selected, setSelected] = useState(-1);
  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setUserInput({
        ...userInput,
        yearly:yearly,
        plan: card2Data[selected].title
    })
    setCurrentStep(3)
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
          <div className="flex flex-col md:flex-row gap-4">
            <Step2Card
              selected={selected}
              setSelected={setSelected}
              id={0}
              yearly={yearly}
            />
            <Step2Card
              selected={selected}
              setSelected={setSelected}
              id={1}
              yearly={yearly}
            />
            <Step2Card
              selected={selected}
              setSelected={setSelected}
              id={2}
              yearly={yearly}
            />
          </div>
          <MonthlyYearlySwitch
            yearly={yearly}
            setYearly={() => setYearly((yearly) => !yearly)}
          />
        </div>
        <div className="fixed bottom-0 left-0 right-0 bg-white w-full flex justify-between h-20 p-4 px-10 items-center md:relative md:bg-transparent md:h-auto md:p-0 md:top-10">
          <Button
            variant="ghost"
            className="hover:text-[#012a5a] text-[#9699ab] font-bold"
            onClick={() => setCurrentStep(1)}
          >
            Go Back
          </Button>
          <Button
            type="submit"
            disabled={selected === -1}
            className="w-24 h-10 bg-[#012a5a] text-white rounded-[10px] hover:bg-[#174a8b]"
          >
            Next Step
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Step1;
