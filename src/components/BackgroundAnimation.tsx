import { motion } from 'framer-motion';
import styled from 'styled-components';


const BackgroundContainer = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  overflow: hidden;
  background-color: #000; 
`;


const Node = styled(motion.div)`
  position: absolute;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${props => props.color || '#ffffff'};
`;

const nodes = Array.from({ length: 25 }).map((_, index) => ({
  id: index,
  x: `${Math.random() * 100}vw`, 
  y: `${Math.random() * 100}vh`, 
  color: ['#ffffff', '#cccccc', '#007bff'][Math.floor(Math.random() * 3)],
  delay: Math.random() * 2, 
}));


const nodeVariants = {
  pulse: {
    scale: [1, 1.5, 1], 
    opacity: [0.5, 1, 0.5], 
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatType: 'loop' as const,
      ease: 'easeInOut',
    },
  },
};

export default function BackgroundAnimation() {
  return (
    <BackgroundContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      aria-hidden="true"
    >
      {nodes.map(node => (
        <Node
          key={node.id}
          style={{
            left: node.x,
            top: node.y,
            backgroundColor: node.color,
          }}
          variants={nodeVariants}
          animate="pulse"
          transition={{ delay: node.delay }}
        />
      ))}
    </BackgroundContainer>
  );
}