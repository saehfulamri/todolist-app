// getting all required

const inputField = document.querySelector(".input-field textarea"),
todoLists = document.querySelector(".todoLists"),
pendingNum = document.querySelector(".pending-num"),
clearButton = document.querySelector(".clear-button");

// console.log(inputField, todoLists, pendingNum, clearButton);

// kita akan panggil fungsi ini ketika menambahkan nilai pada teks area, menghapus dan cek uncek pada tugas
function allTasks() {
    let tasks = document.querySelectorAll(".pending");

    // jika banyaknya tugas adalah 0 maka akan tertulis no, jika banyaknya tugas adalah lebih dari 0 maka akan tertulis sesuai dengan banyaknya tugas yang tersimpan dalam variabel pendungNum
    pendingNum.textContent = tasks.length === 0 ? "no" : tasks.length;

    let allLists = document.querySelectorAll(".list");
    if (allLists.length > 0) {
        todoLists.style.marginTop = "20px";
        clearButton.style.pointerEvents = "auto";

        if (allLists.length > 5) {
            todoLists.style.paddingRight = "10px";
            return;
        }
        todoLists.style.paddingRight = "0px";

        return
    } 
    
    todoLists.style.marginTop = "0px";
    clearButton.style.pointerEvents = "none";

}

// menambah tugas ketika kita mengisi nilai pada teks area dan menekan enter
inputField.addEventListener("keyup", (e) => {
    let inputVal = inputField.value.trim(); // trim function menghapus ruang pada depan dan belakang dari inputan nilai
    
    // jika kita menekan enter dan panjang input nilai lebih dari 0
    if (e.key === "Enter" && inputVal.length > 0) {
        let liTag = `
        <li class="list pending" onclick="handleStatus(this)">
            <input type="checkbox">
            <span class="task">${inputVal}</span>
            <i class="uil uil-trash" onclick="deleteTask(this)"></i>
        </li>
        `;

        todoLists.insertAdjacentHTML("beforeend", liTag); // masukkan li tag ke dalam todolist div
        inputField.value = ""; // menghapus nilai dari kolom input
        allTasks();
    }
})

function handleStatus(e) {
    const checkbox = e.querySelector("input"); // mendapatkan checkbox
    console.log(checkbox);
    checkbox.checked = checkbox.checked ? false : true;
    e.classList.toggle("pending");
    allTasks();
}

// menghapus tugas ketika kita menekan pada delete icon
function deleteTask(e) {
    e.parentElement.remove();
    allTasks();
}

// menghapus semua tugas ketika kita menekan pada tombol clear all
clearButton.addEventListener("click", () => {
    todoLists.innerHTML = "";
    allTasks();
})
