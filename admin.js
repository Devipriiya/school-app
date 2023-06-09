import express from "express";
import connectDB from "./admindb.js";
import teachers from "./teachers.js";
import library from "./library.js";
import upcommingexams from "./upcommingexams.js";
import gallery from "./gallery.js";
import gallerypage from "./gallerypage.js";
import event from "./event.js";
import attendance from "./attendance.js";
import examresult from "./examresult.js";
import subject from "./subject.js";
import studentlist from "./studentslist.js";
import teacherstimetable from "./teacherstimetable.js";
import studenttimetable from "./studenttimetable.js";
import studentfees from "./studentfees.js";

import alert from "./alert.js";
import assignments from "./assignments.js";
import complaint from "./complaint.js";
import parentattendance from "./parentattendance.js";
import fees from "./fees.js";
import homework from "./homework.js";
import leave from "./leave.js";
import meeting from "./meeting.js";
import notifyassignment from "./notifyassignment.js";
import notifyschedule from "./notifyschedule.js";
import notifytodayclass from "./notifytodayclass.js";
import profilepage from "./pro.js";
import remark from "./remark.js";
import sports from "./sports.js";
import teacherslist from "./teacherlist.js";
import classperiod from "./classperiod.js";
 
import addevent from "./addevent.js";
import teacherassignment from "./teacherassignment.js";
import attend from "./attend.js";
import teacherhomework from"./teacherhomework.js";
import leaveletter from "./leaveletters.js";
import leaverequest from "./leaverequest.js";
import newleave from "./newleave.js";
import teachprofile from "./teachprofile.js";
import reportcard from "./reportcard.js";
import teachschedule from "./teachschedule.js";
import teachtimetable from "./teachtimetable.js";
import uploadassignment from "./uploadassignment.js";
connectDB()

const app=express();
app.use(express.json());
app.use('/teachers',teachers);
app.use('/library',library);
app.use('/upcommingexams',upcommingexams);
app.use('/examresult',examresult);
app.use('/gallery',gallery);
app.use('/gallerypage',gallerypage);
app.use('/event',event);
app.use('/attendance',attendance);
app.use('/subject',subject);
app.use('/studentlist',studentlist);
app.use('/teacherstimetable',teacherstimetable);
app.use('/studenttimetable',studenttimetable)
app.use('/studentfees',studentfees);

app.use('/alert',alert);
app.use('/assignments',assignments);
app.use('/complaint',complaint);
app.use('/parentattendance',parentattendance);
app.use('/fees',fees);
app.use('/homework',homework);
app.use('/leave',leave);
app.use('/meeting',meeting);
app.use('/notifyassignment',notifyassignment);
app.use('/notifyschedule',notifyschedule);
app.use('/notifytodayclass',notifytodayclass);
app.use('/profilepage',profilepage);
app.use('/remark',remark);
app.use('/sports',sports);
app.use('/subject',subject);
app.use('/teacherslist',teacherslist);
app.use('/classperiod',classperiod);

app.use('/addevent',addevent);
app.use('/teacherassignment',teacherassignment);
app.use('/attend',attend);
app.use('/teacherhomework',teacherhomework);
app.use('/leaveletter',leaveletter);
app.use('/leaverequest',leaverequest);
app.use('/newleave',newleave);
app.use('/teachprofile',teachprofile);
app.use('/reportcard',reportcard);
app.use('/teachshedule',teachschedule);
app.use('/teachtimetable',teachtimetable);
app.use('/uploadassignment',uploadassignment);
const port=5000;
app.listen(port,()=>{
    console.log(`server is running at ${port}`);
 
});
