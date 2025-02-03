import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import Modal from "@/components/Modal";
import MediaCarousel from "@/components/MediaCarousel";
import Button from "@/components/Button";
import LinkButton from "@/components/LinkButton";
import Divider from "@/components/Divider";

// Использование kurwaCard вместо футера
export function kurwa() {
    return (
        <kurwaCard
            url="https://out.so"
            title="Out.so"
            fullDescription={[
                "While working on Out I've collaborated closely with a designer to create intuitive and visually appealing user interfaces, ensuring seamless user experiences. I've also developed backend services for efficient handling, importing, and uploading of social media content, integrating with third-party APIs.",
                "Out is a service that allows content creators to easily upload content between all of their platforms. Creators can upload their video to Out and schedule it to be posted on all of their social media platforms at once. Out also allows creators to import videos from existing platforms and schedule them to be posted on other platforms.",
            ]}
            cardImage="https://r2.e-z.host/2082d908-7c65-4fc3-b02a-5f50f9141543/xt9q5o0l.png"
            cardDescription="While working on Out I've collaborated closely with a designer to create intuitive and visually appealing user interfaces, ensuring seamless user experiences. I've also developed backend services for efficient handling, importing, and uploading of social media content, integrating with third-party APIs."
            media={["https://r2.e-z.host/2082d908-7c65-4fc3-b02a-5f50f9141543/tcjt9h7x.mp4"]}
            delay={0.2}
            gradient="bg-gradient-to-br"
        />
    );
}
