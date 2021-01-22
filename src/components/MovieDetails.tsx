import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";

import { ReactComponent as ReactStar } from "../assets/star-regular.svg";
import { ReactComponent as ReactChevron } from "../assets/chevron.svg";
import { useState } from "react";

const Card = styled.div`
  background: #b1b1b1;
  border: 2px solid #d6d6d6;
  border-radius: 5px;
  margin: 0 auto;
  margin-bottom: 15px;
  max-width: 360px;
  padding: 10px 15px;
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
}

//TODO Fix border animation glitch
const MovieDetails = ({ title, description }: MovieDetailsProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div layout initial={{ borderRadius: 25 }}>
      <Card>
        <motion.div layout initial={{ borderRadius: 25 }}>
          <Title>
            {title}
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

        <motion.div layout>
          <ReactStar color="yellow" height={20} width={20} />
        </motion.div>

        <AnimatePresence>
          {isOpen && (
            <Description>
              <motion.div
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                {description}
              </motion.div>
            </Description>
          )}
        </AnimatePresence>
      </Card>
    </motion.div>
  );
};

export default MovieDetails;
