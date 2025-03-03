import Button from "@/components/Button";
import ProjectCard from "@/components/ProjectCard";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Projects() {
  //set to true by default for now because there aren't enough projects to warrant a show more button
  const [showAll, setShowAll] = useState(true);

  return (
    <>
      <section id='projects' className="max-w-4xl w-full flex flex-col mx-auto">
        <motion.h1
          className="text-center font-bold text-5xl mt-16 -mb-2"
          initial={{ transform: 'translateY(-30px)', opacity: 0 }}
          whileInView={{ transform: 'translateY(0px)', opacity: 100 }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.39, 0.21, 0.12, 0.96], }}
          viewport={{ amount: 0.1, once: true }}
        >
          второстепенные проекты
        </motion.h1>
        <ul className={`${showAll ? '' : 'max-h-[100rem]'} grid md:grid-cols-2 pt-6 pb-1 grid-cols-1 gap-4 overflow-hidden`}>
          {!showAll &&
            <div className="absolute flex justify-center bottom-[5rem] z-10 bg-gradient-to-t from-background pb-8 pt-32 max-w-4xl w-full">
              <Button label="Show More" onClick={() => setShowAll(true)} width="w-[10rem]" />
            </div>
          }
       <ProjectCard
            title="taa menu"
            fullDescription={[
              "taa меню - это админ меню с закрытыми исходниками, написанное на Glua."
            ]}
            cardImage="https://r2.e-z.host/e7a4ea07-ae15-4aaa-9512-6d3ff6fcbeb4/c6pli2jhbcue2pr.png"
            cardDescription="taa меню - это админ меню с закрытыми исходниками, написанное на Glua."
            media={[
                "https://r2.e-z.host/e7a4ea07-ae15-4aaa-9512-6d3ff6fcbeb4/bfabdxuqx8t9xj6.png",
                "https://r2.e-z.host/e7a4ea07-ae15-4aaa-9512-6d3ff6fcbeb4/hzk2c8mytrohb60.png"
            ]}
            myRole="глав. разраб"
            timeline="янв. 2025 - настоящее время"
            delay={0.1}
            gradient="bg-gradient-to-br"
        />
        </ul>
      </section>
    </>
  );
}
