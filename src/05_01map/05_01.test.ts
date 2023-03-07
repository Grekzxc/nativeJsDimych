import { createGreetingMessage, ManType } from "./05_01";

let people: Array<ManType> = [
    { name: 'Andrew Ivanov', age: 33 },
    { name: 'Aelxander Petrov', age: 24 },
    { name: 'Dmitry Sidorov', age: 18 }
]

beforeEach(() => {
    [
        { name: 'Andew Ivanov', age: 33 },
        { name: 'Aelxander Petrov', age: 24 },
        { name: 'Dmitry Sidorov', age: 18 }
    ]
})

test('should get array of greeting messeges', () => {
    const messages = createGreetingMessage(people)

    expect(messages.length).toBe(3)
    expect(messages[0]).toBe('Hello Andrew.Welcom to IT-INCUBATOR')
    expect(messages[1]).toBe('Hello Aelxander.Welcom to IT-INCUBATOR')
    expect(messages[2]).toBe('Hello Dmitry.Welcom to IT-INCUBATOR')

})