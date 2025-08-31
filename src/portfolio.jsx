import React from 'react';
import { motion } from 'framer-motion';

export default function Portfolio() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', textAlign: 'center' }}>
      <motion.h1 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={{ fontSize: '3rem', marginBottom: '1rem', color: '#00ffcc' }}
      >
        Abhishek Jaat
      </motion.h1>
      <motion.h2 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        style={{ fontSize: '1.5rem', color: '#fff' }}
      >
        Full Stack Developer | Minecraft Developer | Discord Bot Developer | Backend | Frontend
      </motion.h2>
      <motion.a 
        href="https://github.com/abhishekjaat1"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        style={{ marginTop: '2rem', fontSize: '1.2rem', color: '#00ffcc', textDecoration: 'none' }}
      >
        🔗 GitHub
      </motion.a>
      <motion.h3
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        style={{ marginTop: '2rem', fontSize: '1.2rem', color: '#ff0066' }}
      >
        Psycho X Security
      </motion.h3>
    </div>
  );
      }
