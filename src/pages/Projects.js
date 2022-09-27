import { useState, useEffect } from "react";

const Projects = (props) => {
    // create state to hold projects
    const [projects, setProjects] = useState(null);

    // create function to make api call
    const getProjectsData = async () => {
        // make api call and get reponse
        const response = await fetch(props.URL + "projects");
        // turn response into javascript object
        const data = await response.json();
        // set projects state to the data
        setProjects(data);
    };

    // make an initial call for the data inside a useEffect
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {getProjectsData()}, []);

    // define a function that will return the JSX needed once we get data
    const loaded = () => {
        return projects.map((project) => (
            <div>
                <h1>
                    {project.name}
                </h1>
                <img src={project.image} alt="" />
                <a href={project.git}>
                    <button>GitHub</button>
                </a>
                <a href={project.live}>
                    <button>Live Site</button>
                </a>
            </div>
        ));
    };

    return projects ? loaded() : <h1>Loading...</h1>
}

export default Projects
