import React from "react";

export function NewArticle({
  title = "Любая тема",
  exampleText = "Сюдой пишите то, что хотите донести окружающим",
}) {
  //console.log(React.Children.map(children, (child) => child));
  return (
    <form className="add-article">
      <h3>Создать новость</h3>
      <div className="add-article-form">
        <input placeholder={title} />
        <textarea placeholder={exampleText}></textarea>
        <div className="article-form-options">
          <select>
            <option>Только для меня</option>
            <option>Для друзей</option>
            <option>Для всех</option>
          </select>
          <button>Запостить</button>
        </div>
      </div>
    </form>
  );
}
