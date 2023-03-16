import SectionParagraph from "./section-paragaph";
import SectionTitle from "./section-title";
import SkillCard from "./skill-card";

export default function SkillSection() {
    return(
        <div className="py-28 bg-primarygray" id="skills">
            <div className="container mx-auto px-10 2xl:px-0">
                <SectionTitle>Skills</SectionTitle>
                <SectionParagraph>Beberapa kemampuan saya</SectionParagraph>
                <div className="flex mx-4 mt-20 flex-wrap">
                    <div className="md:w-4/12 w-full px-4 pb-8">
                        <SkillCard 
                            name="JavaScript"
                            level="Lanjutan"
                            image="/javascript.svg"
                            imageClassName="h-16"
                        />
                    </div>
                    <div className="md:w-4/12 w-full px-4 pb-8">
                        <SkillCard 
                            name="React JS"
                            level="Lanjutan"
                            image="/react.svg"
                            imageClassName="h-16"
                        />
                    </div>
                    <div className="md:w-4/12 w-full px-4 pb-8">
                        <SkillCard 
                            name="Node JS"
                            level="Lanjutan"
                            image="/nodejs.svg"
                            imageClassName="h-16"
                        />
                    </div>
                    <div className="md:w-4/12 w-full px-4 pb-8">
                        <SkillCard 
                            name="React Native"
                            level="Lanjutan"
                            image="/react.svg"
                            imageClassName="h-16"
                        />
                    </div>
                    <div className="md:w-4/12 w-full px-4 pb-8">
                        <SkillCard 
                            name="Next JS"
                            level="Lanjutan"
                            image="/nextjs.png"
                            imageClassName="h-16 rounded-full"
                        />
                    </div>
                    <div className="md:w-4/12 w-full px-4 pb-8">
                        <SkillCard 
                            name="Redux Thunk"
                            level="Lanjutan"
                            image="/redux.png"
                            imageClassName="h-16"
                        />
                    </div>
                    <div className="md:w-4/12 w-full px-4 pb-8">
                        <SkillCard 
                            name="Flutter"
                            level="Lanjutan"
                            image="/flutter.png"
                            imageClassName="h-16"
                        />
                    </div>
                    <div className="md:w-4/12 w-full px-4 pb-8">
                        <SkillCard 
                            name="Tailwind"
                            level="Lanjutan"
                            image="/tailwind.png"
                            imageClassName="h-16"
                        />
                    </div>
                    <div className="md:w-4/12 w-full px-4 pb-8">
                        <SkillCard 
                            name="HTML"
                            level="Lanjutan"
                            image="/html.png"
                            imageClassName="h-16"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
};
