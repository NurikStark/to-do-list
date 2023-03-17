import React from "react";

type PropsTitle = {
    finishedTasksCount: number;
    activeTasksCount: number;
}

export function FooterMenu(props: PropsTitle){
    const name = 'Kadyber Nursultan';
    const year = '2002';

    return(
        <footer>
            <p>Active tasks:{props.activeTasksCount}</p>
            <p>Finished tasks:{props.finishedTasksCount}</p>
            <p>Kanban board by:{name} {year}</p>
        </footer>        
    )
}