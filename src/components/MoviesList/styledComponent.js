import styled from 'styled-components';

const List = styled.ul`
  max-width: 1000px;
  margin: 0 auto 50px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;
const ListItem = styled.li`
  position: relative;
  width: 400px;
  height: 500px;
  margin-bottom: 20px;
  perspective: 1000px;

  &:hover .front {
    transform: rotateY(180deg);
  }
  &:hover .back {
    transform: rotateY(360deg);
  }
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border: 2px solid grey;
  border-radius: 1rem;
  filter: grayscale(84%);
`;
const Title = styled.h2`
  text-align: center;
  font-size: 1.6rem;
  color: #fff;
  font-weight: 800;
  position: absolute;
  left: 50%;
  bottom: 10%;
  transform: translateX(-50%);

  text-shadow: 0 0 6px rgba(202, 228, 225, 0.92),
    0 0 30px rgba(202, 228, 225, 0.34), 0 0 12px rgba(30, 132, 242, 0.52),
    0 0 21px rgba(30, 132, 242, 0.92), 0 0 34px rgba(30, 132, 242, 0.78),
    0 0 54px rgba(30, 132, 242, 0.92);
`;

const FrontItem = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  transition: transform 1s;
  backface-visibility: hidden;
  border: 2px solid grey;
  border-radius: 1rem;
`;
const BackItem = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 1);
  transition: transform 1s;
  backface-visibility: hidden;
  transform: rotateY(180deg);
  border: 2px solid grey;
  border-radius: 1rem;
`;
const ReleaseData = styled.p`
  text-align: center;
  font-size: 1.6rem;
  color: #ffdf40;
  font-weight: 800;
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translateX(-50%);
`;

export { ReleaseData, FrontItem, Title, Image, ListItem, List, BackItem };
