import './App.css';
import axios, {get} from "axios";
import Clients from "./components/Clients";
import {useEffect, useState} from "react";
import image from "./images/image.jpg"

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
          <body>
          <div className="main">
              <div className="container">
                  <div className="signup-content">
                      <div className="signup-img">
                          <img src={image} alt=""/>
                      </div>
                      <div className="signup-form">
                          <form method="POST" className="register-form" id="register-form">
                              <h2>Client registration form</h2>
                              <div className="form-row">
                                  <div className="form-group">
                                      <label htmlFor="name">Name :</label>
                                      <input type="text" name="name" id="name" required=""/>
                                  </div>
                                  <div className="form-group">
                                      <label htmlFor="last_name">Last Name :</label>
                                      <input type="text" name="last_name" id="last_name" required=""/>
                                  </div>
                              </div>
                              <div className="form-group">
                                  <label htmlFor="birth_date">DOB :</label>
                                  <input type="text" name="birth_date" id="birth_date"/>
                              </div>
                              <div className="form-radio">
                                  <label htmlFor="gender" className="radio-label">Gender :</label>
                                  <div className="form-radio-item">
                                      <input type="radio" name="gender" id="male"/>
                                      <label htmlFor="male">Male</label>
                                      <span className="check"></span>
                                  </div>
                                  <div className="form-radio-item">
                                      <input type="radio" name="gender" id="female"/>
                                      <label htmlFor="female">Female</label>
                                      <span className="check"></span>
                                  </div>
                              </div>
                              <div className="form-row">
                                  <div className="form-group">
                                      <label htmlFor="country">Country :</label>
                                      <input type="text" name="country" id="country"/>
                                  </div>
                                  <div className="form-group">
                                      <label htmlFor="state">State :</label>
                                      <div className="form-select">
                                          <select name="state" id="state">
                                              <option value=""></option>
                                              <option value="us">America</option>
                                              <option value="uk">English</option>
                                          </select>
                                          <span className="select-icon"><i
                                              className="zmdi zmdi-chevron-down"></i></span>
                                      </div>
                                  </div>
                              </div>
                              <div className="form-row">
                                  <div className="form-group">
                                      <label htmlFor="city">City :</label>
                                      <input type="text" name="city" id="city"/>
                                  </div>
                              </div>
                              <div className="form-group">
                                  <label htmlFor="address">Address :</label>
                                  <input type="text" name="address" id="address" required=""/>
                              </div>
                              <div className="form-group">
                                  <label htmlFor="zipcode">Zipcode :</label>
                                  <input type="text" name="zipcode" id="zipcode"/>
                              </div>
                              <div className="form-group">
                                  <label htmlFor="email">Email :</label>
                                  <input type="email" name="email" id="email"/>
                              </div>
                              <div className="form-submit">
                                  <input type="submit" value="Reset All" className="submit" name="reset" id="reset"/>
                                  <input type="submit" value="Submit Form" className="submit" name="submit"
                                         id="submit"/>
                              </div>
                          </form>
                      </div>
                  </div>
              </div>
          </div>
          </body>
          {/*<form>*/}
          {/*    <label>Name:*/}
          {/*        <input onChange={changeHandler} type="text" id="name" value={clientInfo.name}/>*/}
          {/*    </label>*/}
          {/*    <label>Age:*/}
          {/*        <input onChange={changeHandler} type="number" id="age" value={clientInfo.age}/>*/}
          {/*    </label>*/}
          {/*    <label>Document:*/}
          {/*        <input onChange={changeHandler} type="text" id="document" value={clientInfo.document}/>*/}
          {/*    </label>*/}
          {/*    <label>Phone:*/}
          {/*        <input onChange={changeHandler} type="number" id="phone" value={clientInfo.phone}/>*/}
          {/*    </label>*/}
          {/*    <label>Email:*/}
          {/*        <input onChange={changeHandler} type="text" id="email" value={clientInfo.email}/>*/}
          {/*    </label>*/}
          {/*    <label>Address:*/}
          {/*        <input onChange={changeHandler} type="text" id="address" value={clientInfo.address}/>*/}
          {/*    </label>*/}

          {/*    <button onClick={addClient}>Add Client</button>*/}
          {/*</form>*/}
      </div>
  );
}

export default App;
