// reducer.js

export const initialState = {
  basket: [],
};

export const getBasketTotal = (basket) =>
  basket.reduce((amount, item) => {
    const itemPrice = typeof item.price === 'number' ? item.price : 0; // Ensure price is a number
    const itemQuantity = typeof item.quantity === 'number' ? item.quantity : 0; // Ensure quantity is a number
    return itemPrice * itemQuantity + amount;
  }, 0);

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_BASKET':
      const existingIndex = state.basket.findIndex((item) => item.id === action.item.id);
      let newBasket = [...state.basket];

      if (existingIndex !== -1) {
        newBasket[existingIndex].quantity += action.item.quantity;
      } else {
        newBasket = [...state.basket, action.item];
      }

      return {
        ...state,
        basket: newBasket,
      };

    case 'REMOVE_FROM_BASKET':
      return {
        ...state,
        basket: state.basket.filter((item) => item.id !== action.id),
      };

    case 'INCREMENT_ITEM':
      return {
        ...state,
        basket: state.basket.map((item) =>
          item.id === action.id ? { ...item, quantity: item.quantity + 1 } : item
        ),
      };

    case 'DECREMENT_ITEM':
      return {
        ...state,
        basket: state.basket.map((item) =>
          item.id === action.id ? { ...item, quantity: Math.max(item.quantity - 1, 0) } : item
      ),
      };

    default:
      return state;
  }
};

export default reducer;
