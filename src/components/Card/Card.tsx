import { useEffect, useState } from "react";
import S from "./Card.module.css";
import { sampleFolderData } from "../../api/api";
import { SampleFolder } from "../../type/type";
import { Link } from "react-router-dom";

const Card = () => {
  const [card, setCard] = useState<SampleFolder>();

  useEffect(() => {
    async function fetchData() {
      const data = await sampleFolderData();
      setCard(data);
    }
    fetchData();
  }, []);

  const createDate = (date: string): string => {
    const newDate = new Date(date);
    const year = newDate.getFullYear();
    const month = String(newDate.getMonth() + 1).padStart(2, "0");
    const day = String(newDate.getDate()).padStart(2, "0");
    const formattedDate = `${year}.${month}.${day}`;
    return formattedDate;
  };

  const srcError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = "/public/assets/images/card-default.png";
  };

  return (
    <article className={S.cardContainer}>
      {card &&
        card.folder.links.map((link) => (
          <Link key={link.id} to={link.url} className={S.card} target="_blank">
            <img
              className={S.cardImage}
              src={
                link.imageSource
                  ? link.imageSource
                  : "/public/assets/images/card-default.png"
              }
              onError={srcError}
              alt="카드 이미지"
            />
            <div className={S.descriptionContainer}>
              <p className={`font-13-regular ${S.cardMinutesAgo}`}>
                10 minutes ago
              </p>
              <p className={`font-16-regular ${S.cardText}`}>
                {link.description}
              </p>
              <p className={`font-14-regular ${S.cardCreatedAt}`}>
                {createDate(link.createdAt)}
              </p>
            </div>
          </Link>
        ))}
    </article>
  );
};

export default Card;
