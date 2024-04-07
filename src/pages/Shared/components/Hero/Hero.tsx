import S from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={S.hero}>
      <img className={S.userProfileImg} src="" alt="" />
      <p className={`font-16-regular ${S.userName}`}>@코드잇</p>
      <p className="font-40-bold">⭐️ 즐겨찾기</p>
    </section>
  );
};

export default Hero;
