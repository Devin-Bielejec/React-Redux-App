import React from "react";
import { connect } from "react-redux";
import { getDogs } from "../actions";

const DogsComponent = (props) => {
    const fetchDogs = e => {
        e.preventDefault();
        props.getDogs();
    }

    console.log(props);
    return(
        <>
            <h1>Do you like Dogs?</h1>
            {props.error && <p>There is an error! {props.error}</p>}
            {props.isFetching && <p>Loading...</p>}
            <button onClick={fetchDogs}>RUFF</button>
            {props.dogs.map( dog => <img src={dog}/>)}
        </>
    )
}

const mapStateToProps = state => {
    return{
        dogs: state.dogs,
        error: state.error,
        isFetching: state.isFetching
    }
}

export default connect(mapStateToProps, { getDogs })(DogsComponent);