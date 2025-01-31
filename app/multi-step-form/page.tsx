"use client"
import SideBar from "@/components/multi-step-form/SideBar"
import Step1 from "@/components/multi-step-form/Step1"
import { useState } from "react"


const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(1)

  return (
    // 940;600
    <main className="w-full md:w-[940px] md:h-[600px] flex flex-col md:flex-row md:bg-white md:rounded-[20px]  md:p-4">
      <SideBar />
      {currentStep === 1 && <Step1 />}
    </main>
  )
}

export default MultiStepForm