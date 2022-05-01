"use strict"

let Sqlite = require('better-sqlite3');

//const bcrypt = require('bcrypt');

let db = new Sqlite('sqlite.db');

let drop_tables = ()=>{
    db.prepare('DROP TABLE IF EXISTS attendance').run();
    db.prepare('DROP TABLE IF EXISTS session').run();
    db.prepare('DROP TABLE IF EXISTS student').run();
    db.prepare('DROP TABLE IF EXISTS techer').run();
    db.prepare('DROP TABLE IF EXISTS groups').run();
    db.prepare('DROP TABLE IF EXISTS workspace').run();
    db.prepare('DROP TABLE IF EXISTS admin').run();
}

let create_tables = ()=>{
    
    db.prepare(`CREATE TABLE IF NOT EXISTS workspace (
        id INTEGER PRIMARY KEY AUTOINCREMENT, 
        name TEXT NOT NULL,
        logo TEXT,
        adminEmail TEXT UNIQUE NOT NULL,
        password TEXT NOT NULL)`).run();

    db.prepare(`CREATE TABLE IF NOT EXISTS teacher (
                id INTEGER PRIMARY KEY AUTOINCREMENT, 
                firstName TEXT NOT NULL, 
                lastName TEXT NOT NULL, 
                birthdate DATE NOT NULL,
                email TEXT UNIQUE NOT NULL, 
                workspaceId INTEGER NOT NULL,
                password TEXT NOT NULL,
                image TEXT,
                FOREIGN KEY(workspaceId) REFERENCES workspace(id) ON DELETE CASCADE)`).run();

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
                teacherId INTEGER NOT NULL,
                groupId INTEGER NOT NULL,
                startTime DATETIME NOT NULL,
                endTime DATETIME NOT NULL,
                checked BOOLEAN DEFAULT FALSE,
                FOREIGN KEY(teacherId) REFERENCES teacher(id) ON DELETE CASCADE,
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

drop_tables();
create_tables();
