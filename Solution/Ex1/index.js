document.addEventListener("DOMContentLoaded", function() {
    const input = document.getElementById("userInput");
    const enterButton = document.getElementById("enter");
    const itemList = document.getElementById("itemList");

    function createListItem(text) {
        const li = document.createElement("li");
        li.textContent = text;
        li.addEventListener("click", function() {
            li.classList.toggle("completed");
        });

        const deleteButton = document.createElement("button");
        deleteButton.innerHTML = "&times;";
        deleteButton.classList.add("delete");
        deleteButton.addEventListener("click", function() {
            li.remove();
        });

        li.appendChild(deleteButton);
        itemList.appendChild(li);
    }

    enterButton.addEventListener("click", function() {
        if (input.value !== "") {
            createListItem(input.value);
            input.value = "";
        }
    });

    input.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            if (input.value !== "") {
                createListItem(input.value);
                input.value = "";
            }
        }
    });
});
