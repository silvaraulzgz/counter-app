import { useState } from 'react';
import PropTypes from 'prop-types';

export const CounterApp = ({ value }) => {

    const [ counter, setCounter ] = useState( value )

    const handleAdd = () => {
        // setCounter( counter +1 );
        setCounter( (c) => c+1 );

    }

    const handleAdd2 = () => setCounter( (c) => c-1 );

    const handleAdd3 = () => {
        // setCounter( counter +1 );
        setCounter( (c) => c=value );

    }

    return (
      <>
      <h1>CounterApp</h1>
      <h2> { counter } </h2>
      <button onClick={ handleAdd }> +1</button>
      <button onClick={ handleAdd2 }> -1</button>
      <button onClick={ handleAdd3 }> Reset</button>
      </>
    )
  }
  
  CounterApp.prototype = {
    value: PropTypes.number.isRequired
  }