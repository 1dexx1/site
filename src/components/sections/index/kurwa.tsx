import KurwaCock from "@/components/KurwaCard";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Kurwasos() {
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
                    роботы, которыми горжусь
                </motion.h1>
                <ul className={`flex flex-col pt-6 pb-1 gap-4 overflow-hidden text-white`}>
                    <KurwaCock
                        url='https://site2-gold.vercel.app'
                        title="polaar blog"
                        fullDescription={[
                            "ну мой блог короч"
                        ]}
                        cardImage="https://r2.e-z.host/e7a4ea07-ae15-4aaa-9512-6d3ff6fcbeb4/iaag9d416zfjyk1.png"
                        cardDescription="мой шедевро блог и запасное био"
                        media={[
                            "https://r2.e-z.host/e7a4ea07-ae15-4aaa-9512-6d3ff6fcbeb4/iaag9d416zfjyk1.png"
                        ]}
                        myRole="создатель / контрибутор"
                        timeline="февраль 2025 - нынешнее время"
                        delay={0.1}
                        gradient="bg-gradient-to-br"
                    />
                </ul>
            </section>
        </>
    );
}
