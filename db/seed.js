const db = require('./index');

const Student = require('./models/student');

const Campus = require('./models/campus');



const campuses = [

  { name: 'React' },

  { name: 'Redux' },

  { name: 'Sequelize' },

  { name: 'Express' },

];



const students = [{

  name: 'Cody',

  email: 'cody@gmail.com'

}, {

  name: 'Ben',

  email: 'ben@gmail.com'

}, {

  name: 'Star',

  email: 'star@gmail.com'

}, {

  name: 'Batman',

  email: 'batman@gmail.com'

}, {

  name: 'Elliott',

  email: 'elliott@gmail.com'

}, {

  name: 'Fira',

  email: 'fira@gmail.com'

}, {

  name: 'Henry',

  email: 'henry@gmail.com'

}, {

  name: 'Marcy',

  email: 'marcy@gmail.com'

}, {

  name: 'Milton',

  email: 'Milton@gmail.com'

}, {

  name: 'Murphy',

  email: 'murphy@gmail.com'

}, {

  name: 'Raffi',

  email: 'raffi@gmail.com'

}, {

  name: 'Tulsi',

  email: 'tuli@gmail.com'

}, {

  name: 'Pork Chop',

  email: 'porkchop@gmail.com'

}, {

  name: 'Ribs',

  email: 'ribs@gmail.com'

}, {

  name: 'Stacey',

  email: 'stacy@gmail.com'

}, {

  name: 'JD',

  email: 'jd@gmail.com'

}, {

  name: 'BenBen',

  email: 'benben@gmail.com'

}, {

  name: 'Odie',

  email: 'odie@gmail.com'

}];



const seed = () =>

  Promise.all(students.map(student =>

    Student.create(student))

  )

  .then(() =>

  Promise.all(campuses.map(campus =>

    Campus.create(campus))

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
