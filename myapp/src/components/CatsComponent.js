import React from "react";
import { connect } from "react-redux";
import { getCats } from "../actions/";

const CatsComponent = (props) => {
    props.getCats();
    return(
        <section>
            
        </section>
    )
}

const mapStateToProps = state => {
    return{
        cats: state.cats
    }
}

export default connect(mapStateToProps, { getCats })(CatsComponent);