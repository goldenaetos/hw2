alert(`Добро пожаловать в базу данных фильмов!
Введите «help» для получения списка команд`)

let movieBase = ["Унесенные ветром", "Форсаж 8"]

do {
    const cmd = prompt("Введите команду.")

    if (cmd == "exit") break
    
    switch (cmd) {
        case "help":
            alert(`help – Просмотреть список команд.\n
show – Просмотреть содержимое базы в консоли разработчика (у Вас должна быть открыта консоль разработчика).\n
addfilm – Добавить фильм в базу данных.\n
amount – Просмотреть, сколько всего фильмов в базе.\n
exit – Выйти из программы.`)
            break
        case "show":
            for (let item of movieBase) {
                console.log(item)
            }
            break
        case "addfilm":
            const filmName = prompt("Введите название фильма")
            movieBase.push(filmName)
            alert("Спасибо! Ваш фильм добавлен в базу")
            break
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