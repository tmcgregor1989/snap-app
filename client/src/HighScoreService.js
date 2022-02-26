const baseURL = 'http://localhost:5000/api/players/'

export const getHighScores = () =>{
    return fetch(baseURL)
    .then(res => res.json())
}


export const postHighScore = (booking) => {
    return fetch(baseURL, {
        method: 'POST',
        body: JSON.stringify(booking),
        headers: { 'Content-Type': 'application/json'}
    })
    .then(res => res.json())
}

export const deleteHighScore = (id) =>{
    return fetch(baseURL + id, {
        method: 'DELETE'
    })
}


export const updateHighScore = (booking) => {
    return fetch(baseURL + booking._id, {
        method: 'PUT',
        body: JSON.stringify(booking),
        headers: { 'Content-Type': 'application/json'}
    })
    .then(res => res.json())
}