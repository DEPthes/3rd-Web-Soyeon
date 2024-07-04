import './Project.css'

type project = {
    picture:string; 
    projectName:string; 
    projectIntro:string; 
    projectType:string
}

const Project:React.FC<project> = (props)=>{
    return(
        <>
        <div className='display'>
            <img src={props.picture}/>
            <div className='name-type'>
                <p>{props.projectName}</p>
                <button className='type'>{props.projectType}</button>
            </div>
            <p>{props.projectIntro}</p>
        </div>
        </>
        
    );
}

export default Project;