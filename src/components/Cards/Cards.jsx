import { cn } from "../../utils/cn.ts";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const HoverEffect = ({ items, className }) => {
  let [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div
      className={cn(

        "py-10",
        // grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10
        className
      )}
    >
      {items.map((item, idx) => (
        // <a
        //   href={item?.link}
        //   key={item?.link}
        //   className="relative group block p-2 h-full w-full"
        //   onMouseEnter={() => setHoveredIndex(idx)}
        //   onMouseLeave={() => setHoveredIndex(null)}
        // >
        <div className="relative group block p-2 h-full w-full" >
        <img src={item.imageSrc} alt="catogry" />
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-green-400 dark:bg-white block rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card>
            <CardTitle>{item.title}</CardTitle>
            <CardDescription>{item.description}</CardDescription>
          </Card>
        {/* // </a> */}
        </div>
      ))}
    </div>
  );
};

export const Card = ({ className, children }) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-4 overflow-hidden bg-white border border-transparent dark:border-red-700/[0.4] group-hover:border-emerald-700 relative z-20",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};
export const CardTitle = ({ className, children }) => {
  return (
    <h4 className={cn("text-zinc-100 font-bold tracking-wide mt-4", className)}>
      {children}
    </h4>
  );
};
export const CardDescription = ({ className, children }) => {
  return (
    <p
      className={cn(
        "mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm",
        className
      )}
    >
      {children}
    </p>
  );
};
export default HoverEffect;