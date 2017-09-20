const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors');
const mainCtrl = require('./controllers/main_ctrl');

const port = 3000;
const app = express();

app.use(bodyParser.json());
app.use(cors( ));

app.listen(port,()=> console.log(`Issa port called ${port}`))


app.put('/api/name/', mainCtrl.changeName);
app.put('/api/location/', mainCtrl.changeLocation);

app.post('/api/occupations/', mainCtrl.createJob);
app.post('/api/hobbies/', mainCtrl.createHobby);
app.post('/api/family/', mainCtrl.createFamily);
app.post('/api/restaurants/', mainCtrl.createEats);

app.get('/api/name',mainCtrl.getName);
app.get('/api/location',mainCtrl.getLocation);
app.get('/api/occupations',mainCtrl.getOccupations);
app.get('/api/occupations/latest',mainCtrl.getLatest);
app.get('/api/hobbies',mainCtrl.getHobbies);
app.get('/api/hobbies/:type',mainCtrl.getHobbyType);
app.get('/api/family',mainCtrl.getFamily);
app.get('/api/family/:gender',mainCtrl.getFamilyGender);
app.get('/api/restaurants',mainCtrl.getRestaurants);
app.get('/api/restaurants/:type',mainCtrl.getRestaurantType);
app.get('/api/skills', mainCtrl.getSkills)



