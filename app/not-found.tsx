import Link from "next/link";

export default function NotFound() {
  return (
    <section className="text-black">
      <div className="flex flex-col items-center justify-center h-screen bg-indigo-50">
        <h1 className="text-6xl font-bold text-indigo-700">404</h1>
        <p className="mt-4 text-lg text-indigo-600">Page not found</p>
        <Link href="/" className="mt-6 px-4 py-2 text-white bg-indigo-700 rounded hover:bg-indigo-800">
          Go back home
        </Link>
      </div>
    </section>
  );
}
