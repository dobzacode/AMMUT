import ListItem from "@/components/list-item";
import { dynamicBlurDataUrl } from "@/lib/utils";
import { mdiInstagram, mdiSoundcloud, mdiSpotify } from "@mdi/js";
import Image from "next/image";

const social = [
  {
    name: "Instagram",
    path: mdiInstagram,
    href: "https://www.instagram.com/ammut_music/",
  },
  {
    name: "Spotify",
    path: mdiSpotify,
    href: "https://open.spotify.com/intl-fr/artist/5abcZtaPYTfNSI0c42JQft",
  },
  {
    name: "Soundcloud",
    path: mdiSoundcloud,
    href: "https://soundcloud.com/ammut-3000"
  }, 
  {
    name: "Deezer",
    path: "/deezer.png",
    href: "https://www.deezer.com/fr/artist/7708772"
  }
]

export  default async function Home() {

  const blurImage = await dynamicBlurDataUrl("/DSC07907-2.jpg")

  return (
    <main className="flex min-h-screen gap-small relative flex-col items-center justify-center px-small">
      
      <ul className="w-full flex flex-col gap-medium items-center relative z-50">
        {social.map(({name, href, path}) => {return <ListItem key={name} path={path} href={href} >{name}</ListItem>})}</ul>
        <Image fill src={"/DSC07907-2.jpg"} placeholder='blur' blurDataURL={blurImage} alt="Ammut picture" className="object-cover object-[center_15%]"></Image>
        
          
        
        <video autoPlay loop muted className="background-video">
        <source src="8mm.mov" type="video/quicktime" />
        Votre navigateur ne supporte pas la lecture de la vidéo.
      </video>
    </main>
  )
}
