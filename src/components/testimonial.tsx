export function Testimonial() {
  return (
    <>
      <div className="w-full bg-slate-50 px-8 py-8 sm:px-16 md:px-28 lg:px-32">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-950 sm:text-3xl ">
            Testimoni
          </h1>
          <p className="text-slate-600 text-lg mt-2">
            Kepuasan pelanggan adalah tujuan kami
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-6 text-slate-600 py-6">
          <div className="bg-white px-6 py-8 shadow-xl w-fit h-fit">
            <p>
              “Sudah setahun saya langganan jasa yestrade.id, layanannya
              memuaskan, selalu dikabarin dan pengiriman lancar. pemiliknya juga
              baik hati dan bernisiatif tinggi. Recommended deh tidak akan
              nyesel” Richard Putra Bisnis Millenial
            </p>
            <h5 className="mt-6 font-bold">Richard Putra</h5>
            <h5>Bisnis Millenial</h5>
          </div>
          <div className="bg-white px-6 py-8 shadow-xl w-fit h-fit">
            <p>
              “Proses pemesanan mudah dan cepat. Simple dan transparant.
              Pengiriman termasuk cepat. Senang bisa bekerjasama dengan
              YESTRADE” Stephen PT. Wistara Segawati
            </p>
            <h5 className="mt-6 font-bold">Stephen</h5>
            <h5>PT. Wistara Segawati</h5>
          </div>
          <div className="bg-white px-6 py-8 shadow-xl w-fit h-fit">
            <p>
              “Restock barang dari China, pakai forwarder yestrade. Selalu aman
              barangnya sampai di rumah dan harga ongkir bagus” Sheila Bonabee
            </p>
            <h5 className="mt-6 font-bold">Sheila</h5>
            <h5>Bonabee</h5>
          </div>
        </div>
      </div>
    </>
  );
}
