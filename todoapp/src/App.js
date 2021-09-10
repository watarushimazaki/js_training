import { element } from "./view/html-util.js";

export class App {
    mount() {
        const formElement = document.querySelector("#js-form");
        const inputElement = document.querySelector("#js-form-input");
        const containerElement = document.querySelector("#js-todo-list");
        const todoItemCountElement = document.querySelector("#js-todo-count");

        let todoItemCount = 0;
        formElement.addEventListener("submit",(event) => {
            event.preventDefault();
            
            const todoItemElement = element`<li>${inputElement.value}</li>`; //入力されたタスクをelement化 <ul>いらないんか
            containerElement.appendChild(todoItemElement); //上記をHTMLに埋め込む
            todoItemCount += 1;
            todoItemCountElement.textContent = `Todoアイテム数： ${todoItemCount}`; //カウントを更新??appendChildしないの??既存の要素に追加してはいけないから
            inputElement.value = "";
        });
    }
}