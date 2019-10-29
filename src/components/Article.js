import React from 'react';

const Article = ({ title, text2, text }) => {
    const styles = {
        marginTop: 40,
    };

    return (
        <article style={styles}>
            <h2>{title}</h2>
            <h3>{text2}</h3>
            <p className="aboutMe">{text}</p>
        </article >
    );
}

export default Article;