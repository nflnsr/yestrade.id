import ConnectedWorldImg from "@/assets/img/connected-world.png";
// import ContainerImg from "@/assets/img/container.png"

export function HeroSection() {
  return (
    <>
      <div className="my-4 flex h-[100svh] w-full px-6 sm:px-16 md:px-28 lg:px-32">
        <div
          className={`mt-20 lg:mt-0 flex w-full flex-col items-center justify-center gap-8 bg-[url("../assets/img/container.jpg")] lg:w-3/5 lg:items-start lg:gap-20 lg:bg-none`}
        >
          <div className="bg-gray-200 lg:bg-transparent w-fit sm:w-full">
            <h1 className=" px-5 text-center text-3xl font-semibold text-red-800 md:text-5xl  lg:px-0 lg:text-left lg:font-bold">
              Ekspor Impor Jadi Mudah
            </h1>
          </div>
          <div className="flex flex-col gap-5 sm:flex-row lg:pl-8">
            <button className="rounded-md bg-red-700 px-5 py-2.5 text-white ring-2 ring-red-700">
              Impor
            </button>
            <button className="rounded-md bg-white px-5 py-2.5 text-red-700 ring-2 ring-red-700">
              Ekspor
            </button>
          </div>
        </div>
        <div className="hidden items-center justify-center lg:flex ">
          <img
            src={ConnectedWorldImg}
            alt=""
            className="w-full max-w-[480px]"
          />
        </div>
      </div>
    </>
  );
}
