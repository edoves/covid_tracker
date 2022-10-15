class UI {
  #formatNumber(num) {
    return String(num).replace(/(.)(?=(\d{3})+$)/g, '$1,')
  }

  getWorldData(covidStat) {
    const worldStatusContainer = document.querySelector('.world__status')
    //get only the word data

    worldStatusContainer.innerHTML = ` <div class="status__item">
    <h2>${this.#formatNumber(covidStat.confirmed.value)}</h2>
    <p class="confirmed">confirmed</p>
  </div>
  <div class="status__item">
    <h2>${this.#formatNumber(covidStat.deaths.value)}</h2>
    <p class="deaths">deaths</p>
  </div>
  <div class="status__item">
    <h2>${this.#formatNumber(covidStat.recovered.value)}</h2>
    <p class="recovered">recovered</p>
  </div>`
  }

  getPhilData(covidStat) {
    const philStatusContainer = document.querySelector('.phil__status')

    philStatusContainer.innerHTML = ` <div class="status__item">
        <h2>${this.#formatNumber(covidStat.confirmed.value)}</h2>
        <p class="confirmed">confirmed</p>
      </div>
      <div class="status__item">
        <h2>${this.#formatNumber(covidStat.deaths.value)}</h2>
        <p class="deaths">deaths</p>
      </div>
      <div class="status__item">
        <h2>${this.#formatNumber(covidStat.recovered.value)}</h2>
        <p class="recovered">recovered</p>
      </div>`
  }

  displayMessage(msg, clsName, currentElmt) {
    const divEl = document.createElement('div')
    divEl.className = clsName
    divEl.textContent = msg
    console.log(divEl)
    currentElmt.appendChild(divEl)

    setTimeout(() => {
      divEl.remove()
    }, 1500)
  }

  displayCoutryStat(covidCountryStats, country) {
    const { confirmed, deaths, recovered } = covidCountryStats

    const searchResult = document.querySelector('.search__result')

    searchResult.innerHTML = `
      <div class="flag">
            <img src="https://countryflagsapi.com/svg/${country}" alt="" />
      </div>
      <ul>
        <li> Confirmed: ${this.#formatNumber(confirmed.value)}  </li>
        <li>  Deaths: ${this.#formatNumber(deaths.value)}  </li>
        <li> Recovered: ${this.#formatNumber(recovered.value)} </li>
      </ul>`
  }
}

const ui = new UI()

export default ui
