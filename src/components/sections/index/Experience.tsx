import ExperienceCard from "@/components/ExperienceCard";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Experience() {
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <>
            <section id='experience' className="max-w-4xl w-full flex flex-col mx-auto">
                <motion.h1
                    className="text-center font-bold text-5xl mt-16 -mb-2"
                    initial={{ transform: 'translateY(-30px)', opacity: 0 }}
                    whileInView={{ transform: 'translateY(0px)', opacity: 100 }}
                    transition={{ duration: 0.5, delay: 0.1, ease: [0.39, 0.21, 0.12, 0.96], }}
                    viewport={{ amount: 0.1, once: true }}
                >
                    опыт
                </motion.h1>
                <ul className={`flex flex-col pt-6 pb-1 gap-4 overflow-hidden text-white`}>
                    <ExperienceCard
                        title="Bakery Madness"
                        fullDescription={[
                            "Bakery Madness - это мод на Pizza Tower от моего хорошего знакомого, хоть он и делает её почти 3 года, но я верю, что он выпустит этот калл© asap"
                        ]}
                        cardImage="https://r2.e-z.host/e7a4ea07-ae15-4aaa-9512-6d3ff6fcbeb4/wl926jkl99qp4to4a9.jpg"
                        cardDescription="Bakery Madness - это мод на Pizza Tower от моего хорошего знакомого"
                        media={[
                            "https://r2.e-z.host/e7a4ea07-ae15-4aaa-9512-6d3ff6fcbeb4/6w559xixwtcbqnfh8g.jpg",
                            "https://r2.e-z.host/e7a4ea07-ae15-4aaa-9512-6d3ff6fcbeb4/nda7ukvn79m0q4q.png"
                        ]}
                        myRole="бета тестер"
                        timeline="2023 - ???"
                        delay={0.1}
                        gradient="bg-gradient-to-br"
                    />
                </ul>
            </section>
        </>
    );
}
