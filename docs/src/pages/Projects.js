import React from 'react';
import { Typography } from '@material-ui/core';
import ProjectItem from '../components/ProjectItem';

const Projects = () => {

    const projects = [
        {id:0, name:'Chess AI', description:'Chess engine - Very in progress experiments with board representation, search, evaluation, opening book and endgame tablebases.', link:'https://github.com/RyanJafefKelly/rypyengine'},
        {id:1, name:'Raytracer', description:'Keeping C++ and computer graphics knowledge fresh.', link:'https://github.com/RyanJafefKelly/raytracer2021'}
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