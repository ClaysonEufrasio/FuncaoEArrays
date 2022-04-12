function mudar(firstPlace, secondPlace, lastPlace) {
    if (lastPlace === "camila") [firstPlace, secondPlace, lastPlace] = [firstPlace, lastPlace, secondPlace]
    else if (secondPlace === "camila") [firstPlace, secondPlace, lastPlace] = [secondPlace, firstPlace, lastPlace]
    else (firstPlace === "camila")[firstPlace, secondPlace, lastPlace] = [firstPlace, secondPlace, lastPlace]
    return console.log(firstPlace, secondPlace, lastPlace)
}

mudar("carlos", "jose", "camila")
mudar("carlos", "camila", "jose")
mudar("camila", "jose", "carlos")
