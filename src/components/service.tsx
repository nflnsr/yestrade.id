import PersonShakeHandImg from "@/assets/img/person-shakehand.png";
import { FaTruckFast } from "react-icons/fa6";
import { FaMoneyCheckAlt, FaShoppingCart } from "react-icons/fa";
import { IoBusiness } from "react-icons/io5";
import { Link } from "react-router-dom";

export function Service() {
  return (
    <>
      <div className="w-full my-10 lg:my-0 lg:py-14 lg:flex lg:items-center lg:justify-center lg:pl-28 lg:pr-40 2xl:pl-36 2xl:pr-56 ">
        <div className="hidden w-[50%] md:block md:mx-auto">
          <img src={PersonShakeHandImg} alt="" />
        </div>

        <div className="text-center lg:w-[50%] lg:text-left">
          <div className="mx-auto max-w-[840px] px-6 sm:px-16 md:px-28 lg:px-0">
            <h1 className="text-4xl font-bold text-red-800">Layanan Kami</h1>
            <p className="my-4 text-lg font-medium text-slate-500">
              Kami berkomitmen menyediakan layanan yang berkualitas dan
              memuaskan
            </p>
          </div>
          <div className="mx-auto flex max-w-[860px] flex-col place-items-center items-center justify-center gap-8 px-12 text-center max-[450px]:px-4 md:grid md:grid-cols-2 lg:flex lg:px-0 lg:text-left">
            <div className="h-full w-full max-w-[450px] rounded-lg bg-slate-50 px-5 py-7 shadow-lg hover:bg-white lg:flex lg:max-w-full lg:items-center lg:gap-5">
              <div className="mx-auto h-fit w-fit rounded-full bg-purple-100 p-5 text-red-800 lg:mx-0">
                <Link to="/pembelian">
                  <FaShoppingCart size={32} />
                </Link>
              </div>
              <div>
                <h5 className="pb-2 pt-5 text-lg font-bold text-red-900 hover:underline lg:py-0">
                  <Link to="/pembelian">Pembelian</Link>
                </h5>
                <p className="text-lg font-medium">
                  Pembelian barang melalui marketplace china seperti alibaba,
                  taobao, dan 1688 dengan mudah
                </p>
              </div>
            </div>
            <div className="h-full w-full max-w-[450px] rounded-lg bg-slate-50 px-5 py-7 shadow-lg hover:bg-white lg:flex lg:max-w-full lg:items-center lg:gap-5">
              <div className="mx-auto h-fit w-fit rounded-full bg-purple-100 p-5 text-red-800 lg:mx-0">
                <Link to="/pengiriman">
                  <FaTruckFast size={32} />
                </Link>
              </div>
              <div>
                <h5 className="pb-2 pt-5 text-lg font-bold text-red-900 hover:underline lg:py-0">
                  <Link to="/pengiriman">Pengiriman</Link>
                </h5>
                <p className="text-lg font-medium">
                  Pengiriman barang yang aman dan cepat melalui air atau udara
                  ke lebih dari 400 kota di Indonesia
                </p>
              </div>
            </div>
            <div className="h-full w-full max-w-[450px] rounded-lg bg-slate-50 px-5 py-7 shadow-lg hover:bg-white lg:flex lg:max-w-full lg:items-center lg:gap-5">
              <div className="mx-auto h-fit w-fit rounded-full bg-purple-100 p-5 text-red-800 lg:mx-0">
                <Link to="/pembayaran">
                  <FaMoneyCheckAlt size={32} />
                </Link>
              </div>
              <div>
                <h5 className="pb-2 pt-5 text-lg font-bold text-red-900 hover:underline lg:py-0">
                  <Link to="/pembayaran">Pembayaran</Link>
                </h5>
                <p className="text-lg font-medium">
                  Siap membantu pembayaran yang cepat ke supplier China dengan
                  biaya yang kompetitif
                </p>
              </div>
            </div>
            <div className="h-full w-full max-w-[450px] rounded-lg bg-slate-50 px-5 py-7 shadow-lg hover:bg-white lg:flex lg:max-w-full lg:items-center lg:gap-5">
              <div className="mx-auto h-fit w-fit rounded-full bg-purple-100 p-5 text-red-800 lg:mx-0">
                <Link to="/pengembangan-pasar">
                  <IoBusiness size={32} />
                </Link>
              </div>
              <div>
                <h5 className="pb-2 pt-5 text-lg font-bold text-red-900 hover:underline lg:py-0">
                  <Link to="/pengembangan-pasar">Pengembangan Pasar</Link>
                </h5>
                <p className="text-lg font-medium">
                  Pengembangan pasar yang cepat dan efisien berdasarkan data
                  yang telah dikumpulkan
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
