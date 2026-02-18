import Link from "next/link";

async function getPosts() {
  const res = await fetch("https://equran.id/api/surat");

  // Rekomendasi: Handle error secara manual
  if (!res.ok) {
    throw new Error("Gagal mengambil data");
  }

  return res.json();
}

export default async function Surah() {
  const surahQuran = await getPosts();

  return (
    <main className="">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 w-full">
        {surahQuran.map((surah: any) => (
          <Link href={`/surah/${surah.nomor}`} key={surah.nomor}>
            <div
              key={surah.nomor}
              className="flex justify-between rounded border border-gray-600 px-4 py-4  transition-colors hover:border-none hover:shadow-lg hover:shadow-green-600/50"
            >
              <div className="flex items-center gap-3">
                <div className="text-sm dark:text-gray-200">{surah.nomor}.</div>
                <div>
                  <div className="font-semibold">{surah.nama_latin}</div>
                  <div className="text-sm dark:text-gray-200">{surah.arti}</div>
                </div>
              </div>
              <div className="text-right">
                <div className="font-semibold">{surah.nama}</div>
                <div className="text-sm dark:text-gray-200">{surah.jumlah_ayat} Ayat</div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
