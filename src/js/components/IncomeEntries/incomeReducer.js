const defaultState = {
  description: '',
  amount: '',
  lineItems: []
};

export default function IncomeReducer(state = defaultState, action) {
  const { type, payload } = action;

  switch (type) {
    // update description action
    case 'UPDATE_INCOME_DESCRIPTION': {
      // return an object
      return {
        // with all the previous state
        ...state,
        // but overwriting the description
        description: payload.description
      };
    }

    case 'UPDATE_INCOME_AMOUNT': {
      return {
        ...state,
        amount: payload.amount
      };
    }

    case 'ADD_INCOME': {
      const { description, amount } = action.payload;
      return {
        description: '',
        action: '',
        lineItems: [
          // all the previous line items are here
          ...state.lineItems,
          // plus a new object
          { description, amount }
        ]
      };
    }

    default: {
      return state;
    }
  }
}
