
import Footer from "@/components/main/Footer";
import ProjectCards from "@/components/main/ProjectCards";
import { Separator } from "@/components/ui/separator";
import { cardData } from "@/data/testconstant";

export default function Home() {
  return (
    <main className="relative flex gap-16 flex-col top-16 text-center font-[family-name:var(--font-geist-mono)] main">
      <div className="w-full flex flex-col gap-4  px-9 py-8">
        <h1 className="font-bold m-auto max-w-3xl text-3xl md:text-5xl dark:text-white ">
          Showcasing{" "}
          <span className="underline max-w-3xl text-blue-900">
            My Frontend Mentor Projects
          </span>
        </h1>
        <Separator className="max-w-3xl m-auto"/>
        <p className="text-gray-600 dark:text-gray-300 md:text-lg">
          A collection of my Frontend Mentor solutions, built mainly with Next Js.
        </p>
      </div>

      <ProjectCards cards={cardData} />

      <Footer />
    </main>
  );
}