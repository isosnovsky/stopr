import * as React from 'react';
import {useStore} from 'react-redux';

function ComponentFoo() {
  const store = useStore();
  return (
    <div className={'ddd'}>
      <span>{store.getState().auth.name}</span>
    </div>
  )
}

export default (ComponentFoo);