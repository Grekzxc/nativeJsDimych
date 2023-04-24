export type UserType = {
    name: string
    hair: number
    address: { city: string, house?: number }
}
export type LapTopType = {
    title: string
}
export type UserWithLapTopType = UserType & {
    laptop: LapTopType
}
export type UserWithBooksType = UserType & {
    books: string[]
}
type CompanyType = { id: number, title: string }

export type WithCompaniesType = {
    companies: Array<CompanyType>
}


export function makeHairstyle(u: UserType, power: number) {
    const copy = {
        ...u,
        hair: u.hair / power
    }
    return copy
}
export function moveUser(u: UserWithLapTopType, city: string) {
    return {
        ...u,
        address: {
            ...u.address,
            city: city
        }
    }
}
export const moveUserToOtherHouse = (u: UserWithLapTopType & UserWithBooksType, house: number) => {
    return {
        ...u,
        address: {
            ...u.address,
            house: house
        }
    }
}
export const upgreadeUserLaptop = (u: UserWithLapTopType, laptop: string) => {
    return {
        ...u,
        laptop: {
            ...u.laptop,
            title: laptop
        }
    }
}

export const addNewBooksToUser = (u: UserWithLapTopType & UserWithBooksType, books: string) => {
    return {
        ...u,
        books: [...u.books, books]
    }
}

export const updeateBook = (u: UserWithLapTopType & UserWithBooksType,
    oldBook: string,
    newBook: string) => ({
        ...u, books: u.books.map(b => b === oldBook ? newBook : b)
    })

export const removeBook = (u: UserWithLapTopType & UserWithBooksType, book: string) =>
({
    ...u, books: u.books.filter(b => b !== book)
})

export const addCompany = (u: UserWithLapTopType & WithCompaniesType, company: string) =>
({
    ...u,
    companies: [...u.companies, company]
})

export const updeateCompany = (u: UserWithLapTopType & WithCompaniesType,
    id: number,
    company: string) =>
({
    ...u, companies: u.companies.map(c => c.id === id ? { ...c, title: company } : c)
})
export const updeateCompany2 = (
    companies: { [key: string]: Array<CompanyType> },
    userName: string,
    companyId: number,
    newTitle: string) => {
    let companyCopy = { ...companies }
    companyCopy[userName] = companyCopy[userName].map(c => c.id === companyId ? { ...c, title: newTitle } : c)

    return companyCopy
}