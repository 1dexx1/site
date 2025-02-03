import AboutCard from "@/components/AboutCard";
import { Presence, Tech } from "../../../../typings";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function About() {
  let otherTech: Tech[] = [
    { title: "Git", icon: <img alt="" draggable={false} className="h-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" />, link: "https://git-scm.com/" },
    { title: "Github", icon: <img alt="" draggable={false} className="h-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />, link: "https://github.com/" },
    { title: "Visual Studio Code", icon: <img alt="" draggable={false} className="h-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" />, link: "https://code.visualstudio.com/" },
    { title: "Linux", icon: <img alt="" draggable={false} className="h-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" />, link: "https://www.linux.org/" },
  ]

  let druzya: Tech[] = [
    { title: "Nelsoni", icon: <img alt="" draggable={false} className="h-6" src="https://cdn.discordapp.com/avatars/802521064059305984/6cdece1f64c9e0946e7b81f4e14b5851.webp?size=1024" />, link: "" },
    { title: "gtgaster", icon: <img alt="" draggable={false} className="h-6" src="https://cdn.discordapp.com/avatars/995011306597925055/6820ead54d18dc1ff03bd64915436df6.webp?size=1024" />, link: "" },
    { title: "tizar18", icon: <img alt="" draggable={false} className="h-6" src="https://r2.e-z.host/e7a4ea07-ae15-4aaa-9512-6d3ff6fcbeb4/ndq0ivhp6t0wjunorg.jpg" />, link: "" }
  ]

  let she: Tech[] = [
    { title: "шлюха", icon: <img alt="" draggable={false} className="h-6" src="https://r2.e-z.host/e7a4ea07-ae15-4aaa-9512-6d3ff6fcbeb4/9wp3qz3b13vz0f3y60.jpg" />, link: "" },
    { title: "шлюха", icon: <img alt="" draggable={false} className="h-6" src="https://r2.e-z.host/e7a4ea07-ae15-4aaa-9512-6d3ff6fcbeb4/9wp3qz3b13vz0f3y60.jpg" />, link: "" },
    { title: "шлюха", icon: <img alt="" draggable={false} className="h-6" src="https://r2.e-z.host/e7a4ea07-ae15-4aaa-9512-6d3ff6fcbeb4/9wp3qz3b13vz0f3y60.jpg" />, link: "" },
    { title: "шлюха", icon: <img alt="" draggable={false} className="h-6" src="https://r2.e-z.host/e7a4ea07-ae15-4aaa-9512-6d3ff6fcbeb4/9wp3qz3b13vz0f3y60.jpg" />, link: "" },
    { title: "шлюха", icon: <img alt="" draggable={false} className="h-6" src="https://r2.e-z.host/e7a4ea07-ae15-4aaa-9512-6d3ff6fcbeb4/9wp3qz3b13vz0f3y60.jpg" />, link: "" }
  ]
  
  const [presence, setPresence] = useState<Presence | null>(null);
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const socket = new WebSocket(`wss://api.aiden.gg/presence`)
  
    const handleOpen = () => {
      socket.send("Connection established")
    }
  
    const handleMessage = (event: MessageEvent) => {
      if (event.data === "connected") return
      if (event.data === "pong") return
      setPresence(JSON.parse(event.data))
    }

    let ping = setInterval(() => {
      socket.send("ping")
    }, 10000)
  
    socket.addEventListener("open", handleOpen)
    socket.addEventListener("message", handleMessage)
  
    const timer = setInterval(() => {
      setDate(new Date())
    }, 1000)
  
    return () => {
      socket.removeEventListener("open", handleOpen)
      socket.removeEventListener("message", handleMessage)
      socket.close()
      clearInterval(ping)
      clearInterval(timer)
    }
  }, [])

  return (
    <>
      <section id='about' className="max-w-4xl w-full flex flex-col mx-auto">
        <motion.h1
          className="text-center font-bold text-5xl mt-16"
          initial={{ transform: 'translateY(-30px)', opacity: 0 }}
          whileInView={{ transform: 'translateY(0px)', opacity: 100 }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.39, 0.21, 0.12, 0.96], }}
          viewport={{ amount: 0.1, once: true }}
        >
          про меня
        </motion.h1>
        <ul className="grid grid-cols-2 gap-4 mt-4">
          <AboutCard
            title="ну в общем"
            description="ну ку, мне 13 лет, я делаю что-то на GLua, пробовал просто луа, и luau, живу в украине, ну и всё"
            direction="top"
            span={2}
            delay={0.1}
            gradient="bg-gradient-to-tl"
          />
          <AboutCard
            title="там я был, там пиво пил"
            description=""
            tech={otherTech}
            direction="left"
            span={presence && presence.activities.length > 0 ? 1 : 2}
            delay={0.1}
            gradient="bg-gradient-to-tr"
          />
            <AboutCard
            title="друзяки))"
            description=""
            tech={druzya}
            direction="right"
            span={presence && presence.activities.length > 0 ? 1 : 2}
            delay={0.1}
            gradient="bg-gradient-to-tr"
          />
          <AboutCard
            title="ш-общительная"
            description="тут показан человек, который будет игнорить вас часами и днями, она заебала всех просто"
            tech={she}
            direction="bottom"
            span={2}
            delay={0.1}
            gradient="bg-gradient-to-tl"
          />
        </ul>
      </section>
    </>
  );
}
