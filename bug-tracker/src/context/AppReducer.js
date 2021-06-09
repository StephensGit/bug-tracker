export default (state, action) => {
    switch(action.type) {
        case 'ADD_BUG':
            return {
                ...state,
                // ...state gets a copy of the current state, action.payload is the new transaction we're adding,and we add it to state.transactions array
                todos: [action.payload, ...state.bugs]
            }
        case "EDIT_BUG":
            const updatedBug = action.payload;
        
            const updatedBugs = state.bugs.map((bug) => {
                if (bug.id === updatedBug.id) {
                return updatedBug;
                }
                return bug;
            });
        
            return {
                ...state,
                bugs: updatedBugs,
            };
        case 'DELETE_BUG':
            return {
                ...state,
                todos: state.bugs.filter(bug => bug.id !== action.payload)
            }

        default:
            return state;
    }
}