import CommunityImg from "@/assets/img/community.png";
import { FaCheckCircle } from "react-icons/fa";

export function Benefit() {
  return (
    <>
      <div className="w-full px-6 sm:px-16 md:px-28 lg:px-32">
        <div>
          <img src={CommunityImg} alt="" className="mx-auto w-full max-w-[520px]" />
        </div>
        <div className="text-center">
          <div>
            <h1 className="text-3xl font-bold text-red-900">
              Keuntungan Member
            </h1>
            <p className="my-4 font-medium text-slate-600 sm:my-8 text-lg">
              Menjadi member Yestrade dapat menikmai berbagai fitur seperti:
            </p>
          </div>
          <div className="mx-auto w-full max-w-[300px] px-6 text-left font-semibold text-slate-600 sm:max-w-fit">
            <ul className="flex flex-col gap-4 sm:gap-y-6 sm:grid sm:grid-cols-2 sm:gap-x-20 lg:gap-x-64">
              <li className="flex items-center gap-2 leading-none">
                <FaCheckCircle className="inline-block size-5 shrink-0 text-red-700" />
                <span>Gratis video pembelajaran</span>
              </li>
              <li className="flex items-center gap-2 leading-none">
                <FaCheckCircle className="inline-block size-5 shrink-0 text-red-700" />
                <span>Konsultasi 24/7</span>
              </li>
              <li className="flex items-center gap-2 leading-none">
                <FaCheckCircle className="inline-block size-5 shrink-0 text-red-700" />
                <span>Harga Kompetitif</span>
              </li>
              <li className="flex items-center gap-2 leading-none">
                <FaCheckCircle className="inline-block size-5 shrink-0 text-red-700" />
                <span>Pemberitahuan realtime</span>
              </li>
              <li className="flex items-center gap-2 leading-none">
                <FaCheckCircle className="inline-block size-5 shrink-0 text-red-700" />
                <span>Garansi 100%</span>
              </li>
              <li className="flex items-center gap-2 leading-none">
                <FaCheckCircle className="inline-block size-5 shrink-0 text-red-700" />
                <span>Respon Cepat</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
