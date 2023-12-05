import ListItem from "@/components/list-item";
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

export default function Home() {
  return (
    <main className="flex min-h-screen gap-small relative flex-col items-center justify-center px-extra-small">
      
      <ul className="w-full flex flex-col gap-medium items-center relative z-50">
        {social.map(({name, href, path}) => {return <ListItem key={name} path={path} href={href} >{name}</ListItem>})}</ul>
        <Image fill src={"/DSC07907-2.jpg"} alt="Ammut picture" className="object-cover object-[20%_15%]"></Image>
        
          
        
        
    </main>
  )
}
