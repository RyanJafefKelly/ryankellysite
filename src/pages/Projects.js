import React from 'react';
import { Typography } from '@material-ui/core';
import ProjectItem from '../components/ProjectItem';

const Projects = () => {

    const projects = [
        {id:0, name:'test0', description:'testdescription', link:'www.google.com'},
        {id:1, name:'test1', description:'testdescriptionv2', link:'www.google.com'}
    ];

    return(<React.Fragment>
        <Typography style={{      
            paddingLeft:20,  
            fontFamily: 'Arial',
            fontSize: 40,
        paddingTop: 5}}
    > 
    Projects</Typography>
    {projects.map((project, idx) => {
        return (
            <ProjectItem key={projects[idx].id} props={projects[idx]} />
        );
    })}
    </React.Fragment>);
};

export default Projects;