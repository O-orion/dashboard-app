import { motion } from 'framer-motion';
import styled from 'styled-components';
import BackgroundAnimation from '../components/BackgroundAnimation';

const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; 
  min-height: 100vh;
  padding: 20px;
  width: 100%; 
  box-sizing: border-box; 
  position: relative;
`;

const Title = styled(motion.h2)`
  font-size: 2.5rem;
  color: #fff;
  font-weigth: 700;
  margin-bottom: 1rem;
  text-align: center; 
`;

const SubTitle = styled(motion.p)`
  font-size: 1.2rem;
  color: #ddd;
  font-weigth: 400;
  margin-bottom: 2rem;
  text-align: center;
  max-width: 600px;
`;

const Button = styled(motion.button)`
  padding: 12px 24px;
  font-size: 1rem;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

export default function Home() {
  return (
    <Container>
        <BackgroundAnimation />
    
      <Title
      initial={{ y: -20 }}
      animate={{ y: 0 }}
      transition={{ duration: .5, ease: 'easeIn' }}
      >Transforme Dados em Insights</Title>
      <SubTitle
      initial={{ x: -20 }}
      animate={{ x: 0 }}
      transition={{ duration: .8 }}
      
      >
        Crie Dashboards interativos e acompanhe dados em tempo real.
      </SubTitle>
      <Button>Começar Agora!</Button>
    </Container>
  );
}