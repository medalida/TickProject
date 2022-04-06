"use strict"
/* Serveur pour le site API Tick */
let  express = require('express');
let attendance = require('./routers/attendance');
let techer = require('./routers/techer');
let student = require('./routers/student');
let group = require('./routers/group');
let admin = require('./routers/admin');
let auth = require('./routers/auth');
let app = express();

//get requests:

app.use('/api/admin', admin);
app.use('/api/techers', techer);
app.use('/api/students', student);
app.use('/api/groups', group);
app.use('/api/attendence', attendance);
app.use('/api/auth', auth);

app.listen(3001, () => console.log('listening on http://localhost:3001'));
