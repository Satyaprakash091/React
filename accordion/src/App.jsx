import React from "react";
import Accordion from "./Accordion";

function App() {
  const items = [
    {
      title: "Title1",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quis fuga fugiat necessitatibus? Quia nobis aliquam quasi excepturi repellendus perferendis veritatis. Libero, esse exercitationem quidem id vitae recusandae ullam sit?",
    },
    {
      title: "Title2",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quis fuga fugiat necessitatibus? Quia nobis aliquam quasi excepturi repellendus perferendis veritatis. Libero, esse exercitationem quidem id vitae recusandae ullam sit?",
    },
    {
      title: "Title3",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quis fuga fugiat necessitatibus? Quia nobis aliquam quasi excepturi repellendus perferendis veritatis. Libero, esse exercitationem quidem id vitae recusandae ullam sit?",
    },
  ];
  return (
    <div>
      <Accordion items={items}/>
    </div>
  );
}

export default App;
