export const FETCH_EVENTS = "event/FETCH_EVENTS";

const initialState = {
  events: [],
  eventTypes: {},
  personnels: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_EVENTS: {
      return { ...state, events: [...action.payload.events, ...action.payload.events] };
    }
    default: {
      return state;
    }
  }
};

export const fetchEvents = () => {
    return async dispatch => {
        const data = await require('./mock/events.js').default;
        dispatch({ type: FETCH_EVENTS, payload: {events: data}});
    };
}
