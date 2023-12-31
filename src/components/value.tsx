import { FaThumbsUp, FaPeopleCarry, FaCheck } from "react-icons/fa";
import { BsGraphUpArrow } from "react-icons/bs";

export function Value() {
  return (
    <div className=" w-full px-6 py-4 sm:px-16 md:px-28 lg:px-32">
      <div className="bg-slate-50 py-14 text-center">
        <h1 className="text-4xl font-bold text-red-900">Nilai Yestrade</h1>
        <div className="mt-5 flex flex-col gap-5 px-5 sm:grid sm:grid-cols-2 sm:grid-rows-2 lg:grid-cols-4 lg:grid-rows-1 text-red-900">
          <div className="mx-auto w-full max-w-[500px] hover:bg-red-700 hover:text-white bg-white px-4 py-8 text-lg font-semibold rounded-md shadow-lg ring-1 ring-slate-200">
            <FaThumbsUp size={48} className="mx-auto my-4" />
            Kepuasan Pelanggan
          </div>
          <div className="mx-auto w-full max-w-[500px] hover:bg-red-700 hover:text-white bg-white px-4 py-8 text-lg font-semibold rounded-md shadow-lg ring-1 ring-slate-200">
            <FaPeopleCarry size={48} className="mx-auto my-4" />
            Profesional dan Integritas
          </div>
          <div className="mx-auto w-full max-w-[500px] hover:bg-red-700 hover:text-white bg-white px-4 py-8 text-lg font-semibold rounded-md shadow-lg ring-1 ring-slate-200">
            <FaCheck size={48} className="mx-auto my-4" />
            Proses Simpel
          </div>
          <div className="mx-auto w-full max-w-[500px] hover:bg-red-700 hover:text-white bg-white px-4 py-8 text-lg font-semibold rounded-md shadow-lg ring-1 ring-slate-200">
            <BsGraphUpArrow size={48} className="mx-auto my-4" />
            Pengembangan Berkelanjutan
          </div>
        </div>
      </div>
    </div>
  );
}
