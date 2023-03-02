import { title } from 'process';
import { addSkill, doesStudentLiveIn} from './03';
import { StudentType } from "../02object/02"


let student: StudentType
beforeEach(() => {
    student = {
        id: 1,
        name: 'Dimych',
        age: 34,
        isActive: false,
        address: {
            streetTitle: 'komuna',
            city: {
                title: 'Minsk',
                countryTitle: 'Belarus'
            }
        },
        technologies: [
            {
                id: 1,
                title: 'HTML'
            },
            {
                id: 2,
                title: 'react'
            },
            {
                id: 3,
                title: 'TypeScript'
            },
        ]

    }
})

test('new tech skill should be added to student', () => {

    expect(student.technologies.length).toBe(3)

    addSkill(student, 'JS')
    expect(student.technologies.length).toBe(4)
    expect(student.technologies[3].title).toBe('JS')
    expect(student.technologies[3].id).toBeDefined()

})
test('student lives is city Minsk?', () => {

    expect(student.address.city.title).toBe('Minsk')

    let result1 = doesStudentLiveIn(student, 'Moscow')
    let result2 = doesStudentLiveIn(student, 'Minsk')

    expect(result1).toBe(false)
    expect(result2).toBe(true)


})



