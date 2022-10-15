import covidApi from './apiCall.js'
import ui from './UI.js'

const form = document.getElementById('covidSearch')

covidApi.getWorldStats().then((worldStat) => {
  ui.getWorldData(worldStat)
})

covidApi.getPhilStats().then((philStat) => {
  ui.getPhilData(philStat)
})

form.addEventListener('submit', function (e) {
  e.preventDefault()
  const search = document.getElementById('search')

  if (search.value === '') {
    ui.displayMessage('The search input is empty', 'error', this)
  } else {
    covidApi.getCountryStats(search.value).then((countryStats) => {
      // console.log(countryStats.error)
      const { error } = countryStats
      if (error) {
        ui.displayMessage(error.message, 'error', this)
      } else {
        ui.displayCoutryStat(countryStats, search.value)
      }
    })
  }
})
