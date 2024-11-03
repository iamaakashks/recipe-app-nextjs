import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen w-full">
        <h1 className="text-2xl text-center mt-12">Welcome to Reciipee</h1>
        <div className="text-center mt-4">
          <Link href="/recipe-list"><button className="px-4 py-1.5 bg-yellow-700 rounded-md">Explore Recipe List</button></Link>
        </div>
    </div>
  );
}
