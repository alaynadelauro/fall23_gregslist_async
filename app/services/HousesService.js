import { api } from "./AxiosService.js"
import { AppState } from "../AppState.js"
import { House } from "../models/House.js"




class HousesService {
    async getHouses() {
        const res = await api.get('api/houses')
        // console.log('got the houses', res.data)
        const newHouse = res.data.map(house => new House(house))
        AppState.houses = newHouse
    }
    async createHouse(houseFormData) {
        const res = await api.post('api/houses', houseFormData)
        console.log('house', res.data)
        const newHouse = new House(res.data)
        AppState.houses.push(newHouse)
        AppState.emit('houses')
    }
}

export const housesService = new HousesService()