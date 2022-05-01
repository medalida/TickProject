"use strict"

let Sqlite = require('better-sqlite3');

//const bcrypt = require('bcrypt');

let db = new Sqlite('sqlite.db');


let insertTeacher = db.prepare('INSERT INTO teacher VALUES (NULL, @firstName, @lastName, @birthdate, @email, @workspaceId, @password, @image)');
let selectTeacher = db.prepare('SELECT * FROM teacher WHERE email = ?');
let selectAllTeacher = db.prepare('SELECT * FROM teacher WHERE workspaceId = ?');

let insertStudent = db.prepare('INSERT INTO student VALUES (NULL, @firstName, @lastName, @birthdate, @email, @workspaceId, @groupId, @image)');

let insertWorkspace = db.prepare('INSERT INTO workspace VALUES (NULL, @name, @logo, @adminEmail, @password)');
let selectWorkspace = db.prepare('SELECT * FROM workspace WHERE adminEmail = ?');

let insertSession = db.prepare('INSERT INTO session VALUES (NULL, @name, @teacherId, @groupId, @startTime, @endTime, @checked)');
let selectSession = db.prepare('SELECT * FROM session WHERE date(startTime) = ?');

let insertGroup = db.prepare('INSERT INTO groups VALUES (NULL, @name)');
let selectGroup = db.prepare('SELECT * FROM groups WHERE name = ?');
let selectAllGroup = db.prepare('SELECT * FROM groups');

//insertWorkspace.run({name:"work", logo:"lgoo"})

module.exports = {db, insertTeacher, insertStudent, insertWorkspace, insertSession, insertGroup, selectGroup, selectAllGroup, selectSession, selectTeacher, selectAllTeacher, selectWorkspace};