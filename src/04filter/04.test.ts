import { title } from 'process';
test('should take old man older then 90', () => {
    const ages = [18, 20, 22, 1, 100, 90, 14]

    const oldAges = ages.filter(age => age > 90)

    expect(oldAges.length).toBe(1)
    expect(oldAges[0]).toBe(100)
})

test('should take courses chipper 160$', () => {
    const courses = [
        { title: 'css', price: 110 },
        { title: 'JS', price: 200 },
        { title: 'React', price: 150 },
    ]

    const chipCourses = courses.filter(courses => courses.price < 160)

    expect(chipCourses.length).toBe(2)
    expect(chipCourses[0].title).toBe('css')
    expect(chipCourses[1].title).toBe('React')
})

test('get only uncomplited task', () => {
    const task = [
        { id: 1, title: 'Bread', isDone: false },
        { id: 2, title: 'Milk', isDone: true },
        { id: 3, title: 'Solt', isDone: false },
        { id: 4, title: 'Sugar', isDone: true }
    ]

    const complitedTask = task.filter(task => !task.isDone)

    expect(complitedTask.length).toBe(2)
    expect(complitedTask[0].id).toBe(1)
    expect(complitedTask[1].id).toBe(3)
})