import { useState } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

// Estilos
const ListMenu = styled(motion.nav)`
  background-color: rgba(0, 0, 0, 0.9);
  backdrop-filter: blur(5px); 
  padding: 15px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  width: 100%;
  box-sizing: border-box;
  position: fixed; 
  top: 0;
  left: 0;
  z-index: 1000;

  @media (max-width: 768px) {
    padding: 10px 20px;
  }
`;

const ListLinks = styled(motion.div)`
  display: flex;
  gap: 30px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const Link = styled(motion.a)`
  color: #fff;
  text-decoration: none;
  font-size: 1.1rem;
  font-family: 'Inter', sans-serif;
  padding: 8px 12px;
  border-radius: 4px;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: #007bff;
    color: #fff;
  }
`;

const Logo = styled(motion.h2)`
  font-size: 1.8rem;
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  letter-spacing: 1px;
`;

const User = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 10px;

  p {
    font-size: 1rem;
    font-family: 'Inter', sans-serif;
    margin: 0;
    cursor: pointer;
    padding: 8px;
    border-radius: 4px;
    transition: background-color 0.3s;

    &:hover {
      background-color: #333;
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const Hamburger = styled(motion.div)`
  display: none;
  font-size: 1.5rem;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileMenu = styled(motion.ul)<{ isOpen: boolean }>`
  position: absolute;
  top: 60px;
  left: 0;
  width: 100%;
  background: rgba(0, 0, 0, 0.95);
  list-style: none;
  padding: 20px;
  display: none;
  flex-direction: column;
  gap: 15px;

  @media (max-width: 768px) {
    display: ${props => (props.isOpen ? 'flex' : 'none')};
  }
`;

const MobileLink = styled(motion.a)`
  color: #fff;
  text-decoration: none;
  font-size: 1.2rem;
  font-family: 'Inter', sans-serif;
  padding: 10px;
  border-radius: 4px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #007bff;
  }
`;


interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Sobre', href: '/about' },
];


const menuVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header>
      <ListMenu variants={menuVariants} initial="hidden" animate="visible">
        <Logo variants={itemVariants}>DD</Logo>
        <ListLinks variants={itemVariants}>
          {navItems.map(item => (
            <Link key={item.href} href={item.href} variants={itemVariants}>
              {item.label}
            </Link>
          ))}
        </ListLinks>
        <User variants={itemVariants}>
          <p>Perfil</p>
        </User>
        <Hamburger variants={itemVariants} onClick={toggleMenu}>
          ☰
        </Hamburger>
        <MobileMenu isOpen={isOpen} variants={itemVariants}>
          {navItems.map(item => (
            <MobileLink
              key={item.href}
              href={item.href}
              variants={itemVariants}
              onClick={toggleMenu}
            >
              {item.label}
            </MobileLink>
          ))}
          <MobileLink href="/profile" variants={itemVariants} onClick={toggleMenu}>
            Perfil
          </MobileLink>
        </MobileMenu>
      </ListMenu>
    </header>
  );
}