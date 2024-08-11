interface EducationProps {
  locale: 'en-US' | 'zh-CN',
  content: {
    school: string;
    location: string;
    degree: string;
    date: string;
  }[];
}

export default function Education({ locale, content }: EducationProps) {
  return (
    <>
      <h2 className="w-full mt-4 text-2xl text-left font-bold border-black border-b-2">
        {locale === 'en-US' ? 'Education' : '教育经历'}
      </h2>
      {content.map((item, index) => (
        <section key={index} className="mt-2">
          <h3 className="flex justify-between font-bold">
            <span>{item.school}</span>
            <span>{item.location}</span>
          </h3>
          <h4 className="flex justify-between italic">
            <span>{item.degree}</span>
            <span>{item.date}</span>
          </h4>
        </section>
      ))}
    </>
  );
}
