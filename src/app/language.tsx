interface LanguageProps {
  locale: "en-US" | "zh-CN";
  content: {
    language: string;
    fluency: string;
  }[];
}

export default function Language({ locale, content }: LanguageProps) {
  return (
    <>
      <h2 className="w-full mt-4 text-2xl text-left font-bold border-black border-b-2">
        {locale === "en-US" ? "Languages" : "语言"}
      </h2>
      <section className="mt-2 flex">
        {content.map((item, index) => (
          <div key={index} className="flex-auto">
            <h3 className="font-bold">
              <span>{item.language}</span>
            </h3>
            <h4 className="italic">
              <span>{item.fluency}</span>
            </h4>
          </div>
        ))}
      </section>
    </>
  );
}
