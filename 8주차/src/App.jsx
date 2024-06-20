import { useState } from "react";
import NoProjectSelected from "./components/NoProjectSelected.jsx";
import ProjectSidebar from "./components/ProjectSidebar.jsx";
import NewProject from "./components/NewProject.jsx";
import SelectedProject from "./components/SelectedProject.jsx";
import EditProject from "./components/EditProject.jsx";

export default function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProject: undefined, //정의되지 않음으로 하는 이유는 null로 하면 프로젝트가 없다는 뜻이지만 undefined로 하면 프로젝트가 선택되지 않았다의 의미를 갖는거기 때문에...
    isEditing: false, //edit의 상태 추가
    projects: [],
    tasks:[]
  });

  function handleAddTask(text){
    setProjectsState((prevState) =>{
      const taskId = Math.random();
      const newTask = {
        text: text,
        projectId: prevState.selectedProject,
        id: taskId,
      };

      return{
        ...prevState,
        tasks: [newTask, ...prevState.tasks]
      };
    });
  }
  function handleDeleteTask(id){
    setProjectsState((prevState) => {
      return{
        ...prevState,
        tasks: prevState.tasks.filter(
          (task)=>task.id !== id
        ),
      };
    });
  }

  function handleSelectedProject(id){
    setProjectsState((prevState) => {
      return{
        ...prevState,
        selectedProject: id
      };
    });
  }

  function handleDeleteProject(){
    setProjectsState((prevState) => {
      return{
        ...prevState,
        selectedProject: undefined,
        projects: prevState.projects.filter(
          (project)=>project.id !== prevState.selectedProject
        ),
      };
    });
  }

  function handleEditProject(projectData) { //프로젝트 수정
    setProjectsState((prevState) => {
      const editProject = prevState.projects.map((project) => {
        if (project.id === prevState.selectedProject) {
          return {
            ...project,
            ...projectData
          };
        }
        return project;
      });

      return {
        ...prevState,
        projects: editProject,
        isEditing: false
      };
    });
  }
 
  function handleStartEditProject() { //edit을 눌렀을 때 true로 바꿈
    setProjectsState((prevState) => {
      return {
        ...prevState,
        isEditing: true
      };
    });
  }

  function handleCancelEditProject(){ //수정 취소
    setProjectsState((prevState)=>{
      return{
        ...prevState,
        isEditing:false
      };
    });
  }

  function handleStartAddProject(){
    setProjectsState((prevState) => {
      return{
        ...prevState,
        selectedProject: null
      };
    });
  }

  function handleCancelAddProject(){
    setProjectsState((prevState) => {
      return{
        ...prevState,
        selectedProject: undefined
      };
    });
  }

  function handleAddProject(projectData){
    setProjectsState((prevState) =>{
      const newProject = {
        ...projectData,
        id:Math.random()
      };

      return{
        ...prevState,
        selectedProject: undefined,
        projects: [...prevState.projects, newProject]
      };
    });
  }

  const selectedProject = projectsState.projects.find(project => project.id === projectsState.selectedProject);

  let content = (
    <SelectedProject 
      project = {selectedProject} 
      onDelete = {handleDeleteProject}
      onAddTask = {handleAddTask}
      onDeleteTask = {handleDeleteTask}
      onEdit={handleStartEditProject}
      tasks = {projectsState.tasks}
    />
  );

  if(projectsState.isEditing && selectedProject){ //누르면 true로 바뀌어서 실행
    content = 
    <EditProject 
    project={selectedProject} 
    onSave={handleEditProject} 
    onCancel={handleCancelEditProject}/>
  }
  else if(projectsState.selectedProject === null){
    content = 
    <NewProject 
    onAdd={handleAddProject} 
    onCancel = {handleCancelAddProject} 
    onEdit = {handleEditProject}
    />
  }else if(projectsState.selectedProject === undefined){
    content = 
    <NoProjectSelected 
    onStartAddProject={handleStartAddProject}
    />
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSidebar 
        onStartAddProject={handleStartAddProject} 
        projects = {projectsState.projects}
        onSelectProject = {handleSelectedProject}
        selectedProject={projectsState.selectedProject}
      />
      {content}
    </main>
  );
}

