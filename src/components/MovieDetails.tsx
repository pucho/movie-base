import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";

import { ReactComponent as ReactChevron } from "../assets/chevron.svg";
import { useState } from "react";

const Card = styled.div`
  background: #b1b1b1;
  border: 2px solid #d6d6d6;
  border-radius: 5px;
  margin: 0 auto;
  margin-bottom: 5px;
  max-width: 360px;
  padding: 10px 15px 20px 15px;
`;

const Title = styled.div`
  font-weight: 300;
  font-size: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Description = styled.div`
  color: white;
`;

interface MovieDetailsProps {
  title: string;
  description: string;
  poster: string;
}

//TODO Fix border animation glitch
//TODO placeholder for movie poster
//TODO check animation for already present items
const MovieDetails = ({ title, description, poster }: MovieDetailsProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div layout initial={{ borderRadius: 25 }}>
      <Card>
        <motion.div layout initial={{ borderRadius: 25 }}>
          <Title>
            <div>{title}</div>
            <ReactChevron
              height={20}
              width={20}
              transform={isOpen ? "rotate(180)" : undefined}
              onClick={(e) => {
                setIsOpen(!isOpen);
              }}
              color="gray"
            />
          </Title>
        </motion.div>
        <AnimatePresence>
          {isOpen && (
            <Description>
              <motion.div
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  textAlign: "justify",
                }}
              >
                {description}
                <img
                  src={`https://image.tmdb.org/t/p/w342/${poster}`}
                  width={342}
                  height={512}
                  style={{ marginTop: "10px", alignSelf: "center" }}
                  alt="Movie poster"
                />
              </motion.div>
            </Description>
          )}
        </AnimatePresence>
      </Card>
    </motion.div>
  );
};

export default MovieDetails;
