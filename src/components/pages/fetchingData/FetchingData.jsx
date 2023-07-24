import { useEffect, useState } from "react";

const FetchingData = () => {

    let [users, setUsers] = useState([]);

    useEffect(()=>{
      /*metodo para comunicarse con apis -> fetch()
      fetch predeterminado es tipo get*/
      let promesa = fetch("https://jsonplaceholder.typicode.com/users/");

      promesa
        .then((res) => res.json())
        .then((res) => setUsers(res))
        .catch((err) => console.log(err));
    }, []);

    const createUser =()=>{
        let newUser = {
          id: 1,
          name: "Jose",
          username: "Bret",
          email: "Sincere@april.biz",
          address: {
            street: "Kulas Light",
            suite: "Apt. 556",
            city: "Gwenborough",
            zipcode: "92998-3874",
            geo: {
              lat: "-37.3159",
              lng: "81.1496",
            },
          },
          phone: "1-770-736-8031 x56442",
          website: "hildegard.org",
          company: {
            name: "Romaguera-Crona",
            catchPhrase: "Multi-layered client-server neural-net",
            bs: "harness real-time e-markets",
          },
        };

        let promesa = fetch("https://jsonplaceholder.typicode.com/users/",{
            method:"POST",
            headers: {
                "Authorization": "barer 1020816412",
                "Content-type": "aplication/json"
            },
            body: JSON.stringify(newUser)
        });

        //back no pasa una respuesta como tal, pero se puede verificar que se haya subido con .then
        promesa.then((res)=> console.log(res))
    }


    const deleteUser =(id)=>{
        fetch('https://jsonplaceholder.typicode.com/users/${id}',{
            method: "DELETE"
        })
    }
    
 
  return (
    <div>
        <h1>fetching de datos</h1>
        <button onClick={createUser}>Crear usuario</button>
        <button onClick={()=>deleteUser(2)}>borrar usuario</button>
    </div>
  )
}

export default FetchingData