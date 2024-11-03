import Link from "next/link";

export default function NotFound(){
    return (
        <div className="w-full min-h-screen flex justify-center items-center">
            <div className="flex flex-col items-center gap-4">
                <h1 className="font-bold text-3xl">404 Page Not Found</h1>
                <Link href="/"><button className="px-4 py-1.5 bg-blue-500 rounded-md">Home</button></Link>
            </div>
        </div>
    )
}