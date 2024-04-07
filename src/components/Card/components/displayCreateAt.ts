// 얼마 전에 만들었는지 알려주는 함수
const displayCreateAt = (createdAt: string) => {
  const date = new Date(createdAt);
  const now = Date.now();
  const milliSeconds: number = now - date.getTime();

  const seconds = milliSeconds / 1000;
  const minutes = seconds / 60;
  const hours = minutes / 60;
  const days = hours / 24;
  const months = days / 30;
  const years = months / 12;

  if (seconds < 60) {
    return "방금 전";
  } else if (minutes < 60) {
    return `${Math.floor(minutes)} minutes ago`;
  } else if (hours < 24) {
    return `${Math.floor(hours)} hours ago`;
  } else if (days < 30) {
    return `${Math.floor(days)} days ago`;
  } else if (months < 12) {
    return `${Math.floor(months)} month ago`;
  } else {
    return `${Math.floor(years)} years ago`;
  }
};

export default displayCreateAt;
