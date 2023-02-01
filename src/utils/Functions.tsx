export function changeIT(ID: any) {
    var elem = document.getElementById(ID)
    elem.classList.remove("bg-blue-500 hover:bg-blue-700")
    elem.classList.add("bg-green-500 hover:bg-green-700")
}

export function changeEmoji(ID: any) {
    var elem = document.getElementById(ID)
    elem.classList.add(ID)
}