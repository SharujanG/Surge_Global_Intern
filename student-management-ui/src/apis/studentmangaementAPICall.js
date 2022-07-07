export function getUser(){
    return fetch('http://localhost:4000/student')
        .then(res => res.json())
        .then(data => data)
}

export function addUser(user){
    return fetch('http://localhost:4000/student/register',{
        method:'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(user)
    })
    .then(res => res.json())
    .then(data => data);

}

export function editUser(user){
    return fetch(`http://localhost:4000/student/edit/${user._id}`,{
        method:'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(user)
    })
    .then(res => res.json())
    .then(data => data);

}


export function deleteUser(id){
    return fetch(`http://localhost:4000/student/delete/${id}`,{
        method:'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(res => res.json())
    .then(data => data);

}

