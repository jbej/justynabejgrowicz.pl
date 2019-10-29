import React from 'react';
import Skils from '../components/Skils';
// import '../styles/SkilsPage.css';

const skils = [
    {
        id: 1,
        // title: "React.js",
        img: <i class="devicon-react-original colored"></i>,
    },
    {
        id: 2,
        // title: "JavaScript",
        img: <i class="devicon-javascript-plain colored"></i>,
    },
    {
        id: 3,
        // title: "Node.js",
        img: <i class="fab fa-node"></i>,
    },
    {
        id: 4,
        // title: "Angular",
        img: <i class="devicon-angularjs-plain colored"></i>,
    },
    {
        id: 5,
        // title: "MongoDB",
        img: <i class="devicon-mongodb-plain-wordmark colored"></i>,
    }

]

const SkilsPage = () => {
    const skilsList = skils.map(skils => (
        <Skils key={skils.id} {...skils} />
    ))

    return (
        <div className="skils">
            <h2>Me skils</h2>
            {skilsList}
        </div>
    );
}

export default SkilsPage;