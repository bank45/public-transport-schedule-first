import express from 'express';
import fetch from 'node-fetch';
//import Axios from 'axios';


//Подключение к базе=========================================================================
const MongoClient = require("mongodb").MongoClient;
const mongoClient = new MongoClient("mongodb://localhost:27017/", { useNewUrlParser: true });
//===========================================================================================

const router = express.Router();

router.post('/station', async (req, res) => {

  const response = await fetch()

  res.send()
})

router.post('/rasp', async (req, res) => {
  console.log('RASP////////////============================/////////', req.body);
  const response = await fetch('https://api.rasp.yandex.net/v3.0/search/?apikey=f4dd2c3f-2280-4d37-8bb9-fcdb16a54e48&format=json&from=c146&to=c213&lang=ru_RU&page=1&date=2019-03-23');
  const resBody = await response.json();

  res.send(resBody);
});

router.get('/rasp', async (req, res) => {
  console.log('RASP////////////============================/////////', req.body);

  // Засеивание базы ===================================================//======
  //  const stations = await fetch('https://api.rasp.yandex.net/v3.0/stations_list/?apikey=f4dd2c3f-2280-4d37-8bb9-fcdb16a54e48&lang=ru_RU&format=json')
  //  const resBodyStat = await stations.json();
  //  for (let i of resBodyStat.countries) {
  //    console.log(i)

  //  mongoClient.connect(async function (err, client) {                //======
  //    const db = client.db("rasp");                                   //======
  //    const collection = db.collection("stat");
  //  let user = {name: "Tom", age: 23};
  //    await collection.insertOne(i, function (err, result) {

  //      if (err) {
  //        return console.log(err);
  //      }
  //      console.log(result.ops);
  //  client.close();
  //    });
  //  });
  //  };
  //console.log('STATION======SSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS');

  //res.send(resBodyStat.countries[0]);
  //====================================================================//======


  //  res.send(resBody);
});

// router.get('/thread', async (req, res) => {
//   console.log('RASP////////////============================================================================/////////');
//   const response = await fetch('https://api.rasp.yandex.net/v3.0/search/?apikey=f4dd2c3f-2280-4d37-8bb9-fcdb16a54e48', {
//     format: 'json',
//     from: 'c146',
//     to: 'c213',
//     lang: 'ru_RU',
//     page: '1',
//     date: '2019-03-23'

// //   });
//   const resBody = await response.json();
//   console.log(resBody)
//   // console.log(resBody)
//   // res.send(resBody)
//   res.json(resBody);
// });

router.get('/user', (req, res) => {
  setTimeout(() => res.send({
    name: 'Aleksander',
    email: 'bank45@yandex.ru'
  }), 1000);
});

router.get('/posts', (req, res) => {
  setTimeout(() => res.send([
    { id: 1, title: 'First Post', description: 'The very best first post...' },
    { id: 2, title: 'Second Post', description: 'Dirty post :(' }
  ]), 1000);
});

const usersArr = [
  { login: 'mike', name: 'Michael Klishevich' },
  { login: 'john', name: 'John King' }
];

router.post('/login', (req, res) => {
  console.log(JSON.stringify(req.body));
  const requestUser = req.body.login;
  const currentUser = usersArr.filter(el => el.login === requestUser)[0];
  console.log('currentUser', currentUser);
  setTimeout(() => {
    if (currentUser) {
      res.send(currentUser);
    } else {
      res.status(401);
      res.send('401 UNAUTHORIZED');
    }
  }, 1000);
});

export default router;
