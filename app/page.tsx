
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <main className="relative top-16 text-center font-[family-name:var(--font-geist-mono)] px-9 main py-11">
      <div className="max-w-3xl m-auto flex flex-col gap-5">
        <h1 className="font-bold text-3xl md:text-5xl dark:text-white">
          Showcasing{" "}
          <span className="underline text-blue-900">
            My Frontend Mentor Projects
          </span>
        </h1>
        <Separator />
        <p className="text-xs md:text-lg font-medium leading-non">
          A collection of my Frontend Mentor solutions, built mainly with Next
          Js.
        </p>
      </div>
    </main>
  );
}
