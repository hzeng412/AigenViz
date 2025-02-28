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
    <article className="flex-none w-[400px] overflow-hidden py-1 leading-none bg-white rounded-xl border border-solid">
      <img
        loading="lazy"
        src={imageUrl}
        className="object-cover w-full aspect-[1.69]"
        alt={`${stage} visualization`}
      />
      <div className="flex flex-col items-start px-5 pb-4 mt-3.5">
        <h3 className="text-xl font-semibold text-neutral-800">{stage}</h3>
        <time className="mt-3 text-base text-neutral-600">{date}</time>
      </div>
    </article>
  );
};
