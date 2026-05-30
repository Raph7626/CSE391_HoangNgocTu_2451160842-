const todoInput = document.getElementById('todoInput');
const addBtn = document.getElementById('addBtn');
const todoList = document.getElementById('todoList');
const itemCount = document.getElementById('itemCount');
const clearCompleted = document.getElementById('clearCompleted');
const filterBtns = document.querySelectorAll('.filter-btn');

let todos = [];
let currentFilter = 'all';

// Load từ LocalStorage
function loadTodos() {
    const saved = localStorage.getItem('todos');
    todos = saved ? JSON.parse(saved) : [];
    renderTodos();
}

// Save vào LocalStorage
function saveTodos() {
    localStorage.setItem('todos', JSON.stringify(todos));
}

// Tạo element todo
function createTodoElement(todo, index) {
    const li = document.createElement('li');
    li.className = `todo-item ${todo.completed ? 'completed' : ''}`;
    li.dataset.index = index;

    li.innerHTML = `
        <span>${todo.text}</span>
        <button class="delete-btn">×</button>
    `;

    // Toggle completed
    li.querySelector('span').addEventListener('click', () => {
        todos[index].completed = !todos[index].completed;
        saveTodos();
        renderTodos();
    });

    // Delete
    li.querySelector('.delete-btn').addEventListener('click', () => {
        todos.splice(index, 1);
        saveTodos();
        renderTodos();
    });

    // Double click để edit
    li.querySelector('span').addEventListener('dblclick', () => {
        const newText = prompt("Chỉnh sửa todo:", todo.text);
        if (newText !== null && newText.trim() !== '') {
            todos[index].text = newText.trim();
            saveTodos();
            renderTodos();
        }
    });

    return li;
}

// Render danh sách
function renderTodos() {
    todoList.innerHTML = '';

    const filteredTodos = todos.filter(todo => {
        if (currentFilter === 'active') return !todo.completed;
        if (currentFilter === 'completed') return todo.completed;
        return true;
    });

    filteredTodos.forEach((todo, i) => {
        const originalIndex = todos.indexOf(todo);
        todoList.appendChild(createTodoElement(todo, originalIndex));
    });

    updateCount();
}

// Cập nhật số items left
function updateCount() {
    const active = todos.filter(t => !t.completed).length;
    itemCount.textContent = `${active} items left`;
}

// Thêm todo mới
function addTodo() {
    const text = todoInput.value.trim();
    if (text === '') return;

    todos.push({
        text: text,
        completed: false
    });

    todoInput.value = '';
    saveTodos();
    renderTodos();
}

// Event Listeners
addBtn.addEventListener('click', addTodo);

todoInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') addTodo();
});

// Filter
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentFilter = btn.dataset.filter;
        renderTodos();
    });
});

// Clear completed
clearCompleted.addEventListener('click', () => {
    todos = todos.filter(todo => !todo.completed);
    saveTodos();
    renderTodos();
});

// Khởi tạo
loadTodos();