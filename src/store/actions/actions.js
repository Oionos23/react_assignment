import * as types from '../types';

export const setWellsList = ( payload ) => ( {
  type: types.SET_WELLS_LIST,
  payload
} );

export const setLogsList = ( payload ) => ( {
  type: types.SET_LOGS_LIST,
  payload
} );

export const setFormationsList = ( payload ) => ( {
  type: types.SET_FORMATIONS_LIST,
  payload
} );

export const fetchWellsList = () => async dispatch => {

  const response = await fetch( 'http://localhost:8000/wells' );
  const data = await response.json();

  dispatch( setWellsList( data ) )
}

export const fetchLogsList = () => async dispatch => {

  const response = await fetch( 'http://localhost:8000/logs' );
  const data = await response.json();

  dispatch( setLogsList( data ) )
}

export const fetchFormationsList = () => async dispatch => {

  const response = await fetch( 'http://localhost:8000/formations' );
  const data = await response.json();

  dispatch( setFormationsList( data ) )
}

// export const selectedItem = ( payload ) => ( {

//   type: types.SELECT_WELL,
//   payload
// } )