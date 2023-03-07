import { CityType, GovernmentBuildingsType } from "../02object/02_02";

export function demolishHousesOnTheStreet(city: CityType, street: string) {
    city.houses = city.houses.filter(h => h.address.street.title !== street)
}

export function getBuildingsWithStaffCountGreaterThen(bildings: Array<GovernmentBuildingsType>, number: number) {
    return bildings.filter(b => b.staffCount > number)
}