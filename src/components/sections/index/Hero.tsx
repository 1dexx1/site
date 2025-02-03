import { motion } from "framer-motion";
import Typewriter from 'typewriter-effect';

import SocialIcon from "@/components/SocialIcon";

export default function Hero({ inView, descRef }: { inView: boolean, descRef: any }) {
  return (
    <>
      <section className="max-w-4xl w-full flex flex-col mx-auto pt-44">
        <motion.div
          className="relative sm:p-12 p-6 w-full flex flex-col bg-gradient-to-br from-primary to to-secondary rounded-lg border-1 border-accent shadow-2xl shadow-background"
          initial={{ transform: 'translateY(30px)', opacity: 0 }}
          whileInView={{ transform: 'translateY(0px)', opacity: 100 }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.39, 0.21, 0.12, 0.96], }}
          viewport={{ amount: 0.1, once: true }}
          ref={descRef}
        >
          <h1 className="font-bold lg:text-5xl md:text-4xl sm:text-3xl text-2xl">
          ку, я dexx<span className="sm:hidden inline-block animate-wave ml-2">👋</span><span className="font-bold text-lg brightness-50 italic sm:inline flex"> aka publicstaticvoidmain </span><span className="sm:inline-block hidden animate-wave ml-2">👋</span>
          </h1>
            <p className="font-semibold lg:text-3xl md:text-2xl sm:text-xl text-lg mt-2">
            {inView &&
              <Typewriter
              options={{
                delay: 30,
                strings: ["z, я еблан, делаю хуйню на луа в гмоде"],
                loop: false,
                autoStart: true,
                deleteSpeed: 604800000,
              }}
              />}
            </p>
          <ul className="flex flex-row flex-wrap gap-2 mt-2">
            <SocialIcon
              url="https://github.com/1dexx1"
              icon={
               <img
                  src="https://r2.e-z.host/e7a4ea07-ae15-4aaa-9512-6d3ff6fcbeb4/98o27m42mjsgg8onmj.png"
                  alt=""
                  className="w-7 h-7 rounded-lg" // Добавил rounded-lg для скругления углов
               />
              delay={0.3}
            />
            <SocialIcon
              url="https://discord.com/users/999589862158114848"
              icon={
               <img
                  src="https://r2.e-z.host/e7a4ea07-ae15-4aaa-9512-6d3ff6fcbeb4/cb2lxl0bnr8yaaz81k.png"
                  alt=""
                  className="w-7 h-7 rounded-lg" // Добавил rounded-lg для скругления углов
               />              
              delay={0.9}
            />
            <SocialIcon
             url="https://boosty.to/1dexx1"
             icon={
               <img
                  src="https://r2.e-z.host/e7a4ea07-ae15-4aaa-9512-6d3ff6fcbeb4/ap5gjxfzaoutzxu6th.png"
                  alt=""
                  className="w-7 h-7 rounded-lg" // Добавил rounded-lg для скругления углов
               />
               }
             delay={1.0}
             />
            <SocialIcon
             url="https://steamcommunity.com/id/1dexx1/"
             icon={
               <img
                  src="https://upload.wikimedia.org/wikipedia/commons/8/83/Steam_icon_logo.svg"
                  alt=""
                  className="w-7 h-7 rounded-lg" // Добавил rounded-lg для скругления углов
               />
               }
             delay={1.0}
             />
          </ul>
        </motion.div>
      </section>
    </>
  );
}
