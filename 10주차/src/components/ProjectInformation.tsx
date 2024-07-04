import React from "react";
import './ProjectInformation.css'

type projectInfo = {
    picture1: string;
    picture2: string;
    title: string;
    intro: string;
    detailIntro: string;
    team_person: {name:string, team:string, id: number}[];
}

const ProjectIntormation:React.FC<projectInfo>=(prop)=>{
    return(
        <>
        <div className="container">
            <div className="top">
                <img src={prop.picture1} className="img1"/>
                <div className="top-margin">
                    <p className="bold">{prop.title}</p>
                    <p>{prop.intro}</p>
                </div>
            </div>
            <img src={prop.picture2} className="img2"/>
            <div className="middle">
                <p className="bold">프로젝트 설명</p>
                <p>{prop.detailIntro}</p>
            </div>
            <div className="bottom">
                <p className="bold">프로젝트 팀원</p>
                    <p className="bold"></p>
                    <div className="team-person">
                    {prop.team_person.map(
                        person => (
                            <div className="team-person-detail" key={person.id}>
                                <p>{person.team}<br></br>{person.name}</p>
                            </div>
                        )
                    )}
                </div>
                        
            </div>
        </div>
        </>
    );
}
export default ProjectIntormation;