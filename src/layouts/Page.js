import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import ProjectsPage from '../pages/ProjectsPage';
import ProjectsListPage from '../pages/ProjectsListPage';
import ContactPage from '../pages/ContactPage';
import SkilsPage from '../pages/SkilsPage';
import ErrorPage from '../pages/ErrorPage';

const Page = () => {
    return (
        <>
            <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/projects" component={ProjectsListPage} />
                <Route path="/project/:id" component={ProjectsPage} />
                <Route path="/contact" component={ContactPage} />
                <Route path="/skils" component={SkilsPage} />
                <Route path="/" component={ErrorPage} />
            </Switch>
        </>
    );
}

export default Page;