import covidApi from './apiCall.js';
import ui from './UI.js';

covidApi.getWorldStats().then((covidStat) => {
  ui.getWorldData(covidStat);
});

covidApi.getPhilStats().then((covidStat) => {
  ui.getPhilData(covidStat);
});
