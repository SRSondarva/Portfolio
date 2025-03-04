"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import RocketSvg from "../sub/RocketSvg";
import { slideInFromRight } from "@/utils/motion";

const SCROLL_THRESHOLD = 500;
const FLIGHT_DURATION = 1800;
const TOOLTIP_TRANSITION_DURATION = 0.2;

const tooltipVariants = {
  hidden: { opacity: 0, y: 5 },
  visible: { opacity: 1, y: 0 },
};

const ToTopBtn: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isFlying, setIsFlying] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const rocketRef = useRef<HTMLButtonElement>(null);

  const toggleVisibility = useCallback(() => {
    setIsVisible(window.scrollY > SCROLL_THRESHOLD);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, [toggleVisibility]);

  useEffect(() => {
    if (isFlying && rocketRef.current) {
      const rocketElement = rocketRef.current;
      rocketElement.style.transform = "translateY(-92vh)";
      rocketElement.style.transition = `transform ${FLIGHT_DURATION}ms ease-in-out`;

      const timer = setTimeout(() => {
        rocketElement.style.transform = "translateY(0)";
        setIsFlying(false);
        window.scrollTo({ top: 0, behavior: "smooth" });
        setIsVisible(false);
      }, FLIGHT_DURATION + 200);

      return () => clearTimeout(timer);
    }
  }, [isFlying]);

  const handleClick = useCallback(() => {
    setIsFlying(true);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed bottom-10 right-10 z-50"
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={slideInFromRight(0.5)}
        >
          <motion.div
            className="transition-all hover:rounded-full relative"
            transition={{ duration: 1 }}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <button
              onClick={handleClick}
              ref={rocketRef}
              className="sm:h-16 sm:w-16 h-[30px] w-[30px] rounded-full transition-all duration-500 ease-in-out rocket"
              aria-label="Scroll to top"
            >
              <RocketSvg />
            </button>

            <AnimatePresence>
              {isHovering && (
                <motion.div
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={tooltipVariants}
                  transition={{ duration: TOOLTIP_TRANSITION_DURATION }}
                  className="absolute bg-slate-500 bottom-full -right-1/2 transform mb-2 px-3 py-1 bg-space-blue text-space-white text-sm rounded-md shadow-md whitespace-nowrap space-tooltip"
                >
                  <p>Wanna Fly Up?</p>
                  <div className="tooltip-arrow"></div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default React.memo(ToTopBtn);
