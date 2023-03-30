import React from "react"

type UserType = {
    name: string
    age: number
    address: { title: string }
}

function increaseAge(u: UserType) {
    u.age++
}

test('big test', () => {

    let user: UserType = {
        name: 'alex',
        age: 29,
        address: {
            title: 'misk'
        }
    }

    increaseAge(user)
    expect(user.age).toBe(30)

    const superman = user
    superman.age = 1000
    expect(user.age).toBe(1000)
})


test('array test', () => {

    let users =
        [
            {
                name: 'alex',
                age: 29
            },
            {
                name: 'Dima',
                age: 23
            },
        ]

    const admins = users
    admins.push({ name: 'lox', age: 10 })

    expect(users[2]).toEqual({ name: 'lox', age: 10 })

})

test('value test', () => {

    let usersCount = 100

    let adminsCount = usersCount
    adminsCount++
})

test('big test', () => {

    let user: UserType = {
        name: 'alex',
        age: 29,
        address: {
            title: 'misk'
        }
    }

    let addr = user.address

    let user2: UserType = {
        name: 'kisa',
        age: 25,
        address: user.address  //   =addr
    }

    user2.address.title = 'kanary'

    expect(user.address.title).toBe('kanary')
})



test('array test', () => {

    let address = { title: 'minsk' }


    let user: UserType = {
        name: 'alex',
        age: 29,
        address: address
    }
    let user2: UserType = {
        name: 'kisa',
        age: 25,
        address: address
    }

    const users = [user, user2, { name: ' lox', age: 18, address: address }]

    const admin = [user, user2]
    admin[0].name = 'Alexander'

    user2.address.title = 'kanary'

    expect(user.address.title).toBe('kanary')
    expect(users[0].name).toBe('Alexander')
})