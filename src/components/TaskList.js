import React from "react";

export default function TaskList({allTasks, handleDelete}) {
  return(
    <ul>
      {allTasks.map(({ title, description, id }) => (
        <li id={id}>
          <h2>{title}</h2>
          <button onClick={handleDelete(id)}>X</button>
          {!description ? null : <p>{description}</p>}
        </li>
      ))}
    </ul>
  );
}