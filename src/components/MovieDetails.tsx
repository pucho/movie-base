import styled from "styled-components";

const Card = styled.div`
  background: #b1b1b1;
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

const MovieDetails = () => {
  return (
    <Card>
      <Title>Movie Title</Title>
      <div>Rating</div>
      <Description>MovieDescription</Description>
    </Card>
  );
};

export default MovieDetails;
