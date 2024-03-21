import {promises as fs} from "fs";
import DemoPrev from "./DemoPrev";
import Link from "next/link";


async function Demos() {
  const file= await fs.readFile(process.cwd() + "/app/data.json","utf-8");
  const data=JSON.parse(file);
  return (
    <section className="w-full h-[400px]  mt-10">
      <div className=" flex top-8 justify-around items-center flex-wrap gap-y-10 w-[60%] h-full gap-x-32  relative sm:w-full  left-1/2 -translate-x-1/2 ">
        {data.map((slide)=>{
          return (
          <Link  key={slide.id} href={slide.url}>
            <DemoPrev url={slide.url} alt={slide.project}/>
          </Link>
          )
        })}
      </div>
    </section>
  )
}

export default Demos