import React from "react";

//object based keys using:

const user={
    name:"bas",
    age:20,
    sex:"male",

}

function User(props) {

    return(
        <div>
            {Object.keys(user).map(key => (
                <p>{user[key]}</p>
            )
            )}
        </div>    );

}


export default User