import { Outfit } from "next/font/google";
import "./globals.css";
import Image from "next/image";


const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "700"],
});


const QrCode = () => {
  return (
    <main  className={`${outfit.className} bg-[#D5E1EF] w-svw h-svh min-h-96 flex justify-center items-center text-center`}>
      <div className="bg-white w-[320px] h-[500px] p-4 pb-5 rounded-[20px] flex flex-col gap-6 shadow-lg">
        <Image src="/qr-code/image-qr-code.png" alt="qr code" width={288} height={288} className="w-full rounded-[10px]"/>
        <div className="flex flex-col gap-3 ">
          <h1 className="text-[#1F314F] font-bold text-[22px] leading-[1.2]" >
            Improve your front-en skills by building projects
          </h1>
          <p  className="text-[#68778D]  text-[15px] leading-[1.4] tracking-[0.2px]">
            Scan the QR code to visit Frontend Mentor and take your coding skills to the next level
          </p>
        </div>
      </div>
    </main>
  )
}

export default QrCode