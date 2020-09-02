const { RESTDataSource } = require('apollo-datasource-rest');

class Tour extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = `https://api-backstage.herokuapp.com/tours`;
  }

  async getTours() {
    const data = await this.get('/');
    return data;
  }

  async getTour({ id }) {
    const data = await this.get('/' + id);
    return data;
  }
}

class Show extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = `https://api-backstage.herokuapp.com/shows`;
  }

  async getShows() {
    const data = await this.get('/');
    return data;
  }

  async getShowsByIds({ ids }) {
    const data = await this.get('/' + ids);
    return data;
  }

  async getShow({ id }) {
    const data = await this.get('/' + id);
    return data;
  }
}

module.exports = { Tour, Show };
