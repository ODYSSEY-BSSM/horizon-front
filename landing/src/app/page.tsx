'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function Home(): React.JSX.Element {
  return (
    <main>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1>Horizon</h1>
        <p>Odyssey의 프로젝트</p>
      </motion.div>
    </main>
  );
}
