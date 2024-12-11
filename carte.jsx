import React from React;
function Carte({firstName,lastName,age,hair}){
    return(
        <div className="container">
            <h2>
                {lastName},{firstName}
            </h2>
            <p>Age: {age}</p>
            <p>Hair color</p>
        </div>
    )
}
export default Carte;