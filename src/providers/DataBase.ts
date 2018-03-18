import { Injectable } from "@angular/core";
import { Platform } from 'ionic-angular';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { Observable } from 'rxjs/Observable';
import * as moment from 'moment';


@Injectable()
export class DataBase {
    db: SQLiteObject;
    sqlLocalStorage: SQLite;
    constructor(private platform: Platform) {
        this.platform.ready().then(() => {
            this.sqlLocalStorage = new SQLite();
            this.sqlLocalStorage.create({ name: "workout.db", location: "default" }).then((db: SQLiteObject) => {
                this.db = db;
                this.createTables();
            }).catch((error) => {
                console.log(error);
            })
        })
    }
    /**
     * Create table
     */
    private createTables() {
        this.db.executeSql(
            "CREATE TABLE IF NOT EXISTS onBoardingInfo" +
            "(id INTEGER PRIMARY KEY AUTOINCREMENT," +
            "name TEXT, gender TEXT , dob TEXT , height INTEGER," +
            "weight INTEGER, activitylevel INTEGER, sportofinterest BLOB )", []);
    }
    /** Called to insert record into DB. Only needs calling when creating user after user has been created call updateInfo to add records to that user
     * 
     *  @param item: column to update.
     *  @param name: value to insert.
     */
    public insertItem(item: string, name: string) {
        return new Promise((resolve, reject) => {
            let sql = "INSERT INTO onBoardingInfo (" + item + ") VALUES (?)";
            this.db.executeSql(sql, [name]).then((data) => {
                resolve(data);
            }, (error) => {
                reject(error);
            })
        })
    }
    /** 
     * Call this to return all entires in the db.
    */
    public getInfo() {
        return new Promise((resolve, reject) => {
            this.db.executeSql("SELECT * FROM onBoardingInfo", []).then((data) => {
                let arrayUserName = [];
                if (data.rows.length > 0) {
                    for (var i = 0; i < data.rows.length; i++) {
                        arrayUserName.push({
                            id: data.rows.item(i).id,
                            name: data.rows.item(i).name,
                            gender: data.rows.item(i).gender,
                            dob: data.rows.item(i).dob,
                            height: data.rows.item(i).height,
                            weight: data.rows.item(i).weight,
                            actLevel: data.rows.item(i).activitylevel,
                            sportOfInt: data.rows.item(i).sportofinterest
                        })
                    }
                } resolve(arrayUserName);
                // console.log(JSON.stringify(data));
            }, (error) => {
                console.log(error);
                reject(error);
            })
        })
    }
    /** call to update a record in the DB.
     * 
     * @param column column name to update
     * Column names are id, name, gender, dob, height, weight, activitylevel, sportofinterest
     * @param value value to insert
     * @param name name of user to update
     * 
     */
    public updateInfo(column: string, value: string, name: string) {
        console.log(column + " " + value + " " + name);
        return new Promise((resolve, reject) => {
            this.db.executeSql("UPDATE onBoardingInfo SET (" + column + ") = (?) WHERE name = (?)", [value, name]).then((data) => {
                console.log(JSON.stringify(data));
                resolve(data);
            }, (err) => {
                reject(err);
            })
        })
    }
    /** included for completeness. will delete entire user entry from db.
     * 
     * @param name name of user to delete.
     */
    public deleteInfo(name: string) {
        return new Promise((resolve, reject) => {
            this.db.executeSql("DELETE FROM onBoardingInfo WHERE name = (?)", [name]).then((data) => {
                console.log(JSON.stringify(data));
                resolve(data);
            }, (err) => {
                reject(err);
            })
        })
    }
    public testLocaldb() {
        this.insertItem("name", "Richard");
        this.updateInfo("gender", "male", "Richard");
        return this.getInfo();
        // return this.deleteInfo("Richard");
    }
}