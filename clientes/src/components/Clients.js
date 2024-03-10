import React from "react";


function Clients(props) {
    return (
        <div>
            <h1>These clients are from the API</h1>
            {props.clients.map((client) => {
                return (
                    <div key={client.id}>
                        <h2>{client.name}</h2>
                        <p>{client.age}</p>
                    </div>
                );
            })}
        </div>
    )
}

export default Clients;