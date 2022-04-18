document.querySelector('#push').onclick = function () {
    if (document.querySelector('#newTask input').value.length === 0) {
        alert("Please Enter The Valid Value")
    } else {
        document.querySelector('#tasks').innerHTML = `
            <div class='task'>
                    <span id='taskName'>
                            ${document.querySelector('#newTask input').value}
                    </span>
                    <button class='delete'>
                    <i class='far fa-trash-alt'></i>
                    </button>
            </div>
        `
    }
    let deleteItem = document.querySelectorAll('.delete');
    for (let i = 0; i < deleteItem.length; i++) {
        deleteItem[i].onclick = function () {
            this.parentNode.remove();
        }
    }
    let tasks = document.querySelectorAll('.task');
    for (let i = 0; i < tasks.length; i++) {
        tasks[i].onclick = function () {
            this.classList.toggle('completed')
        }
    }
    document.querySelector('#newTask input').value = ''
}