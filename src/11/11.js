import fetch from "node-fetch"

// const server = {
//     getData() {
//         const promise = new Promise((res, rej) => {
//             setTimeout(() => {
//                 res('some data')
//                 // console.log(a);
//                 // rej('something went wrong')
//             }, 1000
//             )
//         })
//         return promise
//     }
// }

// server.getData()
//     .then((data) => {
//         // console.log(s);
//         return data
//     })
//     .then((data) => {
//         console.log('data from server', data);
//     })
//     .then((data) => {
//         console.log('data from server', data);
//     })
//     .then((data) => {
//         console.log('data from server', data);
//     })
//     .catch((err) => {
//         console.log('server error,');
//     })
//     .finally(() => {
//         console.log('work end');
//     })


// fetch('https://google.com/query=promise')
//     .then(() => {
//         console.log('response from google');
//         fetch('https://yahoo.com/query=promise');
//     }).then(() => {
//         console.log('response from yahoo');
//         fetch('https://duckduckgo.com/query=promise');
//     })
//     .then(() => {
//         console.log('response from duckduckgo');
//     })


// function delay(time) {
//     return new Promise((res, rej) => {
//         setTimeout(res, time)
//     })
// }

// delay(3000).then(() => console.log('hello!'))

// function delay(ms) {
//     return new Promise((res, rej) => {
//         setTimeout(() => rej('error'), ms)
//     })
// }

// delay(3000).then(
//     () => {
//         console.log('Hello work!');
//         return 10
//     },
//     (err) => {
//         console.log(err);
//     }
// ) // then принимает 2 параметра, и 2й параметр может отловить ошибку(всмысле без .catch), но так никто не пишет, чисто для собеса


// fetch('https://yahoo.com/query=js')
//     .then((data) => {
//         console.log('data from yahoo', data.url);
//         return fetch('https://bing.com/query=js')
//     }).then((data) => {
//         console.log('data from bing', data.url);
//         return fetch('https://google.com/query=js')
//     }).then((data) => {
//         console.log('data from google', data.url);
//     }).catch((err) => {
//         console.log('error', err);
//     })





// const asyncFn = async () => {
//     try {
//         const yahooData = await fetch('https://yahoo.com/query=js')
//         console.log('data from yahoo', yahooData.url);
//         const bingData = await fetch('https://bing.com/query=js')
//         console.log('data from bisd', bingData.url);
//         const googleData = await fetch('https://google.com/query=js')
//         console.log('data from google', googleData.url);
//     } catch (err) {
//         console.log('ERROR', err.message);
//     } finally {
//         console.log('finally');
//     }
// }
// asyncFn()


// all || race || allSettled

// const pr1 = fetch('https://yahoo.com/query=js')
// const pr2 = fetch('https://bing.com/query=js')
// const pr3 = fetch('https://google.com/query=js') // нахрен лишние переменные, можно же сразу в массив


// const bigPromise = [
//     fetch('https://yahoo.com/query=js'),
//     fetch('https://bing.com/query=js'),
//     fetch('https://google.com/query=js')
// ]                                                // можно и не создавать еще лишнюю переменную  bigPromise а запихнуть fetch сразу в промис 

//all

// Promise.all([
//     fetch('https://yahoo.com/query=js'),
//     fetch('https://bing.com/query=js'),
//     fetch('https://google.com/query=js')
// ]).then((Data) => {
//     console.log(Data[0].url);
//     console.log(Data[1].url);
//     console.log(Data[2].url);
// }).catch((err) => {
//     console.log('BIG ERROR');
// })

//race 

// Promise.race([
//     fetch('https://yahoo.com/query=js'),
//     fetch('https://bing.com/query=js'),
//     fetch('https://google.com/query=js')
// ])
//     .then((data) => {
//         console.log(data.url);
//     }).catch((err) => {
//         console.log('BIG ERROR');
//     })
//                                              попадает в then тот промис который выполнится первым

// any

// Promise.any([
//     fetch('https://yahoo.com/query=js'),
//     fetch('https://bing.com/query=js'),
//     fetch('https://google.com/query=js'),
//     fetch('https://duckduckgo.com/query=js')
// ])
//     .then((data) => {
//         console.log(data.url);
//     }).catch((err) => {
//         console.log('BIG ERROR');
//     })
//                                               выдает ответ пока хоть  один resolve отработает и попадаем в then, если везде ошибки тогда только попадаем в catch  



// allSettled 

Promise.allSettled([
    fetch('https://yahoo.com/query=js'),
    fetch('https://bingxdfg.com/query=js'),
    fetch('https://google.com/query=js'),
])
    .then((data) => {
        console.log(data);
    }).catch((err) => {
        console.log('BIG ERROR');
    })
//                                               всегда попадаем в then, получаем массив обьектов где получаем data, если нет ошибки в статусе пишется fulfilled, если есть ошибка получаем rejected 





