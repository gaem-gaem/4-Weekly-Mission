import { useEffect, useState } from "react";

import S from "./Hero.module.css";

import { sampleFolderData } from "@src/api/api";
import { SampleFolder } from "@src/type/type";

const Hero = () => {
  const [sampleFolder, setSampleFolder] = useState<SampleFolder>();
  // 창 크기 바뀌기 전에는 아무 클래스도 적용 안되어 있어서 기본 값으로 적용
  const [userNameFontSizeClass, setUserNameFontSizeClass] =
    useState("font-16-regular");
  const [nameFontSizeClass, setNameFontSizeClass] = useState("font-40-bold");

  // 텍스트 반응형 클래스로 적용
  useEffect(() => {
    const handleResize = () => {
      setUserNameFontSizeClass(
        window.innerWidth <= 768 ? "font-14-regular" : "font-16-regular"
      );
      setNameFontSizeClass(
        window.innerWidth <= 768 ? "font-32-bold" : "font-40-bold"
      );
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    async function fetchData() {
      const data = await sampleFolderData();
      setSampleFolder(data);
    }
    fetchData();
  }, []);

  return (
    <section className={S.hero}>
      {sampleFolder && (
        <div className={S.heroContainer}>
          <img
            className={S.userProfileImg}
            src={sampleFolder.folder.owner.profileImageSource}
            alt="사용자 프로필 이미지"
          />
          <p className={`${userNameFontSizeClass} ${S.userName}`}>
            {sampleFolder.folder.owner.name}
          </p>
          <p className={nameFontSizeClass}>{sampleFolder.folder.name}</p>
        </div>
      )}
    </section>
  );
};

export default Hero;
