'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import type { CSSProperties } from 'react';
import type { MotionValue } from 'framer-motion';
import { useMediaQuery, useReducedMotion } from '../hooks/useMediaQuery';

interface AnimatedTextProps {
  text: string;
  className?: string;
  style?: CSSProperties;
}

interface PieceProps {
  chars: string;
  progress: MotionValue<number>;
  range: [number, number];
}

function Piece({ chars, progress, range }: PieceProps) {
  const opacity = useTransform(progress, range, [0.2, 1]);

  return (
    <span className="relative inline-block">
      {/* invisible placeholder keeps the layout and carries the accessible text,
          the animated copy sits on top and is hidden from assistive tech */}
      <span className="opacity-0">{chars}</span>
      <motion.span
        aria-hidden="true"
        className="absolute inset-0"
        style={{ opacity }}
      >
        {chars}
      </motion.span>
    </span>
  );
}

export default function AnimatedText({
  text,
  className = '',
  style,
}: AnimatedTextProps) {
  const ref = useRef<HTMLParagraphElement>(null);
  const reduced = useReducedMotion();
  // One scroll-linked motion value per character means ~330 subscribers
  // updating every frame. That is fine on a desktop and much too much for a
  // phone, so small screens animate a word at a time instead.
  const perChar = useMediaQuery('(min-width: 768px)', true);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'end 0.2'],
  });

  if (reduced) {
    return (
      <p ref={ref} className={className} style={style}>
        {text}
      </p>
    );
  }

  const words = text.split(' ');
  const total = perChar ? text.replace(/ /g, '').length : words.length;
  let unit = 0;

  return (
    <p ref={ref} className={className} style={style}>
      {words.map((word, wordIdx) => {
        const pieces = perChar ? Array.from(word) : [word];
        return (
          <span key={wordIdx} className="inline-block whitespace-nowrap">
            {pieces.map((piece, i) => {
              const start = unit / total;
              const end = (unit + 1) / total;
              unit += 1;
              return (
                <Piece
                  key={i}
                  chars={piece}
                  progress={scrollYProgress}
                  range={[start, end]}
                />
              );
            })}
            {wordIdx < words.length - 1 && <span>&nbsp;</span>}
          </span>
        );
      })}
    </p>
  );
}
