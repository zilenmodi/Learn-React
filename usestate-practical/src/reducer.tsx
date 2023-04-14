function cartReducer(state, action) {
    switch (action.type) {
        case 'add':
            return {
                items: [...state.items, action.payload.item],
                quantities: [...state.quantities, action.payload.quantity],
                totalCost: state.totalCost + action.payload.quantity * action.payload.item.price,
            };
        case 'remove':
            const itemIndex = state.items.findIndex(item => item.id === action.payload.item.id);
            const newItems = [...state.items];
            const newQuantities = [...state.quantities];
            newItems.splice(itemIndex, 1);
            newQuantities.splice(itemIndex, 1);
            return {
                items: newItems,
                quantities: newQuantities,
                totalCost: state.totalCost - action.payload.quantity * action.payload.item.price,
            };
        default:
            return state;
    }
}
export default cartReducer;