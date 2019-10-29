import React from 'react';
import Article from '../components/Article';
import img6 from '../images/homepage1.jpg';
import '../styles/HomePage.css';

const article = [
    {
        id: 1,
        title: "Justyna Bejgrowicz",
        text2: "Junior Frontend Developer, Wordpress Developer and Computer Graphic",
        text: "Last two years was very busy for me. I finished React Courses, JavaScript Bootcamp, Junior Frontend Developer Bootcamp and WordPress Bootcamp. These courses I made online with cooperation and mentoring with Kodilla or Udemy. Thanks to scholarschip I already know how to use React.js, JavaScript, ES6, Node.js, Redux, Wedpack, MongeDB, MERN, HTML5, CSS3, Bootstrap, Sass, Git, jQuery, OOP, WordPress. I am actually on the: freeCodeCamp - Web Development course or Udemy - Angular 6. On the website: https://github.com/jbej you can find my repository, where I left all my work done during my education."
    }
]

const HomePage = () => {
    const artList = article.map(article => (
        <Article key={article.id} {...article} />
    ))
    return (
        <div className="home">
            {artList}
            <img src={img6} alt="me"></img>
        </div>
    );
}

export default HomePage;