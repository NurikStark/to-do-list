import React from "react";
import { HeaderMenu } from "./headermenu";
import { FooterMenu } from "./footer";
type TypeTasks = {
  finishedTasksCount: number;
  activeTasksCount: number;
};
export function TaskPage(props: TypeTasks) {
  return (
    <body>
      <HeaderMenu></HeaderMenu>
      <div className="main">
        <div className="kanban-description">
          <a className="close" href="/"></a>
          <div className="description-text">
            <p className="title-description">Main page – performance issues</p>
            <a href="" className="text-description">
              Это был темный лес, издали казавшийся непроходимым. Там Пахапиль
              охотился, глушил рыбу, спал на еловых ветках. Короче – жил, пока
              русские не выгнали оккупантов. А когда немцы ушли, Пахапиль
              вернулся. Он появился в Раквере, где советский капитан наградил
              его медалью. Медаль была украшена четырьмя непонятными словами,
              фигурой и восклицательным знаком.
            </a>
          </div>
        </div>
      </div>
      <FooterMenu
        activeTasksCount={props.activeTasksCount}
        finishedTasksCount={props.finishedTasksCount}
      ></FooterMenu>
    </body>
  );
}
