import * as React from 'react';
import { hot } from 'react-hot-loader';

interface FooProp {
  name: string;
}


function ComponentFoo(prop: FooProp) {
  return (
    <div className={'44444423423423'}>
      <span>{prop.name}</span>
    </div>
  )
}

export default hot(module)(ComponentFoo);