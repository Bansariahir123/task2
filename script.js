const input = document.getElementById("taskInput");
const list = document.getElementById("taskList");
const count = document.getElementById("taskCount");

document.getElementById("addBtn").addEventListener("click", () => {
    if (input.value.trim() === "") return;

    let li = document.createElement("li");
    li.innerHTML = `${input.value} 
        <button class="del">X</button>`;

    li.addEventListener("click", () => {
        li.classList.toggle("completed");
    });

    li.querySelector(".del").addEventListener("click", (e) => {
        e.stopPropagation();
        li.remove();
        updateCount();
    });

    list.appendChild(li);
    input.value = "";
    updateCount();
});

function updateCount() {
    count.textContent = list.children.length;
}
