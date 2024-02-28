import React from "react";
import { Component } from "react";
import ClassTwo from "./ClassTwo";


class ClassOne extends Component
{
    render()
    {
        return(
            <div>
                <ClassTwo/>
                <ClassTwo/>
                <ClassTwo/>
            </div>
        )
    }
}
export default ClassOne