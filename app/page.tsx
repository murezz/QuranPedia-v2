// app/posts/page.tsx

async function getPosts() {
  const res = await fetch("https://equran.id/api/surat");

  // Rekomendasi: Handle error secara manual
  if (!res.ok) {
    throw new Error("Gagal mengambil data");
  }

  return res.json();
}

export default async function Home() {
  const surahQuran = await getPosts();

  return (
    <main className="p-4 flex items-center justify-center h-screen">
      {/* <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {surahQuran.map((surah: any) => (
          <div key={surah.nomor} className="rounded border border-gray-400 px-3 py-2">
            <h2 className="font-bold">{surah.nama_latin}</h2>
          </div>
        ))}
      </div> */}
      <div className="text-center">
        <div className="mb-3">بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ</div>
        <div className="font-semibold">Welcome to QuranPedia v2</div>
        <div className="text-sm text-gray-300">app will be coming soon</div>
      </div>
    </main>
  );
}
