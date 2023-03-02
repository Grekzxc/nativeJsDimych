type TechnologiesType={
    id: number
    title: string
}
type LokalCityType = {
    title: string
    countryTitle: string
}
type AddressType={
    streetTitle: string
    city: LokalCityType
}
type StudentType = {
    id: number
    name: string
    age: number
    isActive: boolean
    address: AddressType
    technologies: Array<TechnologiesType>
}

const student: StudentType = {
    id: 1,
    name: 'Dimych',
    age: 34,
    isActive: true,
    address: {
        streetTitle: 'komuna',
        city: {
            title: 'Miory',
            countryTitle: 'Belarus'
        }
    },
    technologies:[
        {
            id: 1,
            title: 'HTML'
        },
        {
            id: 2,
            title: 'JS'
        },
        {
            id: 3,
            title: 'TypeScript'
        },
    ]
    }


console.log();
