"use client";
import SideBar from "@/components/multi-step-form/SideBar";
import Step1 from "@/components/multi-step-form/Step1";
import Step2 from "@/components/multi-step-form/Step2";
import Step3 from "@/components/multi-step-form/Step3";
import { Switch } from "@/components/ui/switch";

import { useState } from "react";
export interface userInput {
  name?: string;
  email?: string;
  phoneNumber?: string;
  yearly?: boolean,
  plan?: string
}
const MultiStepForm = () => {
  const [userInput, setUserInput] = useState<userInput>({
    name:"",
    email: "",
    phoneNumber: "",
  });

  const [currentStep, setCurrentStep] = useState(2);
  console.log(userInput)
  return (
    // 940;600
    <main className="w-full md:w-[940px] flex flex-col md:flex-row md:bg-white md:rounded-[20px] min-w-[600px] md:p-4 items-center gap-x-12">
      <SideBar currentStep={currentStep} />
      {currentStep === 1 && <Step1 userInput={userInput} setUserInput={setUserInput}  setCurrentStep={setCurrentStep} />}
      {currentStep === 2 && <Step2 userInput={userInput} setCurrentStep={setCurrentStep} setUserInput={setUserInput}  />}
      {/* {currentStep === 3 && <Step3 userInput={userInput} setCurrentStep={setCurrentStep} setUserInput={setUserInput} />} */}
      {currentStep === 3 && <Step3 />}

      < Switch className="absolute top-96 bg-black"/>

    </main>
  );
};

export default MultiStepForm;
