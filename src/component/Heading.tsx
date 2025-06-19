import { motion } from "framer-motion";

type THeading = {
  title: string;
  subTitle: string;
  className?: string;
  underlineColor?: string;
  titleSize?: "sm" | "md" | "lg" | "xl";
  align?: "left" | "center" | "right";
};

const Heading = ({
  title,
  subTitle,
  className = "",
  underlineColor = "bg-orange-500",
  titleSize = "lg",
  align = "center",
}: THeading) => {
  // Size classes mapping
  const sizeClasses = {
    sm: "text-xl md:text-2xl",
    md: "text-2xl md:text-3xl",
    lg: "text-3xl md:text-4xl",
    xl: "text-4xl md:text-5xl",
  };

  // Alignment classes
  const alignClasses = {
    left: "text-left",
    center: "text-center mx-auto",
    right: "text-right ml-auto",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`${className} ${alignClasses[align]} max-w-4xl mb-8 md:mb-12`}
    >
      {/* Title with animated underline */}
      <div className="relative inline-block">
        <motion.h2
          className={`${sizeClasses[titleSize]} font-extrabold text-gray-900 mb-3`}
        >
          {title}
        </motion.h2>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={`absolute bottom-0 left-0 w-full h-1 ${underlineColor} origin-left`}
        />
      </div>

      {/* Subtitle */}
      {subTitle && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-gray-600 text-lg md:text-xl leading-relaxed"
        >
          {subTitle}
        </motion.p>
      )}
    </motion.div>
  );
};

export default Heading;
