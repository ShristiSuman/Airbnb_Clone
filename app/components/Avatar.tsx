'use client';

import Image from "next/image";

interface avatarProps{
src: string | null | undefined;
};

const Avatar:React.FC<avatarProps> = ({
    src
}) =>{
    return(
        <Image 
            className="rounded-full"  
                height="30" 
                width="30" 
                alt="Avatar" 
                src={src || "/Images/avatar.png"}
        />
    );
}

export default Avatar;