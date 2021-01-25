import { ReactComponent as SolidStar } from "../assets/star-solid.svg";
import { ReactComponent as OutlineStar } from "../assets/star-regular.svg";

type RatingFilterProps = {
  ratingIndex: number | null;
  onChange?: Function;
};
const RatingFilter = ({ ratingIndex, onChange }: RatingFilterProps) => {
  const starRating = () => {
    let items = [];
    for (let index = 0; index < 5; index++) {
      ratingIndex !== null && ratingIndex >= index
        ? items.push(
            <SolidStar
              color="#ffef00"
              height={20}
              width={20}
              key={`star-${index}`}
              onClick={(e) => {
                e.preventDefault();

                onChange && onChange(index);
              }}
            />
          )
        : items.push(
            <OutlineStar
              color="#ffef00"
              height={20}
              width={20}
              key={`star-${index}`}
              onClick={(e) => {
                e.preventDefault();
                onChange && onChange(index);
              }}
            />
          );
    }
    return items.map((item) => item);
  };

  return <div style={{ padding: "0px 15px" }}>{starRating()}</div>;
};

export default RatingFilter;
