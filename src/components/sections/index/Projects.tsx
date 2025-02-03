import Button from "@/components/Button";
import ProjectCard from "@/components/ProjectCard";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Projects() {
  //set to true by default for now because there aren't enough projects to warrant a show more button
  const [showAll, setShowAll] = useState(true);

  return (
    <>                   
       <ProjectCard
            title="taa menu"
            fullDescription={[
              "taa меню - это админ меню с закрытыми исходниками, написанное на Glua.",
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
    </>
  );
}
