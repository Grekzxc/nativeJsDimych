//

// // const promise1 = axios.get('https://google.com')
// // promise1.then((data) => {
// //     console.log(data);
// // })

// // axios.get('https://google.com').then((data) => {
// //     console.log(data);
// // })

// const promise2 = findUserInDB(1)
// promise2.then((user) => {
//     console.log(user);
// })
//     .catch((error) => {
//         console.log(error);
//     })
//     .finally(() => {
//         console.log('finish ');
//     })

// const otherPromise = Promise.all([promise1, promise2])  // all работает только в том случае когда промис 1 и 2 зарезолвятся, если промис какой то упал, то состояние реджектед
// // и проблема в том что если какой то промис упал, и мы хотим получить все результаты и внутри их обработать, то непонятно какой из, и сядем на жопу

// const otherPromise2 = Promise.allSettled([promise1, promise2])  // зарезолвится когда промисы уйдут из состояния пэндинг, и пофиг в какое состояние резолвед или реджектед

// otherPromise.then((results) => {  // в result приходит массив результатов от промиса 1 и 2
//     console.log(results);    // приходит массив обьектов где мы уже видим состояние fulfilled
//     const dataFromGoogle =
//         results[0].status === 'fulfilled'
//             ? results[1].value
//             : { data: { vacancies: null } }

//     const userFromDB = results[1].status === 'fulfilled'
//         ? results[1].value
//         : { name: results[1].reason }

//     console.log(dataFromGoogle.data.vacancies + '; ' + userFromDB.name);
// })
//     .catch(() => {
//         console.log('initialization failed. Try later');
//     })

// const resolvedPromise = Promise.resolve([{}])
// resolvedPromise
//     .then(data => console.log(data))
//     .catch(error => console.warn(error))

// const rejectedPromise = Promise.reject({ message: 'Some error' })
// rejectedPromise
//     .then(data => console.log(data))
//     .catch(error => console.warn(error))

// const usersAPI = {
//     getAllUsers() {
//         return Promise.resolve([{ name: 'A' }, { name: 'D' }])
//     },
//     login(login, password) {
//         if (login !== '123' && password !== '123') {
//             return Promise.reject({ message: 'Inccorect Login and Passord' })
//         } else {
//             return Promise.resolve({ name: 'Alex', id: 12, avatarUrl: './asdasdf123' })

//         }
//     }
// }

// const pr = usersAPI.getAllUsers()
// pr.then(users => console.log(users))

// usersAPI.login('123', '234512435')
//     .then((data) => {
//         //makeRedirect
//     })
//     .catch((error) => {
//         //show error
//     })


// const promise2 = findUserInDB(1)
// const promise2_2 = promise2.then((user) => { return user.name })

// промис promise2_2 зарезолвиться user.name но так никто не пишет

// findUserInDB(1)
//     .then(user => user.name)
//     .then(name => console.log(name))
// // с каждым then создается новый промис


// axios.get('http://google .com')
//     .then(resp => resp.data)
//     .then(data => console.log(data))


// const lastPromise = findUserInDB(1)
//     .then(user => {
//         console.log(user)
//         findUserInDB(user.friend)
//             .then(user => {
//                 console.log(user)
//                 findUserInDB(user.friend)
//                     .then(user => {
//                         console.log(user)
//                     })
//             })
//     })

//ад колбеков


// const lastPromise = findUserInDB(1)
//     .then(user => {
//         console.log(user)
//         return user
//     })
//     .then(user => findUserInDB(user.friend))
//     .then(friend1 => {
//         console.log(friend1);
//         return friend1
//     })
//     .then(friend1 => findUserInDB(friend1.friend))
//     .then(friend2 => console.log(friend2.name))

// asink await

// async function run() {
//     let user = await findUserInDB(1)
//     console.log(user.name);
//     let friend1 = await findUserInDB(user.friend)
//     console.log(friend1.name);
//     let friend2 = await findUserInDB(friend1.friend)
//     console.log(friend2.name);
// }

// run()

// findUserInDB(1).then(user => {
//     console.log(user.name);
// })

// function getNumber() {
//     // const promise = Promise.resolve(Math.random())

//     const promise = new Promise((resolve, reject) => {
//         reject('some error')
//         setTimeout(() => {
//             resolve(Math.random())
//         }, 2000)
//     })

//     return promise
// }

// getNumber().then(n => console.log(n2))



// const repo = {
//     save(data) {
//         try {
//             localStorage.setItem('some=key', JSON.stringify(data))
//         } catch (error) {
//             return false
//         }
//         return true
//     },
//     saveAsync(data) {
//         const promise = new Promise((resolve, reject) => {
//             try {
//                 localStorage.setItem('some=key', JSON.stringify(data))
//                 resolve()
//             } catch (error) {
//                 reject(error)
//             }
//         })
//         return promise
//     },
//     readAsync() {

//         return new Promise((res, rej) => {
//             const data = (localStorage.getItem('some-key'))
//             if (!data) {
//                 res(null)
//             } else {
//                 res(JSON.parse(data))
//             }
//         })
//     },
//     readSync() {
//         const data = (localStorage.getItem('some-key'))
//         if (!data) {
//             return null
//         } else {
//             return JSON.parse(data)
//         }
//     },
// }

// const result = repo.save({ name: 'IT_KAMASUTRA' })
// if (result) {
//     console.log('SAVED');
// } else {
//     console.warn('NOT SAVED');
// }

// const run = async () => {
//     repo.saveAsync({ name: 'IT_KAMASUTRA' })
//     console.log('SAVED');

//     const data = await repo.readAsync()
//     console.log(data);
// }

// function wait(ms) {
//     return new Promise((res) => {
//         setTimeout(() => { res() }, ms)
//     })
// }

// async function run() {
//     await wait(1000)
//     console.log(1)
//     await wait(1000)
//     console.log(2)
//     await wait(1000)
//     console.log(3)
// }