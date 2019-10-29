import React from 'react';
import { Link } from 'react-router-dom';
import Project from '../components/Project';

const ProjectsPage = ({ match }) => {
    return (
        <>
            <div>Strona produktu</div>
            <Project id={match.params.id} />
            <Link to="/projects">Powrót do listy produktów</Link>
        </>
    );
}

export default ProjectsPage;
