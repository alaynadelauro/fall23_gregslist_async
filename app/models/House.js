export class House {
    constructor(data) {
        this.bathrooms = data.bathrooms
        this.bedrooms = data.bedrooms
        this.description = data.description || 'Home For Sale'
        this.image = data.imgUrl
        this.levels = data.levels
        this.price = data.price
        this.year = data.year
        this.createdAt = new Date(data.createdAt)
        this.updatedAt = new Date(data.updatedAt)
        this.creator = data.creator
    }
    get houseCard() {
        return `
            <div class="col-11 d-flex houseCard m-2 p-3">
                <div>
                    <img class="image-fluid houseImg"src="${this.image}}">
                </div>
                <div class="mx-4 d-flex flex-column justify-content-around">
                    <h2>${this.description}</h2>
                    <p>Built in ${this.year}, this lovely ${this.levels} story abode comes with ${this.bedrooms} bedrooms and ${this.bathrooms} bathrooms.</p>
                    <div class="d-flex align-items-center">
                    <img src="${this.creator.picture}"class="profileImage">
                        <p class="mx-3">This listing brought to you by ${this.creator.name}</p>
                    </div>
                </div>
            </div>
        `
    }
    static get houseForm() {
        return `
        <div class="col-11 d-flex m-2 p-3 justify-content-center input">
            <form onsubmit="app.HousesController.createHouse(event)" class="form p-4">
                <h1 class="text-center mb-3">Create Your Own Listing</h1>
                <div class="d-flex justify-content-between">
                <div class="labelOne">
                    <label>Bedrooms</label>
                    <input type="number" name="bedrooms" required>
                </div>
                <div class="labelOne">
                    <label>Bathrooms</label>
                    <input type="number" name="bathrooms" required>
                </div>
                </div>
                <div>
                <div>
                    <label rows="5">Description</label>
                    <textarea class="description" type="string" name="description" maxlength="5000"></textarea>
                </div>
                </div>
                <div class="d-flex justify-content-between">
                <div class="labelOne">
                    <label>Floors</label>
                    <input type="number" required name="levels">
                </div>
                <div class="labelOne">
                    <label>Price</label>
                    <input type="number" required name="price">
                </div>
                </div>
                <div class="d-flex justify-content-between">
                <div class="labelOne">
                    <label>Image</label>
                    <input type="url" maxlength="500">
                </div>
                <div class="labelOne">
                    <label>Year</label>
                    <input type="number">
                </div>
                </div>
                <div class="d-flex justify-content-center mt-4">
                    <button type="submit" class="text-center btn btn-success">Submit</button>
                </div>
            </div>
        `
    }
}