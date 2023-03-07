import { GovernmentBuildingsType, HousesType } from './../02object/02_02';

export const getStreetsTitlesOfGovernmentBuildings =
    (BuildingsType: Array<GovernmentBuildingsType>) => {
        return BuildingsType.map(b => b.address.street.title)
    }


export const getStreetsTitlesOfHouses =
    (houses: Array<HousesType>) => {
        return houses.map(h => h.address.street.title)
    }

export const createMessages = (houses: Array<HousesType>) => {
    return houses.map(h => `Hello guys from ${h.address.street.title}`)
}