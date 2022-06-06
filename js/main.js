// var moviesRow = document.querySelector('[data-element=movie-container]')


//     // oviesRow.appendChild(movieItemEl)
// renderMovies(movies, moviesRow)

// function renderMovies(movies = [], node){
//     node.innerHTML = null
//     movies.forEach((movie) => {
//         let movieItemEl = cloneAndRender(movie)
//         node.appendChild(movieItemEl)
//     })

// }

// function cloneAndRender(movie){
//     let singleMovieTemplate = document.querySelector("#movie-item")
//     let movieItemElClone = singleMovieTemplate.content.cloneNode(true)

//     let movieImageEl = movieItemElClone.querySelector('[data-movie=img]')
//     movieImageEl.src = movie.imageUrl
//     movieImageEl.addEventListener('error', () => {
//         movieImageEl.src = "http://picsum.photos/200/200"
//     })

//     movieItemElClone.querySelector('[data-movie=title]').textContent = movie.title
//     movieItemElClone.querySelector('[data-movie=description]').textContent = movie.description
//     movieItemElClone.querySelector('[data-movie=year]').textContent = movie.year
//     return movieItemElClone
// }



// const users = [
//     {
//         id:1, 
//         firstname:"Jonathan"
//     },
//     {
//         id:2,
//         firstname:"Max"
//     },
//     {
//         id:3,
//         firstname:"G'ulom"
//     },
//     {
//         id:4,
//         firstname:"G'ani"
//     }
// ]


// const found = users.find((el) => {
//     return el.id > 2
// })
// console.log(found)

// function find(arr, callback){
//     for(let i=0; i < arr.length; i++){
//         if(callback(arr[i]))return arr[i]
//     }
// }

// function findIndex(arr, callback){
//     for(let i=0; i < arr.length; i++){
//         if(callback(arr[i]))return i
//     }
// }
// console.log(findIndex(users, (el) => {
//     return el.id > 2
// }))

// document.body.addEventListener('click', (event) =>{
//     console.log(event.target)
// })
const itemPerPage = 6;
var todos = [
    {id:12, title:"Lorem ipsum dolor ... ", isCompleted:false},
    {id:13, title:"Lorem ipsum dolor ... ", isCompleted:false},
    {id:14, title:"Lorem ipsum dolor ... ", isCompleted:false},
    {id:15, title:"Lorem ipsum dolor ... ", isCompleted:false},
    {id:16, title:"Lorem ipsum dolor ... ", isCompleted:false},
    {id:17, title:"Lorem ipsum dolor ... ", isCompleted:false},
    {id:18, title:"Lorem ipsum dolor ... ", isCompleted:false},
    {id:19, title:"Lorem ipsum dolor ... ", isCompleted:false},
    {id:20, title:"Lorem ipsum dolor ... ", isCompleted:false},
    {id:21, title:"Lorem ipsum dolor ... ", isCompleted:false},
    {id:22, title:"Lorem ipsum dolor ... ", isCompleted:false},
    {id:23, title:"Lorem ipsum dolor ... ", isCompleted:false},
    {id:24, title:"Lorem ipsum dolor ... ", isCompleted:false},
    {id:25, title:"Lorem ipsum dolor ... ", isCompleted:false},
]
var currentPage=1;

var todoListEl = document.querySelector(".todo-list")
todoListEl.addEventListener("change", (event) => {
    if(event.target.dataset.task === 'check'){
        todos = todos.map(todo => {
            if(todo.id == event.target.dataset.todoId){
                todo.isCompleted = event.target.checked
            }
            return todo
        })
        renderTodos(todos, todoListEl)
    }
})


todoListEl.addEventListener("click", (event) => {
    if(event.target.dataset.task === 'delete'){
        console.log(event.target.dataset.todoId)
        todos = todos.filter(todo => todo.id != event.target.dataset.todoId)
        renderTodos(todos ,todoListEl)
    }
})


function createCloneTodo(todo){
    let templateTodoEl = document.querySelector("#todo-item")
    let cloneTodoItem = templateTodoEl.content.cloneNode(true)
    
    let checkBoxEl = cloneTodoItem.querySelector(".todo-is-completed")
    checkBoxEl.checked = todo.isCompleted
    checkBoxEl.dataset.todoId = todo.id
    checkBoxEl.dataset.task = "check"

    cloneTodoItem.querySelector(".todo-title").textContent = `${todo.id} ${todo.title}`

    let deleteBtn = cloneTodoItem.querySelector(".todo-delete-btn")
    deleteBtn.dataset.todoId = todo.id 
    deleteBtn.dataset.task = "delete"

    return cloneTodoItem
}

function renderTodos(todos = [], node){
    node.innerHTML = null
    // [itemPerPage*(currentPage-1), currentPage*itemPerPage]
    todos.slice(itemPerPage*(currentPage-1), currentPage*itemPerPage).forEach((todo) => {
        node.appendChild(createCloneTodo(todo))
    })
}

renderTodos(todos, todoListEl)



// Pagination 
var paginationEl = document.querySelector(".todo-pagination")

paginationEl.addEventListener('click', (event) => {
    console.log(event.target.dataset.pageId)
    if(event.target.dataset.task == 'page'){
        currentPage = event.target.dataset.pageId
        renderTodos(todos, todoListEl)
        renderPagination()
    }
})

function renderPagination(){
    paginationEl.innerHTML = null
    for(let i=1; i <= Math.ceil(todos.length / itemPerPage); i++ ){
        let templatePageItem = document.querySelector("#pagination-item")
        let pageItem = templatePageItem.content.cloneNode(true)

        let itemEl = pageItem.querySelector(".page-item")
        if(i == currentPage){
            itemEl.classList.add("active")
        }else{
            itemEl.classList.remove("active")
        }

        let linkEl = pageItem.querySelector(".page-link")
        linkEl.textContent = i
        linkEl.dataset.pageId = i
        linkEl.dataset.task = 'page'
        paginationEl.appendChild(pageItem)
    }
}

renderPagination()


var arr = [12, 14, 15, 17, 90, 13,1]
console.log(arr.slice(4))
arr.splice(2, 4)

// console.log(arr)