const initialState = [
    {
        name : "Jaxi",
        profession : "AI Architect."
    },
    {
        name : "Pellegri",
        profession : "Frontend developer"
    },
    {
        name : "David",
        profession : "Full-stack developer"
    }
]

export const testReducer = (state = initialState,action) => {
    switch (action.type){
        default : return state
    }
}