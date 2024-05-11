import Image from "next/image";
import { Inter } from "next/font/google";
import Lines from "./Componants/Lines";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={` ${inter.className}`}>
      <div className="">
        <Lines />
      </div>
    </main>
  );
}
