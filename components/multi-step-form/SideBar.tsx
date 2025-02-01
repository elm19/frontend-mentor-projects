import Image from "next/image";
import Number from "./Number";

interface sideBarProp {
  currentStep: number;
}

const SideBar = ({ currentStep }: sideBarProp) => {
  return (
    <div>
      {/* Phone side bar */}
      <div className="fixed left-0 block md:hidden top-0 w-full">
        <Image
          className=" w-full min-w-96"
          src="/multi-step-form/bg-sidebar-mobile.svg"
          alt="phone bar"
          width={375}
          height={172}
        />
        <div className="w-full top-8 flex fixed gap-4 items-center justify-center">
          <Number number={1} current={currentStep === 1} />
          <Number number={2} current={currentStep === 2} />
          <Number number={3} current={currentStep === 3} />
          <Number number={4} current={currentStep === 4} />
        </div>
      </div>

      {/* desktop side bar */}
      <div className="hidden md:block relative">
        <Image
          className=""
          src="/multi-step-form/bg-sidebar-desktop.svg"
          alt="desktop bar"
          width={274}
          height={568}
        />
        <div className="absolute top-8 left-8 flex flex-col gap-4">
          <Number number={1} current={currentStep === 1} />
          <Number number={2} current={currentStep === 2} />
          <Number number={3} current={currentStep === 3} />
          <Number number={4} current={currentStep === 4} />
        </div>
      </div>
    </div>
  );
};

export default SideBar;
