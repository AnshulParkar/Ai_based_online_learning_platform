import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Book, MoveRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image"; 

function Hero() {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    () => [
      "innovative",
      "intuitive",
      "engaging",
      "comprehensive",
      "interactive",
    ],
    []
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  return (
    <div className="w-full">
      <div className="container mx-auto">
        <div className="flex gap-8 py-20 lg:py-20 items-center justify-center flex-col lg:flex-row">
          <div className="flex-1 flex flex-col justify-center">
            <div>
              <Button variant="secondary" size="sm" className="gap-4">
                Explore our courses <MoveRight className="w-4 h-4" />
              </Button>
            </div>
            <div className="flex gap-4 flex-col">
              <h1 className="text-5xl md:text-7xl max-w-2xl tracking-tighter text-center font-regular lg:text-left">
                <span className="text-spektr-cyan-50">
                  Transform your learning with
                </span>
                <span className="relative flex w-full justify-center overflow-hidden text-center md:pb-4 md:pt-1 lg:justify-start">
                  &nbsp;
                  {titles.map((title, index) => (
                    <motion.span
                      key={index}
                      className="absolute font-semibold"
                      initial={{ opacity: 0, y: "-100" }}
                      transition={{ type: "spring", stiffness: 50 }}
                      animate={
                        titleNumber === index
                          ? {
                              y: 0,
                              opacity: 1,
                            }
                          : {
                              y: titleNumber > index ? -150 : 150,
                              opacity: 0,
                            }
                      }
                    >
                      {title}
                    </motion.span>
                  ))}
                </span>
              </h1>

              <p className="text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-2xl text-center lg:text-left">
                Enhance your educational journey with our cutting-edge Learning
                Management System. Streamline course creation, simplify student
                engagement, and track progress with ease.
              </p>
            </div>
            <div className="flex flex-row gap-3">
              <Button size="lg" className="gap-4" variant="outline">
                Start Learning <Book className="w-4 h-4" />
              </Button>
              <Button size="lg" className="gap-4">
                Start Teaching <MoveRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
          <div className="flex-1 hidden lg:block">
            <Image
              src="/hero1.jpg" 
              alt="Learning Management System"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export { Hero };
