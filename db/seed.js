const db = require('./index');

const Student = require('./models/student');

const Campus = require('./models/campus');



const campuses = [
  { name: 'Luna' },
  { name: 'Terra' },
  { name: 'Mars' },
  { name: 'Titan' },
];



const students = [{
  name: 'Cody',
  email: 'cody@gmail.com',
  CampusId: Math.floor(Math.random() * 4) + 1
}, {
  name: 'Ben',
  email: 'ben@gmail.com',
  CampusId: Math.floor(Math.random() * 4) + 1
}, {
  name: 'Star',
  email: 'star@gmail.com',
  CampusId: Math.floor(Math.random() * 4) + 1
}, {
  name: 'Batman',
  email: 'batman@gmail.com',
  CampusId: Math.floor(Math.random() * 4) + 1
}, {
  name: 'Elliott',
  email: 'elliott@gmail.com',
  CampusId: Math.floor(Math.random() * 4) + 1
}, {
  name: 'Fira',
  email: 'fira@gmail.com',
  CampusId: Math.floor(Math.random() * 4) + 1
}, {
  name: 'Henry',
  email: 'henry@gmail.com',
  CampusId: Math.floor(Math.random() * 4) + 1
}, {
  name: 'Marcy',
  email: 'marcy@gmail.com',
  CampusId: Math.floor(Math.random() * 4) + 1
}, {
  name: 'Milton',
  email: 'Milton@gmail.com',
  CampusId: Math.floor(Math.random() * 4) + 1
}, {
  name: 'Murphy',
  email: 'murphy@gmail.com',
  CampusId: Math.floor(Math.random() * 4) + 1
}, {
  name: 'Raffi',
  email: 'raffi@gmail.com',
  CampusId: Math.floor(Math.random() * 4) + 1
}, {
  name: 'Tulsi',
  email: 'tuli@gmail.com',
  CampusId: Math.floor(Math.random() * 4) + 1
}, {
  name: 'Pork Chop',
  email: 'porkchop@gmail.com',
  CampusId: Math.floor(Math.random() * 4) + 1
}, {
  name: 'Ribs',
  email: 'ribs@gmail.com',
  CampusId: Math.floor(Math.random() * 4) + 1
}, {
  name: 'Stacey',
  email: 'stacy@gmail.com',
  CampusId: Math.floor(Math.random() * 4) + 1
}, {
  name: 'JD',
  email: 'jd@gmail.com',
  CampusId: Math.floor(Math.random() * 4) + 1
}, {
  name: 'BenBen',
  email: 'benben@gmail.com',
  CampusId: Math.floor(Math.random() * 4) + 1
}, {
  name: 'Odie',
  email: 'odie@gmail.com',
  CampusId: Math.floor(Math.random() * 4) + 1
}];


const seed = () =>
  Promise.all(campuses.map(campus =>
    Campus.create(campus))
  )
  .then(() =>
  Promise.all(students.map(student =>
    Student.create(student))
  ));



const main = () => {
  console.log('Syncing db...');
  db.sync({ force: true })
    .then(() => {
      console.log('Seeding databse...');
      return seed();
    })
    .catch(err => {
      console.log('Error while seeding');
      console.log(err.stack);
    })
    .then(() => {
      db.close();
      return null;
    });
};

main();
