interface WorkProps {
  locale: 'en-US' | 'zh-CN',
  content: {
    company: string;
    location: string;
    position: string;
    date: string;
    details: string[];
  }[];
}

export default function Work({ locale, content }: WorkProps) {
  return (
    <>
      <h2 className="w-full mt-4 text-2xl text-left font-bold border-black border-b-2">
        {locale === 'en-US' ? 'Work Experience' : '工作经历'}
      </h2>
      {content.map((item, index) => (
        <section key={index} className="mt-2">
          <h3 className="flex justify-between font-bold">
            <span>{item.company}</span>
            <span>{item.location}</span>
          </h3>
          <h4 className="flex justify-between italic">
            <span>{item.position}</span>
            <span>{item.date}</span>
          </h4>
          <ul className="mt-2 list-inside list-disc">
            {item.details.map((detail, index) => (
              <li key={index} dangerouslySetInnerHTML={{ __html: detail}} />
            ))}
          </ul>
        </section>
      ))}
    </>
  );
}
