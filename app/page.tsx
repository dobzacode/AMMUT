import ListItem from "@/components/list-item";
import social from "@/components/social";
import { dynamicBlurDataUrl } from "@/lib/utils";
import Image from "next/image";





export  default async function Home() {

  const blurImage = await dynamicBlurDataUrl("/DSC07907-2.jpg")

  return (
    <main className="flex min-h-screen gap-small relative flex-col items-center justify-center px-small bg-black">
      
      <ul className="w-full flex flex-col gap-small items-center relative z-50">
        {social.map(({name, href, path, isNotIcon}) => {return <ListItem key={name} path={path} href={href} isNotIcon={isNotIcon} >{name}</ListItem>})}</ul>
        <Image fill src={"/DSC07907-2.jpg"} placeholder='blur' blurDataURL={"/DSC07907-2.jpg"}  priority={true} alt="Ammut picture" className="object-cover object-[center_15%]"></Image>
        
     
    </main>
  )
}
