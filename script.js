alert(`Добро пожаловать в базу данных фильмов!
Введите «help» для получения списка команд`)

do {
    const cmd = prompt("Введите команду.")

    if (cmd == "exit") break
    
    switch (cmd) {
        case "help":
            alert("Under construction")
            break
        case "show":
            alert("Under construction")
            break
        case "addfilm":
            alert("Under construction")
        case "amount":
            alert("Under construction")
            break
        case "exit":
            break
    }
} while (true)