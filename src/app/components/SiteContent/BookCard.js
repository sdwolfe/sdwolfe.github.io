import Image from "next/image";

export function BookCard({ book }) {
    return (
        <div className="max-w-md border border-gray-400 border-opacity-5 mx-auto pl-5 pt-0 mt-3 bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
            <div className="md:flex">
                <div className="md:shrink-0">
                <Image className=" object-top mt-5 h-full w-full pt-0 md:pt-0 object-contain md:h-full md:w-48 " height={250} width={350} src={book.coverImage} alt="Modern building architecture" />
                </div>
                <div className="pl-8 pr-8 pb-5 mt-3 pt-0">
                {/*<div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Company retreats</div>*/}
                <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">{book.bookTitle}</a>
                <p className="mt-2 text-slate-500">{book.bookDescription}</p>
                </div>
            </div>
        </div>  
    )
} 