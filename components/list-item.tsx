import Icon from '@mdi/react';
import Image from 'next/image';
import Link from 'next/link';

export default function ListItem ({path, children, href, isNotIcon}: {path: string; children: string; href: string, isNotIcon?: boolean,}) {
    return (<li  className='border-primary1 glassmorphism relative cursor-pointer hover:scale-110 sub-heading duration-medium  max-w-[50rem] w-full border rounded-large text-primary1 p-extra-small'> 
        <Link href={href} className='h-full w-full'>
            {!isNotIcon ? <Icon className='left-2 absolute -translate-y-1/2 inset-y-1/2' path={path}  size={2}/> : <Image className='left-[5px] absolute -translate-y-1/2 inset-y-1/2 rounded-full' width={34} height={34} src={path} alt={`${children} logo`}></Image>}
            <p className='text-center sub-heading'>{children}</p>
        </Link>
    </li>)
}