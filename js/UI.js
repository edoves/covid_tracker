class UI {
  #formatNumber(num) {
    return String(num).replace(/(.)(?=(\d{3})+$)/g, '$1,');
  }

  getWorldData(covidStat) {
    const worldStatusContainer = document.querySelector('.world__status');
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
  </div>`;
  }

  getPhilData(covidStat) {
    const philStatusContainer = document.querySelector('.phil__status');

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
      </div>`;
  }
}

const ui = new UI();

export default ui;
