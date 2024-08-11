interface BasicInfoProps {
  locale: 'en-US' | 'zh-CN',
  name: string;
  location: string;
  email: string;
  phone: string;
  blog: string;
};

export default function BasicInfo({ name, location, email, phone, blog }: BasicInfoProps) {
  return (
    <>
      <h1 className="mb-2 text-4xl text-center font-bold">{name}</h1>
      <section className="text-center">
        {location} | {phone} | {email} | <a href={blog} target="_blank">{blog}</a>
      </section>
    </>
  );
}
