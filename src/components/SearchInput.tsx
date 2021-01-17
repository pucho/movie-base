import styled from "styled-components";

const Container = styled.div`
  height: 45px;
`;

const StyledSearch = styled.input`
  border: 2px solid #d6d6d6;
  border-radius: 5px;
  box-sizing: border-box;
  color: #616161;
  font-size: 26px;
  height: 100%;
  width: 100%;
`;

const SearchInput = () => {
  return (
    <Container>
      <StyledSearch placeholder="Search..."></StyledSearch>
    </Container>
  );
};

export default SearchInput;
