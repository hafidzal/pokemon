import React from 'react'

const GhibliCard = ({filmDetails}) => {
    return (
      <div style={{"maxWidth" : "30rem"}} key={filmDetails.id} className="ghibli-wrapper">
        <div className="ghibli-title"><b>{filmDetails.title}</b></div>
        <div>
            <ul>
                <li>
                    <h6>Directed by</h6>
                    {filmDetails.director}
                </li>
                <li>
                    <h6>Produced by</h6>
                    {filmDetails.producer}
                </li>
            </ul>
        </div>
        <div>     
            <p>{filmDetails.description}</p>
        </div>
      </div>
    )
};

export default GhibliCard