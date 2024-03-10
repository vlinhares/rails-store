import './App.css';
import axios, {get} from "axios";
import Clients from "./components/Clients";
import {useEffect, useState} from "react";

const API_URL = "http://127.0.0.1:3000/api/v1/clients";

function getApiData(){
    return axios.get(API_URL).then((response) => response.data)
}

function App() {
    const [clients, setClients] = useState ([]);
    const [clientInfo,
        setClientInfo] = useState({name: '', age:0, document:'', phone:0, email:'', address:''})

    // useEffect(() => {
    //     let mounted = true;
    //     getApiData().then((items) =>{
    //         if(mounted){
    //             setClients(items);
    //         }
    //     });
    //     return() => (mounted = false);
    // }, []);

    // useEffect(() => {
    //     getApiData().then((items) => {
    //         setClients(items);
    //     })
    // }, []);
    useEffect(() => {
    axios({
        method: 'GET',
        url: 'http://127.0.0.1:3000/api/v1/clients'
    })
        .then(({data}) => {
            setClients(data);
        })
    }, []);
const addClient = (e) => {
    e.preventDefault();
    axios({
        method: 'POST',
        url: 'http://127.0.0.1:3000/api/v1/clients',
        data: clientInfo
    })
        .then(({data}) => {
            setClients((prev)=>{
                const newList = [...prev];
                newList.push(data);
                return newList;
            })
        })
};
const changeHandler = ({target}) => {
    setClientInfo((prev) => ({...prev, [target.id]:target.value}));
}

  return (
      // <div className="App">
      //     <Clients clients={clients}/>
      // </div>
      <div>
          <h1>These are our clients</h1>
          {clients.map((client, i) => (
              <div key={client.id}>
                  <p>{client.name} age: {client.age}</p>
                  {/*<button onClick={() => removeClient(client.id, i)}>Remove</button>*/}
                  {/*<button onClick={() => updateClient(client.id, i)}>Update</button>*/}
              </div>
          ))}
          <form>
              <label>Name:
                  <input onChange={changeHandler} type="text" id="name" value={clientInfo.name}/>
              </label>
              <label>Age:
                  <input onChange={changeHandler} type="number" id="age" value={clientInfo.age}/>
              </label>
              <label>Document:
                  <input onChange={changeHandler} type="text" id="document" value={clientInfo.document}/>
              </label>
              <label>Phone:
                  <input onChange={changeHandler} type="number" id="phone" value={clientInfo.phone}/>
              </label>
              <label>Email:
                  <input onChange={changeHandler} type="text" id="email" value={clientInfo.email}/>
              </label>
              <label>Address:
                  <input onChange={changeHandler} type="text" id="address" value={clientInfo.address}/>
              </label>

              <button onClick={addClient}>Add Client</button>
          </form>
      </div>
  );
}

export default App;
