import React from "react";
import {Form, FormControl} from "react-bootstrap";

export const SearchBox = ({ searchQuery, handleSearch}) => {
    return(
        <Form inline>
            <FormControl 
            type="text"
            place="Search by movie title"
            className= "mr-md-2"
            value={searchQuery}
            onChange={handleSearch}
            />
        </Form>
    );
};