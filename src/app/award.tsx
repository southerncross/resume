interface AwardProps {
  locale: 'en-US' | 'zh-CN',
  content: {
    title: string;
  }[];
}

export default function Award({ locale, content }: AwardProps) {
  return (
    <>
      <h2 className="w-full mt-4 text-2xl text-left font-bold border-black border-b-2">
        {locale === 'en-US' ? 'Awards' : '荣誉奖项'}
      </h2>
      {content.map((item, index) => (
        <section key={index} className="mt-2">
          <h3 className="flex justify-between">
            <span>{item.title}</span>
          </h3>
        </section>
      ))}
    </>
  );
}
