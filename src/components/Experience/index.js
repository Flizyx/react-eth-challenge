import React from 'react'
// const photo = '../../Assets/Images/profile.jpg'
import Loading from '../../shared/Loading/Loading';

const Experience = ({experience}) => {
    let datos={};
    if(experience!= undefined) {
        datos=experience;
    }
    // const experience = data
        

    return (
        <div className="ExperienceMainContainer">
            
            <div className="section">
            <h4>Experiencia</h4>
            {experience === undefined ? <Loading/> : experience.map((experience,index) => {
                return (
                    <div className="ExperienceContainer" key={index}>
                    <p><strong>Compañía:</strong> {experience.company}</p>
                    <p><strong>Cargo:</strong> {experience.jobTitle}</p>
                    <p><strong>Fecha: </strong>{experience.startDate} - {experience.endDate}</p>
                    <p><strong>Descripción:</strong> {experience.jobDescription}</p>
                    </div>
                )
            })}
            </div>
        </div>
    )
}

export default Experience