import parse from 'html-react-parser';

async function getPosts(slug: string) {
  const res = await fetch(`https://equran.id/api/surat/${slug}`);

  // Rekomendasi: Handle error secara manual
  if (!res.ok) {
    throw new Error("Gagal mengambil data");
  }

  return res.json();
}

export default async function SurahDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const ayat = await getPosts(slug);

  return (
    <main className="">
      <div className="block md:flex">
        <div className="w-full md:w-1/3 pr-1">
          <div className="rounded-lg border border-gray-500 p-4 sticky top-10">
            <div className="mb-3 text-center ">
            {ayat.nama_latin} ( {ayat.arti} )
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div>
                  <h1>
                    Surah ke {ayat.nomor} 
                  </h1>
                  <p className="text-sm dark:text-gray-300 capitalize">
                    {ayat.tempat_turun} | {ayat.jumlah_ayat} ayat
                  </p>
                </div>
              </div>
              <div>
                <h1 className="text-4xl">{ayat.nama}</h1>
              </div>
            </div>
            {/* <div className="h-px w-full bg-linear-to-r from-transparent via-gray-500 to-transparent my-3"></div>
            <div>
              <div className="text-sm text-center">
                {parse(ayat.surat_selanjutnya.deskripsi)}
              </div>
            </div> */}
          </div>
          {/* <div className="h-full w-full bg-linear-to-r from-transparent via-gray-500 to-transparent"></div> */}
        </div>
        <div className="w-full md:w-2/3">
          {ayat.ayat &&
            ayat.ayat.map((surah: any) => (
              <div key={surah.nomor}>
                <div className="px-2 py-4">
                  <h2 className="text-right font-semibold text-xl mb-7">
                    {surah.ar}
                    <span className="text-xs px-2">({surah.nomor})</span>
                  </h2>
                  <p className="text-sm text-green-600">{surah.tr}</p>
                  <p className="text-sm dark:text-gray-300">{surah.idn}</p>
                </div>
                <div className="h-px w-full bg-linear-to-r from-transparent via-gray-500 to-transparent"></div>
              </div>
            ))}
        </div>
      </div>
    </main>
  );
}

{
  /* <h1>{ayat.nama_latin}</h1>
      <p>{ayat.tempat_turun}</p>
      {ayat.ayat && ayat.ayat.map((surah: any) => (
        <div key={surah.nomor}>
          <h2>{surah.nomor}</h2>
          <p>{surah.ar}</p>
        </div>
      ))} */
}
