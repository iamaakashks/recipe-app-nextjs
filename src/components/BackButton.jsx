import Link from "next/link";

export default function Back({href}){
    return (
        <Link href={href} className="px-4 py-1.5 bg-blue-500 rounded-md absolute top-2 left-[306px] font-bold text-lg">Back</Link>
    )
}