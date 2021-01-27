import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";

import { ReactComponent as ReactChevron } from "../assets/chevron.svg";
import { useState } from "react";

const Card = styled.div`
  background: #81b29a;
  border: 2px solid #f4f1de;
  border-radius: 10px;
  box-shadow: 1px 1px 1px 0px #cecdc2;
  color: white;
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

const PosterImg = styled.img`
  margin-top: 10px;
  align-self: center;
`;

interface MovieDetailsProps {
  title: string;
  description: string;
  poster: string;
}

//TODO check animation for already present items
//TODO check fade in/out of description/poster
const MovieDetails = ({ title, description, poster }: MovieDetailsProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Card as={motion.div} layout>
      <motion.div layout>
        <Title>
          <div>{title}</div>
          <ReactChevron
            height={20}
            width={20}
            transform={isOpen ? "rotate(180)" : undefined}
            onClick={(e) => {
              setIsOpen(!isOpen);
            }}
            color="#f4f1de"
          />
        </Title>
      </motion.div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.5, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <Description
              as={motion.div}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              exit={{ opacity: 0 }}
              style={{
                display: "flex",
                flexDirection: "column",
                textAlign: "justify",
              }}
            >
              {description}
              <PosterImg
                src={`https://image.tmdb.org/t/p/w342/${poster}`}
                width={342}
                height={512}
                alt="Movie poster"
              />
            </Description>
          </motion.div>
        )}
      </AnimatePresence>
    </Card>
  );
};

export default MovieDetails;
