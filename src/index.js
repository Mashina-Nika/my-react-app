import React from "react";
import ReactDOM from "react-dom/client";

import AppHeader from "./components/app-header";
import SearchPanel from "./components/search-panel";
import TodoList from "./components/todo-list";

const App = () => {
    const todoData = [
        {label:'Check works', important:false},
        {label: 'Make tests', important: true},
        {label: 'Go for a walk', important: false},
    ];

    return (
        <div>
            <AppHeader />
            <SearchPanel />
            <TodoList/>
            <TodoList todos = {todoData}/>
        </div>
    );
}


const root = ReactDOM.createRoot(document.getElementById('root'));root.render(<App />);
