import { Link } from "react-router-dom";
import { FiPhone } from "react-icons/fi";

export function Footer() {
  return (
    <>
      <div className="w-full space-y-5 md:flex md:space-y-0 md:justify-around px-3 py-8 sm:px-16 md:px-28 lg:px-32">
        <div>
          <h1 className="font-bold text-red-900">Contact</h1>
          <ul className="space-y-5 py-4 text-slate-600">
            <li className="flex items-center gap-2">
              <div className="rounded-full bg-slate-100 p-2.5">
                <FiPhone className="" />
              </div>
              <div className="flex flex-col text-sm sm:text-base">
                Phone:{" "}
                <Link
                  to="https://api.whatsapp.com/send/?phone=6282293105626"
                  target="_blank"
                  className="font-bold"
                >
                  +628113610692
                </Link>
              </div>
            </li>
            <li className="flex items-center gap-2">
              <div className="rounded-full bg-slate-100 p-2.5">
                <FiPhone className="" />
              </div>
              <div className="flex flex-col text-sm sm:text-base">
                Email:{" "}
                <Link to="mailto:naufaln176@gmail.com" target="_blank"
                className="font-bold">
                  yestrade.id@gmail.com
                </Link>
              </div>
            </li>
            <li className="flex items-center gap-2">
              <div className="rounded-full bg-slate-100 p-2.5">
                <FiPhone className="" />
              </div>
              <div className="flex flex-col text-sm sm:text-base">
                WA Pembelian dan Pengiriman Barang:{" "}
                <Link
                  to="https://api.whatsapp.com/send/?phone=6282293105626"
                  target="_blank"
                  className="font-bold"
                >
                  +6287869125583
                </Link>
              </div>
            </li>
            <li className="flex items-center gap-2">
              <div className="rounded-full bg-slate-100 p-2.5">
                <FiPhone className="" />
              </div>
              <div className="flex flex-col text-sm sm:text-base">
                Whatsapp Pembayaran:{" "}
                <Link
                  to="https://api.whatsapp.com/send/?phone=6282293105626"
                  target="_blank"
                  className="font-bold"
                >
                  +628113610692
                </Link>
              </div>
            </li>
          </ul>
        </div>
        <div>
          <h1 className="font-bold text-red-900">Halaman Lain</h1>
          <ul className="space-y-5 py-4 text-slate-600">
            <li>
              <Link to="/#blog" className="underline">Blog</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-red-950 px-4 text-sm py-4 sm:text-left sm:py-8 text-center font-bold text-white sm:px-16 md:px-28 lg:px-32">
        Copyright © 2023 Yestrade
      </div>
    </>
  );
}
