import styled from "styled-components";
import Icon from "./Icon";

import starRegular from "../assets/star-regular.svg";

const Card = styled.div`
  background: #b1b1b1;
  border: 2px solid #d6d6d6;
  border-radius: 5px;
  padding: 10px 15px;
`;

const Title = styled.div`
  font-weight: 300;
  font-size: 24px;
`;

const Description = styled.div`
  color: white;
`;

interface MovieDetailsProps {
  title: string;
  description: string;
}

const MovieDetails = ({ title, description }: MovieDetailsProps) => {
  return (
    <Card>
      <Title>{title}</Title>
      <Icon src={starRegular} alt="rating star icon" />
      <Description>{description}</Description>
    </Card>
  );
};

export default MovieDetails;
