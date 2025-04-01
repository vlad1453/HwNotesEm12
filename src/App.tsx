import { useState } from "react";
import "./App.css";
import ContainerCtrucure from "./components/List";

function App() {
  const [text, setText] = useState<string>("");
  const [massive, setMassive] = useState<Type[]>([]);
  const [Id, setId] = useState<number>(0);

  // Правильная обработка клика
  const handleClick = (event: React.MouseEvent) => {
    setId(Id + 1);
    event.preventDefault();
    const newMassive: Type = { id: Id, name: text, isActive: true };
    setMassive((massive) => [...massive, newMassive]);
    setText("");
  };

  return (
    <div className="p-4">
      <ContainerCtrucure title="Your List">
        <input
          type="text"
          className=""
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Введіть нотатку..."
        />
        <button onClick={handleClick}>Додати</button>
      </ContainerCtrucure>
      <ol>
        {massive.map((obj) => (
          <li className="list">{obj.name}</li>
        ))}
      </ol>
    </div>
  );
}

export default App;
