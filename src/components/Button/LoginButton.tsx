import { useEffect, useState } from "react";
import "./LoginButton.module.css";

const LoginButton = () => {
  const [fontSizeClass, setFontSizeClass] = useState("font-18-bold");

  // button 텍스트 반응형 클래스로 적용
  useEffect(() => {
    const handleResize = () => {
      setFontSizeClass(
        window.innerWidth <= 768 ? "font-14-bold" : "font-18-bold"
      );
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <button className={fontSizeClass}>로그인</button>;
};

export default LoginButton;
