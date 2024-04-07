import S from "./Footer.module.css";

const SNS_IMAGES = [
  "/public/assets/images/icons/facebook-icon.png",
  "/public/assets/images/icons/twitter-icon.png",
  "/public/assets/images/icons/youtube-icon.png",
  "/public/assets/images/icons/instagram-icon.png",
];

const Footer = () => {
  return (
    <footer>
      <section className={S.footerContainer}>
        <p className={`font-16-regular ${S.text}`}>©codeit - 2023</p>
        <div className={S.footerTexts}>
          <p className={`font-16-regular ${S.centerText}`}>Privacy Policy</p>
          <p className={`font-16-regular ${S.centerText}`}>FAQ</p>
        </div>
        <div className={S.iconContainer}>
          {SNS_IMAGES.map((image, index) => (
            <img key={index} src={image} alt="sns 아이콘" />
          ))}
        </div>
      </section>
    </footer>
  );
};

export default Footer;
