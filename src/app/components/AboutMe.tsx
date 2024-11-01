import { siteConfig } from "@/app/config";
import SectionLabel from "./SectionLabel";
import MotionDiv from "./MotionDiv";
import { slideInFromRight } from "../utils/motion";

export default function AboutMe() {
    return (
        <MotionDiv
            variants={slideInFromRight(0.9)}
            initial="hidden"
            animate="visible"
            className="lg:pl-6"
        >
            <section
                id="about-me"
                className="w-full flex flex-wrap justify-center lg:justify-start mb-8 lg:mb-12"
            >
                <SectionLabel label="ABOUT ME" />
            <div
                className="max-w-[600px]"
                dangerouslySetInnerHTML={{
                    __html: siteConfig.sections.aboutMe,
                }}
            />
            </section>
        </MotionDiv>
    );
}
