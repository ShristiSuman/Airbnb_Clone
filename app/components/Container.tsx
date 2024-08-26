'use client';

interface ContainerProps{
    children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({
    children
}) => {
    return(
        <div 
        className="
        max-w-[2520px] 
        mx-auto
        xl:px-20
        m:px-10
        s:px-2
        px-4
        "
        >
             {children} 
        </div>
    );
}

export default Container