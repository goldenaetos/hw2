alert(`Добро пожаловать в базу данных фильмов!
Введите «help» для получения списка команд`)

do {
    const cmd = prompt("Введите команду.")

    if (cmd == "exit") break
    
    switch (cmd) {
        case "help":
            alert(`help – Просмотреть список команд.\n
show – Просмотреть содержимое базы.\n
addfilm – Добавить фильм в базу данных.\n
amount – Просмотреть, сколько всего фильмов в базе.\n
exit – Выйти из программы.`)
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
        default:
            alert("Команда не найдена! Для получения списка команд введите «help».")
            break
    }
} while (true)