import React from 'react';
import ApplicationCard from '../Components/Applications';


function Work() {
    const projects = [
        {
            id: 1,
            title: "FarQuest",
            image: "https://i.imgur.com/qAizEgu.png",
            github: "https://github.com/LiamStewart8/farQuest",
            live: "https://farquest.herokuapp.com/"
        },
        {
            id: 2,
            title: "Gamehub",
            image: "https://i.imgur.com/z8bE4g9.png",
            github: "https://github.com/LiamStewart8/gamehub",
            live: "https://acedyu.github.io/gamehub/"
        },
        {
            id: 3,
            title: "Employee Directory",
            image: "https://i.imgur.com/PRqkZTX.png",
            github: "https://github.com/LiamStewart8/Employee-Directory",
            live: "https://liamstewart8.github.io/Employee-Directory/"
        },
        {
            id: 4,
            title: "Workout Tracker",
            image: "https://i.imgur.com/nw1OOUe.png",
            github: "https://github.com/LiamStewart8/Workout-Tracker",
            live: " https://whispering-river-20351.herokuapp.com/"
        },
        {
            id: 5,
            title: "Note Taker",
            image: "https://i.imgur.com/R6xGAqc.png",
            github: "https://github.com/LiamStewart8/Note-Taker",
            live: "https://fierce-caverns-62000.herokuapp.com/"
        },
        {
            id: 6,
            title: "Work Day Scheduler",
            image: "https://i.imgur.com/VjrQa0N.png",
            github: "https://github.com/LiamStewart8/Work-Day-Scheduler",
            live: "https://liamstewart8.github.io/Work-Day-Scheduler/"
        }
    ]
    return (
        <div>
            {projects.map(app => (
                <ApplicationCard
                id={app.id}
                image={app.image}
                title={app.title}
                github={app.github}
                live={app.live} />
            ))}
        </div>
    )   
}

export default Work;