"use strict"

let Sqlite = require('better-sqlite3');

//const bcrypt = require('bcrypt');

let db = new Sqlite('sqlite.db');

let drop_tables = ()=>{
    db.prepare('DROP TABLE IF EXISTS attendance').run();
    db.prepare('DROP TABLE IF EXISTS session').run();
    db.prepare('DROP TABLE IF EXISTS students').run();
    db.prepare('DROP TABLE IF EXISTS techer').run();
    db.prepare('DROP TABLE IF EXISTS groups').run();
    db.prepare('DROP TABLE IF EXISTS workspace').run();
    db.prepare('DROP TABLE IF EXISTS admin').run();
}


let create_tables = ()=>{
    db.prepare(`CREATE TABLE IF NOT EXISTS techer (
                id INTEGER PRIMARY KEY AUTOINCREMENT, 
                firstName TEXT NOT NULL, 
                lastName TEXT NOT NULL, 
                birthdate DATE NOT NULL,
                email TEXT UNIQUE NOT NULL, 
                workspaceId INTEGER NOT NULL,
                password TEXT NOT NULL,
                image TEXT,
                FOREIGN KEY(workspaceId) REFERENCES workspace(id) ON DELETE CASCADE)`).run();

    db.prepare(`CREATE TABLE IF NOT EXISTS admin (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT NOT NULL, 
                email TEXT UNIQUE NOT NULL, 
                password TEXT NOT NULL)`).run();

    db.prepare(`CREATE TABLE IF NOT EXISTS workspace (
                id INTEGER PRIMARY KEY AUTOINCREMENT, 
                name TEXT UNIQUE NOT NULL, 
                adminId INTEGER NOT NULL,
                image TEXT,
                FOREIGN KEY(adminId) REFERENCES admin(id) ON DELETE CASCADE)`).run();

    db.prepare(`CREATE TABLE IF NOT EXISTS groups (
                id INTEGER PRIMARY KEY AUTOINCREMENT, 
                name TEXT UNIQUE NOT NULL)`).run();


    db.prepare(`CREATE TABLE IF NOT EXISTS student (
                id INTEGER PRIMARY KEY AUTOINCREMENT, 
                firstName TEXT NOT NULL,
                lastName TEXT NOT NULL, 
                birthdate DATE NOT NULL, 
                email TEXT UNIQUE NOT NULL,
                workspaceId INTEGER NOT NULL,
                groupId INTEGER NOT NULL, 
                image TEXT,
                FOREIGN KEY(workspaceId) REFERENCES workspace(id) ON DELETE CASCADE,
                FOREIGN KEY(groupId) REFERENCES groups(id) ON DELETE CASCADE)`).run();

    db.prepare(`CREATE TABLE IF NOT EXISTS session (
                id INTEGER PRIMARY KEY AUTOINCREMENT, 
                name TEXT NOT NULL,
                techerId INTEGER NOT NULL,
                groupId INTEGER NOT NULL,
                startTime DATETIME NOT NULL,
                endTime DATETIME NOT NULL,
                checked BOOLEAN DEFAULT FALSE,
                FOREIGN KEY(techerId) REFERENCES techer(id) ON DELETE CASCADE,
                FOREIGN KEY(groupId) REFERENCES groups(id) ON DELETE CASCADE)
                `).run();

    db.prepare(`CREATE TABLE IF NOT EXISTS attendance (
                studentId INTEGER, 
                sessionId INTEGER, 
                status BOOLEAN DEFAULT NULL,
                FOREIGN KEY(studentId) REFERENCES student(id) ON DELETE CASCADE,
                FOREIGN KEY(sessionId) REFERENCES session(id) ON DELETE CASCADE,
                PRIMARY KEY(studentId, sessionId))`).run();                
}


let insertTecher = db.prepare('INSERT INTO techer VALUES (NULL, @firstName, @lastName, @birthdate, @email, @workspaceId, @password, @image)');
let insertStudent = db.prepare('INSERT INTO student VALUES (NULL, @firstName, @lastName, @birthdate, @email, @workspaceId, @groupId, @image)');
let insertAdmin = db.prepare('INSERT INTO admin VALUES (NULL, @name, @email, @password)');
let insertWorkspace = db.prepare('INSERT INTO workspace VALUES (NULL, @name, @adminId, @image)');
let insertSession = db.prepare('INSERT INTO session VALUES (NULL, @name, @techerId, @groupId, @startTime, @endTime, @checked)');
let insertGroup = db.prepare('INSERT INTO groups VALUES (NULL, @name)');

module.exports = {insertTecher, insertStudent, insertAdmin, insertWorkspace, insertSession, insertGroup, drop_tables, create_tables};