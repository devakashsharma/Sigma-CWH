import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className="flex flex-col h-screen gap-6 justify-center items-center">
      <h2 className="text-5xl font-bold">Not Found</h2>
      <p className="text-gray-500 italic">Could not find requested resource</p>
      <Link href="/" className="text-blue-500 hover:underline">Return Home</Link>
    </div>
  )
}