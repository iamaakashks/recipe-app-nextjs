import Link from "next/link";

export default function Card({data}){
    return (
        <div className="w-72 bg-yellow-50 rounded-md m-auto p-2">
            <Link href={`/recipe-list/${data.id}`}>
                <div className="w-full h-full rounded-md hover:scale-110 hover:transition-all hover:duration-300">
                    <img className="h-full w-full object-cover rounded-md" src={data.image} alt={data.name} />
                </div>
                <div className="text-black mt-2 ml-2">
                    <h1 className="font-bold text-lg">{data.name}</h1>
                    <div className="flex items-center justify-between pr-8">
                        <h4 className="text-sm opacity-65">Rating: {data.rating}</h4>
                        <h4 className="font-bold opacity-65">{data.cuisine}</h4>
                    </div>
                </div>
            </Link>
        </div>
    )
}