import React from 'react';

const Skils = ({ img }) => {
    const styles = {
        display: "flex",
        flexDirection: "column",
        flexGrow: 1,
        margin: 20,
        marginBottom: 20,
        fontSize: 50,
        lineHeight: 1.2,
    }

    return (
        <article style={styles}>

            {/* <h6>{title}</h6> */}
            <p>{img}</p>
        </article >
    );
}

export default Skils;