export const getCategories = () => {
    return fetch("http://localhost:8000/categories", {
        headers: {
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        }
    })
    .then(res => res.json())
    }