let list = document.querySelector(".list")
let counter_list = 0;
let lista_spesa = ["pane", "mozzarella", "uova", "manzo", "prosciutto", "acqua", "ricotta", "pasta"]

while(counter_list < lista_spesa.length){
    list.innerHTML += `<li>${lista_spesa[counter_list]}</li>`
    console.log(list)
    counter_list++
}