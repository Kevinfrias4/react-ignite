const initState = {
    popular: [],
    newGames: [],
    upcoming: []
}

const gamesReducer = (state=initState, action) => {
    switch(action.type) {
        case 'FETCH_GAMES':
            return {...state}
        default:
            return {...state}
    }
}

//ActionCreator
const fetchGames = (userData) => {
    return {
        type: 'FETCH_GAMES'
    };
};

export default gamesReducer;