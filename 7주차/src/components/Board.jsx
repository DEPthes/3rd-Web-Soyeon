import { useState } from "react";

export default function Board() {
  const [userInput, setUserInput] = useState({
    title: '제목',
    content: '내용',
  });

  const [items, setItems] = useState([]); 

  function handleChange(input, newValue) {
    setUserInput(prevUserInput => ({
      ...prevUserInput,
      [input]: newValue
    }));
  }

  function handleSubmit(event) {
    event.preventDefault(); // 창이 새로고침 되는 것을 막아줌 결과가 계속 누적되게 해줌
    setItems(prevItems => [
      ...prevItems,
      { title: userInput.title, content: userInput.content } // 객체 보냄
    ]);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Title: </label>
        <input
          onChange={(event) => handleChange('title', event.target.value)}
          placeholder={userInput.title}
          type="text"
          name="title"
        />

        <div>
          <label>Content: </label>
          <input
            onChange={(event) => handleChange('content', event.target.value)}
            placeholder={userInput.content}
            type="text"
            name="content"
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      
      <div className="items">
        {items.map((item, index) => (
          <div key={index} className="item">
            <h3>{index + 1}. {item.title}</h3>
            <p>{item.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}