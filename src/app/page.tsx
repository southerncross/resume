import Work from "./work";
import Education from "./education";
import Award from "./award";
import Skill from './skill';
import BasicInfo from "./basic-info";
import Language from "./language";

import { standardResume as resume } from "./data";

export default function Home() {
  const locale = 'en-US';
  return (
    <main className="max-w-screen-md min-h-screen px-12">
      <BasicInfo {...resume.basicInfo} locale={locale}/>
      <Work content={resume.work} locale={locale}/>
      <Education content={resume.education} locale={locale}/>
      <Award content={resume.award} locale={locale}/>
      <Skill content={resume.skill} locale={locale}/>
      {resume.language.length > 0 && <Language content={resume.language} locale={locale}/>}
    </main>
  );
}
