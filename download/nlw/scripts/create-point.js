//document
  //  .querySelector("select[name=uf]")
// .addEventListener("change", () => {
//        console.log("mudei")
  //  })

  function populateUFs(){
      const ufSelect = document.querySelector("select[name=uf]")

      //ufSelect.innerHTML = "<option value>Selecione seu Estado</option>"


      fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
        .then( res => res.json() ) //(res) => {return res.json()}
        .then( states => {
            ufSelect.innerHTML = "<option value>Selecione seu Estado</option>"
            for(const state of states){
                ufSelect.innerHTML += `<option value="${state.id}">${state.nome}</option>`
            }
            

        })
  }
  populateUFs()

  function getCities(event){
      const citySelect = document.querySelector("[name=city]")
      const stateInput = document.querySelector("[name=state]")

      const ufValue = event.target.value

      const inddexOfSelectedState = event.target.selectedIndex
      stateInput.value =event.target.options[inddexOfSelectedState].text

      
      const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`

      citySelect.innerHTML = "<option value>Selecione sua Cidade</option>"
      citySelect.disabled = true

      fetch (url)
      .then(res => res.json())
      .then( cities => {
        for(const city of cities){
            citySelect.innerHTML += `<option value="${city.nome}">${city.nome}</option>`

            citySelect.disabled = false
        }
        
    })

  }

  document
    .querySelector("select[name=uf]")
    .addEventListener("change", getCities)

//Itens de coleta
    

const itemsToCollect = document.querySelectorAll("items-grid li")

for (const item of itemsToCollect) {
    item.addEventListener("click",handleSelectedItem)
}

function handleSelectedItem(event){
    console.log(event.target.dataset.id)
}

