interface NumberProp {
  number: 1 | 2| 3| 4 ;
  current?: boolean;
}
const desc = {
    1: "your info",
    2: "select plan",
    3: "add-ons",
    4: "summary"
}
const Number = ({ number, current = false }: NumberProp) => {
  return (
    <div className="flex gap-4 items-center">
      <div
        className={`rounded-full w-[35px] h-[35px] flex items-center justify-center ${
          current ? "bg-[#bfe0ff]" : "border border-white"
        } `}
      >
        {number}
      </div>
      <div className="hidden md:flex flex-col text-left gap-1">
        <h3 className="text-[#9699ab] font-light uppercase">{`step ${number} `} </h3>
        <p className="text-white font-bold uppercase">{desc[number]}</p>
      </div>
    </div>
  );
};

export default Number;
