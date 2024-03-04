'use client'
import { allProjects } from '../../.contentlayer/generated'
import { useState } from 'react';
import Modal from './modal';
import Project from './project';
import './styles/new-projects.css'

export default function Projects() {
    const [modal, setModal] = useState({ active: false, index: 0 })

    return (
        <main className=" my-52">
            <div className="">
                {
                    allProjects.map((project, index) => {
                        return <Project index={index} title={project.title} setModal={setModal} key={index} />
                    })
                }
            </div>
            <Modal modal={modal} projects={allProjects} />
        </main>
    );
}