import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types"
// styles
import { Wrapper, Content } from "../BreadCrumb/BreadCrumb.styles";

const BreadCrumb = ({movieTitle}) => (
    <Wrapper>
        <Content>
            <Link to = '/'>
                <span>
                    Home
                </span>
            </Link>
            <span>|</span>
            <span>{movieTitle}</span>
        </Content>
    </Wrapper>
)
BreadCrumb.protoType={
    movieTitle: PropTypes.string,
}
export default BreadCrumb;