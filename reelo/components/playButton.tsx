import React from 'react'
import {useRouter} from "next/router";
import { FaPlay } from "react-icons/fa6";

interface playButtonProps{
    movieId:string
}
const PlayButton : React.FC<playButtonProps> = ({movieId}) =>{
    const router = useRouter();
    return (
        <button
            onClick={() => router.push(`/watch/${movieId}`)}
            className={"bg-white rounded-full  py-1 md:py-2 px-2 md:px-4 w-auto text-xs lg:text-lg font-semibold flex flex-row items-center hover:bg-neutral-300 transition"}>

            <FaPlay string={20} className={"mr-1"}/>
            Play
        </button>
    )
}
export default PlayButton;