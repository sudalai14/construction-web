import React from "react";
import styled, { keyframes } from "styled-components";
import pro1 from "../assets/pro1.jpg";
import pro2 from "../assets/pro2.jpg";
import pro3 from "../assets/pro3.jpg";
import pro4 from "../assets/pro4.jpg";
import pro5 from "../assets/pro5.jpg";
import pro6 from "../assets/pro6.jpg";


const images = [pro1, pro2, pro3, pro4, pro5, pro6, pro4, pro3];

const Projects = () => {
  return (
    <Container>
      <Heading>Our Projects</Heading>
      <Description>Discover our latest and greatest construction projects...</Description>
      <ImageWrapper>
        <ImageList>
          {images.map((image, index) => (
            <ImageContainer key={index}>
              <SquareCard>
                <Image src={image} alt={`Project ${index + 1}`} />
              </SquareCard>
            </ImageContainer>
          ))}
          {images.map((image, index) => (
            <ImageContainer key={index}>
              <SquareCard>
                <Image src={image} alt={`Project ${index + 1}`} />
              </SquareCard>
            </ImageContainer>
          ))}
        </ImageList>
      </ImageWrapper>
    </Container>
  );
};

const Container = styled.div`
  padding: 20px;
  background-color: white;
`;

const Heading = styled.h2`
  text-align: center;
  font-size: 2rem;
  margin-bottom: 10px;
`;

const Description = styled.p`
  text-align: center;
  color: #666;
  font-size: 1rem;
  margin-bottom: 20px;
`;

const ImageWrapper = styled.div`
  overflow: hidden;
`;

const ImageList = styled.ul`
  display: flex;
  padding: 0;
  animation: scroll 20s linear infinite;
  @media (max-width: 768px) {
    animation-duration: 10s; /* Faster animation on small screens */
  }

  @keyframes scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-${150 * images.length}px); /* Adjust this value based on the number of images and their size */
    }
  }
`;

const ImageContainer = styled.li`
  list-style: none;
  margin-right: 10px;
`;

const SquareCard = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export default Projects;
