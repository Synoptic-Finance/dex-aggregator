import Link from "next/link"

export const Footer = () => {
    return (
        <div className=" h-fit py-[3.5rem] sm:px-10 px-7 relative bottom-0 w-full flex justify-center flex-col items-center gap-y-2 text-white">
            <div className="bg-[#4500A0]/50 sm:h-[25vh] h-[45vh] w-[85%] mx-auto flex flex-col items-center justify-center gap-y-3">
                <h3 className="font-bold sm:text-3xl Nunito_Sans text-center">Subscribe to Synoptic Finance newsletter</h3>
                <p>Get the latest news and updates</p>
                <Link href="" className="inline-flex justify-center gap-x-1 py-4 sm:px-[5rem] px-12 border rounded-[20px] border-white items-center sm:text-semibold text-sm">
                    Subscribe {'>'}
                </Link>
            </div>
            <p className="text-[#1E1E1E]/50 font-medium text-md">&copy; 2023 Synoptic Finance, All Rights Reserved.</p>
        </div>
    )
}