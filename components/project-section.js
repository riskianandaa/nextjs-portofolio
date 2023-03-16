import ProjectItem from "./project-item";
import SectionParagraph from "./section-paragaph";
import SectionTitle from "./section-title";

export default function ProjectSection() {
    return(
        <div className="py-28" id="projects">
            <div className="container mx-auto px-10 2xl:px-0">
                <SectionTitle>Projects</SectionTitle>
                <SectionParagraph>Beberapa proyek bikinan saya</SectionParagraph>
                <div className="flex mx-4 mt-20 flex-wrap">
                    <div className="md:w-6/12 w-full px-4 pb-8">
                        <ProjectItem 
                            name={"Hasten"}
                            description={"Explorasi landing page"}
                            image={"/hasten.png"}
                        />
                    </div>
                    <div className="md:w-6/12 w-full px-4 pb-8">
                        <ProjectItem 
                            name={"Resources"}
                            description={"Explorasi resources page"}
                            image={"/resources.png"}
                        />
                    </div>
                    <div className="md:w-6/12 w-full px-4 pb-8">
                        <ProjectItem 
                            name={"Hasten"}
                            description={"Explorasi landing page"}
                            image={"/hasten.png"}
                        />
                    </div>
                    <div className="md:w-6/12 w-full px-4 pb-8">
                        <ProjectItem 
                            name={"Resources"}
                            description={"Explorasi resources page"}
                            image={"/resources.png"}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
};
