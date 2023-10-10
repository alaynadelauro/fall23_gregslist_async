import { Pop } from "../utils/Pop.js"
import { housesService } from "../services/HousesService.js"
import { AppState } from "../AppState.js"
import { setHTML } from "../utils/Writer.js"
import { House } from "../models/House.js"
import { getFormData } from "../utils/FormHandler.js"


function _drawHouses() {
    // console.log('my draw function is trying to draw')
    const houses = AppState.houses
    let content = ''
    houses.forEach(house => content += house.houseCard)
    setHTML('houseCards', content)
    // console.log('I drew the Houses', AppState.houses)
}

function _drawHouseForm() {
    setHTML('houseForm', House.houseForm)
}


export class HousesController {
    constructor() {
        this.getHouses()
        _drawHouseForm()
        AppState.on('houses', _drawHouses)
        // console.log('I loaded')
    }
    async getHouses() {
        try {
            await housesService.getHouses()
        } catch (error) {
            Pop.error(error)
            console.error(error)
        }
    }
    async createHouse(event) {
        event.preventDefault()
        console.log('Button Clicked')
        const form = event.target
        const houseFormData = getFormData(form)
        await housesService.createHouse(houseFormData)
    }
}