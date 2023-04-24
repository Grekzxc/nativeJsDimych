import React from "react";
import { UserType, UserWithBooksType, UserWithLapTopType, WithCompaniesType, addCompany, addNewBooksToUser, makeHairstyle, moveUser, moveUserToOtherHouse, removeBook, updeateBook, updeateCompany, updeateCompany2, upgreadeUserLaptop } from "./10";



test('reference type text', () => {
    let user: UserType = {
        name: 'alex',
        hair: 30,
        address: {
            city: 'Miory',
            house: 12
        }
    }
    const awesomeUser = makeHairstyle(user, 2)

    user.address.city = 'Kiev'

    expect(awesomeUser.hair).toBe(15)
    expect(user.hair).toBe(30)
    expect(awesomeUser.address).toBe(user.address)
}
)

test('change address', () => {
    let user: UserWithLapTopType = {
        name: 'alex',
        hair: 30,
        address: {
            city: 'Miory',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        }
    }
    const movedUser = moveUser(user, 'Batumi')

    expect(user).not.toBe(movedUser)
    expect(user.address).not.toBe(movedUser.address)
    expect(user.laptop).toBe(movedUser.laptop)

    expect(movedUser.address.city).toBe('Batumi')
})


test('laptop to macbook', () => {
    let user: UserWithLapTopType = {
        name: 'alex',
        hair: 30,
        address: {
            city: 'Miory',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        }
    }

    const userCopy = upgreadeUserLaptop(user, 'Macbook')

    expect(user).not.toBe(userCopy)
    expect(user.address).toBe(userCopy.address)
    expect(user.laptop).not.toBe(userCopy.laptop)
    expect(userCopy.laptop.title).toBe('Macbook')
    expect(user.laptop.title).toBe('ZenBook')

})


test('laptop to macbook', () => {
    let user: UserWithLapTopType & UserWithBooksType = {
        name: 'alex',
        hair: 30,
        address: {
            city: 'Miory',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        },
        books: ['css', 'html', 'js', 'react']
    }

    const userCopy = moveUserToOtherHouse(user, 99)

    expect(user).not.toBe(userCopy)
    expect(user.books).toBe(userCopy.books)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.address).not.toBe(userCopy.address)
    expect(userCopy.address.house).toBe(99)

})


test('add new books to user', () => {
    let user: UserWithLapTopType & UserWithBooksType = {
        name: 'alex',
        hair: 30,
        address: {
            city: 'Miory',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        },
        books: ['css', 'html', 'js', 'react']
    }

    const userCopy = addNewBooksToUser(user, 'ts')

    expect(user).not.toBe(userCopy)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.address).toBe(userCopy.address)
    expect(user.books).not.toBe(userCopy.books)
    expect(userCopy.books[4]).toBe('ts')

})

test('updeate js to ts', () => {
    let user: UserWithLapTopType & UserWithBooksType = {
        name: 'alex',
        hair: 30,
        address: {
            city: 'Miory',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        },
        books: ['css', 'html', 'js', 'react']
    }

    const userCopy = updeateBook(user, 'js', 'ts')

    expect(user).not.toBe(userCopy)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.address).toBe(userCopy.address)
    expect(user.books).not.toBe(userCopy.books)
    expect(userCopy.books[2]).toBe('ts')

})

test('remove js book', () => {
    let user: UserWithLapTopType & UserWithBooksType = {
        name: 'alex',
        hair: 30,
        address: {
            city: 'Miory',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        },
        books: ['css', 'html', 'js', 'react']
    }

    const userCopy = removeBook(user, 'js')

    expect(user).not.toBe(userCopy)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.address).toBe(userCopy.address)
    expect(user.books).not.toBe(userCopy.books)
    expect(userCopy.books[2]).toBe('react')

})

test('add to company', () => {
    let user: UserWithLapTopType & WithCompaniesType = {
        name: 'alex',
        hair: 30,
        address: {
            city: 'Miory',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        },
        companies: [{ id: 1, title: 'Epam' }, { id: 2, title: 'IT-INCUBATOR' }]
    }

    const userCopy = addCompany(user, 'google')

    expect(user).not.toBe(userCopy)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.address).toBe(userCopy.address)
    expect(userCopy.companies[2]).toBe('google')
})


test('update company', () => {
    let user: UserWithLapTopType & WithCompaniesType = {
        name: 'alex',
        hair: 30,
        address: {
            city: 'Miory',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        },
        companies: [{ id: 1, title: 'ЕПАМ' }, { id: 2, title: 'IT-INCUBATOR' }]
    }

    const userCopy = updeateCompany(user, 1, 'Epam')


    expect(user).not.toBe(userCopy)
    expect(user.address).toBe(userCopy.address)
    expect(user.companies).not.toBe(userCopy.companies)
    expect(userCopy.companies[0].title).toBe('Epam')
})

test('update company', () => {

    let companies = {
        'Alex': [{ id: 1, title: 'Epam' }, { id: 2, title: 'IT-INCUBATOR' }],
        'Artem': [{ id: 2, title: 'IT-INCUBATOR' }],

    }
    const copy = updeateCompany2(companies, 'Alex', 1, 'EPAM')

    expect(copy['Alex']).not.toBe(companies['Alex'])
    expect(copy['Artem']).toBe(companies['Artem'])
    expect(copy['Alex'][0].title).toBe('EPAM')
})