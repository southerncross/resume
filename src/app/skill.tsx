interface SkillProps {
  locale: 'en-US' | 'zh-CN',
  content: {
    detail: string;
  }[];
}

export default function Skill({ locale, content }: SkillProps) {
  return (
    <>
      <h2 className="w-full mt-4 text-2xl text-left font-bold border-black border-b-2">
        {locale === 'en-US' ? 'Skills' : '技能优势'}
      </h2>
      {content.map((item, index) => (
        <section key={index} className="mt-2">
          <h3>
            {item.detail}
          </h3>
        </section>
      ))}
    </>
  );
}
