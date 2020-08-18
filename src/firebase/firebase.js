import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCLyr4QCtBcZwKe_5Cti1-6sA4R84GxtkI",
    authDomain: "expensify-student.firebaseapp.com",
    databaseURL: "https://expensify-student.firebaseio.com",
    projectId: "expensify-student",
    storageBucket: "expensify-student.appspot.com",
    messagingSenderId: "401997727111",
    appId: "1:401997727111:web:cb3093dde4e7220bea7f22"
};

firebase.initializeApp(config);

const database = firebase.database();

// child_removed
database.ref('expenses').on('child_removed', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
});

// child-changed
database.ref('expenses').on('child_changed', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
});

// child_added
database.ref('expenses').on('child_added', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
});

// database.ref('expenses')
//     .once('value')
//     .then((snapshot) => {
//         const expenses = [];

//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             });
//         });

//         console.log(expenses);
// });

// database.ref('expenses').on('value', (snapshot) => {
//         const expenses = [];

//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             });
//         });

//         console.log(expenses);
// });

// database.ref('notes/-MEoIfbqFQIlkUN5ccqD').remove();

// database.ref('notes').push({
//     title: 'Couse Topics',
//     body: 'React Native, Angular, Phyton'
// });

database.ref('expenses').push({
    description: 'Rent',
    note: '',
    amount: 109500,
    createdAt: 976123498763
});

// database.ref().on('value', (snapshot) => {
//     const val = snapshot.val();
//     console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
// }, (e) => {
//     console.log('Error with data fetching', e);
// });

// database.ref('location/city')
// .once('value')
// .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val)
// })
// .catch((e) => {
//     console.log('Error fetching data', e)
// });

// database.ref().set({
//    name: 'Steve',
//    age: 9999999999,
//    stressLevel: 6,
//    job: {
//        title: 'Software developer',
//        company: 'Google'
//    },
//    location: {
//    city: 'Mr Krabs',
//    country: 'Obama Krabs'
//      }
// }).then(() => {
//      console.log('Data is saved!');
// }).catch((e) => {
// console.log('This failed', e);
// });

// database.ref().update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'Seattle'
// });

// database.ref()
// .remove()
// .then(() => {
//     console.log('Data was removed');
// }).catch((e) => {
//     console.log('did not remove data', e);
// });