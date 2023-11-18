'use client'
import { useState } from "react";
import TabItem from "./TabItem";
import WorkSection from "./WorkSection";
import Projects from "./projects";
import Blogs from "./blogs";

export default function Tabs() {
    const [activeTab, setActiveTab] = useState("projects");

    return (
        <div className="w-full">
            <div className="z-10 sticky top-0 backdrop-blur-lg bg-opacity-80 dark:bg-opacity-80 bg-white_smoke dark:bg-jet pt-2 ">
                <ul className="flex items-center justify-start gap-10 ">
                    <TabItem title="Projects" id="projects" activeTab={activeTab} setActiveTab={setActiveTab} />
                    <TabItem title="Blogs" id="blogs" activeTab={activeTab} setActiveTab={setActiveTab} />
                </ul>
                <hr className=" -z-10 absolute bottom-0 h-px border-0 bg-platinum-400 dark:bg-onyx-600 w-full" />
            </div>

            <WorkSection id="projects" activeTab={activeTab}>
                <Projects />
            </WorkSection>
            <WorkSection id="blogs" activeTab={activeTab}>
                <Blogs />
            </WorkSection>

        </div>
    );
}