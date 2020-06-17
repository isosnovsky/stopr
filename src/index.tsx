import "core-js/stable";
import "regenerator-runtime/runtime";
import * as React from 'react';

interface FooProp {
    name: string;
    X: number;
    Y: number;
}


function ComponentFoo(prop: FooProp) {
    return <span className={'d'}> {prop} </span>;
}