import React from "react";
import { connect } from "react-redux";
import { getDogs } from "../actions";
import styled from "styled-components";

const Img = styled.img`
    width: 10%;
    height: auto;
    margin: 2%;
    border-radius: 20px;
    box-shadow: 10px 10px orange;

    &:hover {
        transform: scale(1.3);
    }
`

const DogSection = styled.section`
    display: flex;
    flex-flow: row wrap;
    margin-top: 5%;
`
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
            <DogSection>
                {props.dogs.map( dog => <Img src={dog}/>)}
            </DogSection>
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