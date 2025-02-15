import axios from 'axios'

class BeerService {

    constructor() {
        this.app = axios.create({
            baseURL: 'https://ih-beers-api2.herokuapp.com/beers'
        })
    }

    getAllBeers = () => this.app.get('/')
    // getOneCoaster = coaster_id => this.app.get(`/getOneCoaster/${coaster_id}`)
    // createCoaster = coasterDetails => this.app.post(`/newCoaster`, coasterDetails)
}

export default BeerService