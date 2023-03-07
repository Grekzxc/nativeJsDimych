const ages = [18, 20, 22, 1, 100, 90, 14]

const predicat = (age: number) => {
    return age > 90
}

const oldAges = []


type CoursesType = {
    title: string
    price: number
}

const courses = [
    { title: 'css', price: 110 },
    { title: 'JS', price: 200 },
    { title: 'React', price: 150 },
]

const chipPredicat = (courses: CoursesType) => {
    return courses.price < 160
}

const chipCourses = [
    { title: 'css', price: 110 },
    { title: 'React', price: 150 }
]