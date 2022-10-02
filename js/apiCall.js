// https://covid19.mathdro.id/api

class CovidApi {
  #worldAPi = 'https://covid19.mathdro.id/api';
  #philippines = 'https://covid19.mathdro.id/api/countries/philippines';

  // get world data
  async getWorldStats() {
    try {
      const res = await fetch(this.#worldAPi);
      const data = res.json();
      return data;
    } catch (error) {
      throw new Error('The data failed to load', { cause: error });
    }
  }

  // get philippines data
  async getPhilStats() {
    try {
      const res = await fetch(this.#philippines);
      const data = res.json();
      return data;
    } catch (error) {
      throw new Error('The data failed to load', { cause: error });
      // console.log('Eriririririririririririiiririririri ', error.message);
    }
  }
}

const covidApi = new CovidApi();

export default covidApi;
