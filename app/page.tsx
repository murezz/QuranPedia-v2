import Link from "next/link";

export default async function Home() {
  return (
    <main className="p-4 flex items-center justify-center min-h-screen">
      <div className="text-center">
        <div className="mb-3">بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ</div>
        <div className="font-semibold">Welcome to QuranPedia v2</div>
        <div className="text-sm text-gray-300">app will be progress ...</div>
        <div className="mt-5">
          <Link
            href={`/surah/`}
            className="text-sm text-green-600 flex items-center gap-2 justify-center"
          >
            <span>Continue</span>{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-move-right-icon lucide-move-right"
            >
              <path d="M18 8L22 12L18 16" />
              <path d="M2 12H22" />
            </svg>
          </Link>
        </div>
      </div>
    </main>
  );
}
