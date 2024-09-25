import React from "react";
import PropTypes from "prop-types";
import SecondApp from "../second-app-component/SecondApp";

const title = "First App";
const FirstApp = ({title,sum}) => {
    return(
        <>
            <h1>{title}</h1>
            <span>{sum}</span>
            <SecondApp value = {sum}/>
        </>
    )
}

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    sum: PropTypes.number.isRequired
}

FirstApp.defaultProps = {
    title: "No hay titulo",
    sum:200
}

export default FirstApp;