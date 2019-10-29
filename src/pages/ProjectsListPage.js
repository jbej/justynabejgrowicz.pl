import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/ProjectsListPage.css';

const projects = ['project 1', 'project 2', 'project 3']
const ProjectsListPage = () => {

    const list = projects.map(project => (
        <li key={project}>
            <Link to={`/projects/${project}`}>{project}</Link>
        </li>
    ))
    return (
        <div className="projects">
            <h2>Me project</h2>
            <div>
                <ul>
                    {list}
                </ul>
            </div>
        </div>
    );
}

export default ProjectsListPage;