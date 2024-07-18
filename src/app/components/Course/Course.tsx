import Image from "next/image";

type CourseProps = {
    thumbnail: string;
    title: string;
    description: string;
};

function Course ({ thumbnail, title, description }: CourseProps){
    return (
        <div className="bg-purple-200 p-4 rounded-lg shadow-md w-60 mx-2">
            <Image 
                src={thumbnail} 
                alt={title} 
                width={60} 
                height={60} 
                className="rounded-full mx-auto"
            />
            <div className="text-center mt-4">
                <h2 className="font-bold text-lg"> {title} </h2>
                <p className="mt-2 text-sm text-gray-600"> {description} </p> 
                <button className="mt-4 bg-white text-purple-600 font-semibold py-2 px-4 rounded-full">
                    Lihat Detail
                </button>
            </div>
        </div>
    )
}

export type {CourseProps};
export {Course};