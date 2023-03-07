import { GovernmentBuildingsType, CityType, HousesType } from '../02object/02_02';
import { StudentType } from "../02object/02"




export const addSkill = (student: StudentType, skill: string) => {
    student.technologies.push({
        id: new Date().getTime(),
        title: skill
    })
}

export function doesStudentLiveIn(s: StudentType, cityName: string) {
    return s.address.city.title === cityName
}

export const addMoneyToBudget = (Building: GovernmentBuildingsType, budget: number) => {
    Building.budget += budget
}

export const repairHouse = (HousesType: HousesType) => {
    HousesType.repaired = true
}
export const toFireStaff = (bilding: GovernmentBuildingsType, staffCountToFire: number) => {
    bilding.staffCount -= staffCountToFire
}
export const toHireStaff = (bilding: GovernmentBuildingsType, staffCountToHire: number) => {
    bilding.staffCount += staffCountToHire
}






























// const student: StudentType = {
//     id: 1,
//     name: 'Dimych',
//     age: 34,
//     isActive: true,
//     address: {
//         streetTitle: 'komuna',
//         city: {
//             title: 'Miory',
//             countryTitle: 'Belarus'
//         }
//     },
//     technologies:[
//         {
//             id: 1,
//             title: 'HTML'
//         },
//         {
//             id: 2,
//             title: 'JS'
//         },
//         {
//             id: 3,
//             title: 'TypeScript'
//         },
//     ]

//     }