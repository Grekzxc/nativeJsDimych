import { ManType } from "./Destructuring"


let props: ManType
beforeEach(() => {
    props = {
        name: 'alex',
        age: 29,
        lessons: [{ title: '1' }, { title: '2' }, { title: '3' },],
        addreas: {
            street: {
                title: 'Kommunisticheskaya'
            }
        }
    }
})
test('', () => {

    const { age, name } = props
    const { title } = props.addreas.street

    const a = props.age
    const n = props.name

    expect(age).toBe(29)
    expect(name).toBe('alex')

    expect(a).toBe(29)
    expect(n).toBe('alex')
    expect(title).toBe('Kommunisticheskaya')
})

test('', () => {
    const l1 = props.lessons[0]
    const l2 = props.lessons[1]
    const l3 = props.lessons[2]

    const [ls1, ...rest] = props.lessons

    expect(l1.title).toBe('1')
    expect(l2.title).toBe('2')
    // expect(l1.title).toBe('1')

    expect(ls1.title).toBe('1')
    expect(rest.length).toBe(2)
    expect(rest[0].title).toBe('2')
})