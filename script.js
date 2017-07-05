alert(`Добро пожаловать в базу данных фильмов!
Введите «help» для получения списка команд`)

let movieBase = ["Унесенные ветром", "Форсаж 8"]

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
            alert("Количество фильмов в базе: " + movieBase.length + ".")
            break
        case "exit":
            break
        default:
            alert("Команда не найдена! Для получения списка команд введите «help».")
            break
    }
} while (true)