interface GrowthStageCardProps {
  imageUrl: string;
  stage: string;
  date: string;
}

export const GrowthStageCard: React.FC<GrowthStageCardProps> = ({
  imageUrl,
  stage,
  date,
}) => {
  return (
    <article className="overflow-hidden py-1 leading-none bg-white rounded-xl border border-solid max-md:max-w-full">
      <img
        loading="lazy"
        src={imageUrl}
        className="object-contain w-full aspect-[1.69] max-md:max-w-full"
        alt={`${stage} visualization`}
      />
      <div className="flex flex-col items-start pr-20 pb-4 pl-5 mt-3.5 bg-black bg-opacity-0 max-md:pr-5 max-md:max-w-full">
        <h3 className="text-xl font-semibold text-neutral-800">{stage}</h3>
        <time className="mt-3 text-base text-neutral-600">{date}</time>
      </div>
    </article>
  );
};
