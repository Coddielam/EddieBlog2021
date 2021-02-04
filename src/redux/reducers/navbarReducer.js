const navbarReducer = (state="home", action) => {
    const {type} = action;
    switch (type) {
        case 'HOME':
            return state = 'home';
        case 'PROJECTS':
            return state = 'projects';
        default:
            return state;
    }
}

export default navbarReducer;