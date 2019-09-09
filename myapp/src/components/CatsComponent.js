import React from "react";
import { connect } from "react-redux";
import { getCats } from "../actions/";

const CatsComponent = (props) => {
    const fetchCats = e => {
        e.preventDefault();
        props.getCats();
    }
    return(
        <>
            <h1>Do you like cats?</h1>

            <button onClick={fetchCats}>MEOW</button>

        </>
    )
}

const mapStateToProps = state => {
    return{
        cats: state.cats,
        error: state.error,
        isFetching: state.isFetching
    }
}

export default connect(mapStateToProps, { getCats })(CatsComponent);