import Divider from "@/components/Divider";

export default function Footer() {
    return (
        <>
            <footer className="max-w-4xl w-full flex flex-col mx-auto pt-4 pb-2">
                <p className="text-center font-semibold text-base pt-2 text-black">
                    dexx bio - Made with NextJS, TailwindCSS, and ❤ by aiden
                </p>
                <p className="text-center font-medium brightness-75 text-base text-black">
                    Last updated: Feb 3, 2025
                </p>
            </footer>
        </>
    );
}
