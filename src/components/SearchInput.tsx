import styled from "styled-components";

const Container = styled.div`
  display: flex;
  height: 45px;
  margin: 15px 0;
`;

const StyledSearch = styled.input`
  border: 2px solid #9f9f9f;
  border-radius: 5px;
  box-sizing: border-box;
  box-shadow: 1px 1px 1px 0px rgba(0, 0, 0, 0.25);
  color: #616161;
  font-size: 26px;
  height: 100%;
  margin: 0 auto;
  min-width: 390px;
`;

type SearchInputProps = {
  onUpdate: Function;
};

const SearchInput = (props: SearchInputProps) => {
  const { onUpdate } = props;
  return (
    <Container>
      <StyledSearch
        placeholder="Search..."
        onChange={(e) => {
          onUpdate(e.target.value);
        }}
      ></StyledSearch>
    </Container>
  );
};

export default SearchInput;
