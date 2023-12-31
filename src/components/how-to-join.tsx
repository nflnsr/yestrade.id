import { AspectRatio } from "@/components/ui/aspect-ratio";

export function HowToJoin() {
  return (
    <>
      <div className="w-full px-6 py-10 text-white sm:px-16 md:px-28 lg:px-28">
        <div className="flex flex-col gap-7 bg-red-800 px-5 py-8 min-[450px]:px-10 sm:px-16 lg:px-2">
          <div className="text-center">
            <h1 className="py-5 text-3xl font-bold">
              Bingung bagaimana memulai?
            </h1>
            <p className="text-lg font-medium">
              Jangan khawatir kami menyediakan berbagai video untuk memulai
              dengan cepat
            </p>
          </div>
          <div className="lg:flex lg:gap-3 xl:px-5">
            <div className="size-full">
              <AspectRatio ratio={16 / 9}>
                <iframe
                  src="https://youtube.com/embed/ix3tymGnQE0"
                  title="Youtube Video"
                  className="size-full rounded-xl"
                ></iframe>
              </AspectRatio>
              <p className="mt-1 text-center text-sm underline sm:text-lg">
                Tutorial Impor Mudah
              </p>
            </div>
            <div className="size-full">
              <AspectRatio ratio={16 / 9}>
                <iframe
                  src="https://youtube.com/embed/x14lDEFQgnc"
                  title="Youtube Video"
                  className="size-full rounded-xl"
                ></iframe>
              </AspectRatio>

              <p className="mt-1 text-center text-sm underline sm:text-lg">
                Teknik Impor yang Profitable
              </p>
            </div>
            <div className="size-full">
              <AspectRatio ratio={16 / 9}>
                <iframe
                  src="https://youtube.com/embed/nnyziVsTqlM"
                  title="Youtube Video"
                  className="size-full rounded-xl"
                ></iframe>
              </AspectRatio>

              <p className="mt-1 text-center text-sm underline sm:text-lg">
                Tips Mencari Supplier
              </p>
            </div>
          </div>
          <div className="mx-auto pb-4">
            <button className="rounded-md bg-white px-5 py-2 font-semibold text-red-800">
              Lihat Lebih
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
