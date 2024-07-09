import React from 'react';
import styles from './Projects.module.css';
import ProjectView from '../ProjectView/ProjectView';
import ProjectList from '../ProjectList/ProjectList';
import { Box } from '@mui/material';
import { useState } from 'react';

const Projects = (projects = []) => {

    const project1 = {
        title : 'Sample Project',
        date : '12/21/23',
        imageSrc : '',
        body: 'This is a description of a sample project!'
    };

    const project2 = {
        title : 'My website',
        date : '12/24/23',
        imageSrc : '',
        body: 'This is the website you are currently viewing!'
    };

    const project3 = {
        title : 'Next Project',
        date : '12/26/23',
        imageSrc: '',
        body: 'For my next project, I will create a vocab word generator using a dictionary API and potentially excluding from a list of the most common words.'
    }

    const project4 = {
        title : 'Other Projects',
        date : '1/1/24',
        imageSrc: '',
        body: 'Other projects may include: a chess game (either with matchmaking or AI), e-commerce, a functional calculator app, or a realtime collaborative word processor like google docs.'
    }

    var [selectedProject, setSelectedProject] = useState(project1);

    return (
        <div className='row container mx-5 py-4'>
            <h1 className=''> Projects </h1>
            <a href='https://github.com/aaronchisholm'> My Github </a>
            <Box className='row border p-0'>
                <div className='col-3 h-100 p-0'>
                    <ProjectList projects={[project1, project2, project3, project4]} projectSelect={setSelectedProject}/>
                </div>
                <div className='col-9'>
                    <ProjectView project={selectedProject}/>
                </div>
            </Box>
        </div>
    )
};

export default Projects;