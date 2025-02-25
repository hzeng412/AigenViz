export const GrowthTimeline = () => {
  return (
    <section className="flex flex-col py-9 pr-20 pl-7 mt-1 w-full bg-white rounded-lg max-md:px-5 max-md:max-w-full">
      <div className="flex flex-col w-full max-w-[1333px] max-md:max-w-full">
        <div className="flex flex-wrap gap-5 justify-between w-full max-md:max-w-full">
          <div className="flex gap-10 text-neutral-500 max-md:max-w-full">
            <div className="flex flex-col">
              <h2 className="text-xl font-bold tracking-wide">
                Sugar Beet Progress Timeline
              </h2>
              <time className="self-center mt-10 ml-3 text-base font-semibold leading-none text-center">
                01 May
              </time>
            </div>
            <time className="self-end mt-16 text-base font-semibold leading-none text-center max-md:mt-10">
              16 May
            </time>
          </div>
          <div className="flex gap-10 self-end mt-16 text-base font-semibold leading-none text-center text-black max-md:mt-10 max-md:max-w-full">
            <time className="text-neutral-500">01 July</time>
            <time>01 August</time>
            <time>15 August</time>
          </div>
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/7faa3eaaddc13402b21ae5ba33bba4f99ec098c06822b933b6fea8ec4b636f4b"
          className="object-contain self-end mt-4 mr-6 rounded-none aspect-[24.39] max-w-[1174px] w-[1174px] max-md:mr-2.5 max-md:max-w-full"
          alt="Growth timeline visualization"
        />
      </div>
      <p className="self-end mt-3.5 mr-72 text-sm font-semibold leading-none text-center text-black max-md:mr-2.5">
        Harvest
      </p>
      <div className="flex z-10 flex-col self-center -mt-2.5 w-full text-sm font-semibold leading-none text-center text-black max-w-[1224px] max-md:max-w-full">
        <p className="self-start">Germination</p>
        <p className="z-10 self-end mt-0">End of Harvest</p>
        <p className="self-start mt-0 ml-64 max-md:ml-2.5">Vegetative Growth</p>
        <p className="z-10 self-center -mt-3.5">Reproductive Stage</p>
      </div>
    </section>
  );
};
