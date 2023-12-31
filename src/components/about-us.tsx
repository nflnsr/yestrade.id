import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Separator } from "@/components/ui/separator";
import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { CountUp } from "countup.js";

export function AboutUs() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  const countupRef = useRef<HTMLHeadingElement[]>([]);
  const countUpAnim = [
    new CountUp("0", 0),
    new CountUp("0", 0),
    new CountUp("0", 0),
  ];

  useEffect(() => {
    if (inView) {
      initCountUp();
    }
  }, [inView]);

  async function initCountUp() {
    const countUpModule = await import("countup.js");
    countUpAnim[0] = new countUpModule.CountUp(
      countupRef.current[0] as HTMLHeadingElement,
      126,
      { useEasing: false, duration: 3.5 },
    );
    countUpAnim[1] = new countUpModule.CountUp(
      countupRef.current[1] as HTMLHeadingElement,
      280,
      { useEasing: false, duration: 3.5 },
    );
    countUpAnim[2] = new countUpModule.CountUp(
      countupRef.current[2] as HTMLHeadingElement,
      135,
      { useEasing: false, duration: 3.5 },
    );
    if (
      !countUpAnim[0].error &&
      !countUpAnim[1].error &&
      !countUpAnim[2].error
    ) {
      countUpAnim.forEach((countUp) => countUp.start());
    } else {
      countUpAnim.forEach((countUp) => {
        if (countUp.error) {
          console.error(countUp.error);
        }
      });
    }
  }

  return (
    <>
      <div className="px-6 sm:px-16 md:px-28 lg:px-32 max-w-[1080px] mx-auto">
        <h1 className="px-4 text-center text-3xl font-bold text-red-900">
          Tentang Kami
        </h1>
        <p className="px-7 pt-5 text-center text-[1.1rem] text-slate-500">
          YESTRADE adalah perusahaan perdagangan internasional yang berdiri
          tahun 2019 di Jakarta. Selama beberapa tahun ini, YESTRADE telah
          mendapatkan kepercayaan pasar, dengan menyediakan pelayanan bisnis
          internasional yang mudah, simple, transparant dan terpercaya.
        </p>
        <p className="mt-5 px-7 text-center text-[1.1rem] text-slate-500">
          Fokus YESTRADE saat ini adalah menyediakan jasa pembelian barang, jasa
          pengiriman barang dan jasa pembayaran barang dari China dengan cara
          yang mudah, dan transparan. Di tahun 2021, YESTRADE mulai focus untuk
          membantu pengusaha Indonesia untuk melakukan ekspor ke seluruh dunia.
        </p>
      </div>
      <div className="relative mt-[20%] px-6 sm:px-16 md:px-28 lg:px-40">
        <div className="w-full bg-[url('../assets/img/pattern.svg')]">
          <div className="mx-auto bg-red-950">
            <AspectRatio ratio={20 / 9} className="relative h-full w-full ">
              <div className="-mt-[20%] h-full px-[10%] ">
                <iframe
                  src="https://www.youtube.com/embed/OrbLKSCrDL4"
                  title="Video Yestrade"
                  allowFullScreen
                  className="h-full w-full rounded-lg shadow-2xl"
                ></iframe>
              </div>
              <div
                ref={ref}
                className="absolute top-[60%] flex w-full items-center justify-evenly text-center text-[3.5vw] font-bold text-white md:text-[2.5vw]"
              >
                <div>
                  <h2
                    ref={(refnya) => (countupRef.current[0] = refnya!)}
                    className="inline-block"
                  />
                  +<p>Anggota</p>
                </div>
                <Separator
                  orientation="vertical"
                  className="mt-2 h-[8.5svw] bg-white"
                />
                <div>
                  <h2
                    ref={(refnya) => (countupRef.current[1] = refnya!)}
                    className="inline-block"
                  />
                  +<p>Transaksi</p>
                </div>
                <Separator
                  orientation="vertical"
                  className="mt-2 h-[8.5svw] bg-white"
                />
                <div>
                  <h2
                    ref={(refnya) => (countupRef.current[2] = refnya!)}
                    className="inline-block"
                  />
                  +<p>Pengiriman</p>
                </div>
              </div>
            </AspectRatio>
          </div>
        </div>
      </div>
    </>
  );
}
