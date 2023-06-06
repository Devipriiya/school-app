import express from "express";
import connectDB from "./admindb.js";
// import students from "./students.js";

import teachers from "./teachers.js";
import library from "./library.js";
// import timetable from "./timetable.js";
import upcommingexams from "./upcommingexams.js";
import gallery from "./gallery.js";
import gallerypage from "./gallerypage.js";
import event from "./event.js";
// import bustrack from "./bustrack.js";
// import trackbus from "./trackbus.js";
import attendance from "./attendance.js";

import examresult from "./examresult.js";
import subject from "./subject.js";
import first from "./first.js";
import second from "./second.js";
import third from "./third.js";
import fourth from "./fourth.js";
import fifth from "./fifth.js";
import sixth from "./sixth.js";
import seven from "./seven.js";
import eight from "./eight.js";
import ninth from "./ninth.js";
import ten from "./ten.js";
import eleventh from "./eleventh.js";
import twelfth from "./twelfth.js";
import teacherstimetable from "./teacherstimetable.js";
import firsttimetable from "./firsttimetable.js";
import secondtimetable from "./secondtimetable.js";
import thirdtimetable from "./thirdtimetable.js";
import fourthtimetable from "./fourthtimetable.js";
import fifthtimetable from "./fifthtimetable.js";
import sixthtimetable from "./sixthtimetable.js";
import seventimetable from "./seventimetable.js";
import eighttimetable from "./eighthtimetable.js";
import ninthtimetable from "./ninthtimetable.js";
import tenthtimetable from "./tenthtimetable.js";
import eleventhtimetable from "./eleventhtimetable.js";
import twelfthtimetable from "./twelfthtimetable.js";
import firstfees from "./firstfees.js";
import secondfees from "./secondfees.js";
import thirdfees from "./thirdfees.js";
import fourthfees from "./fourthfees.js";
import fifthfees from "./fifthfees.js";
import sixthfees from "./sixthfees.js";
import seventhfees from "./seventhfees.js";
import eighthfees from "./eighthfees.js";
import ninthfees from "./ninthfees.js";
import tenthfees from "./tenthfees.js";
import eleventhfees from "./eleventhfees.js";
import twelfthfees from "./twelfthfees.js";

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
app.use('/first',first);
app.use('/second',second);
app.use('/third',third);
app.use('/fourth',fourth);
app.use('/fifth',fifth);
app.use('/sixth',sixth);
app.use('/seven',seven);
app.use('/eight',eight);
app.use('/ninth',ninth);
app.use('/ten',ten);
app.use('/eleventh',eleventh);
app.use('/twelfth',twelfth);
app.use('/teacherstimetable',teacherstimetable);
app.use('/firsttimetable',firsttimetable);
app.use('/secondtimetable',secondtimetable);
app.use('/thirdtimetable',thirdtimetable);
app.use('/fourthtimetable',fourthtimetable);
app.use('/fifthtimetable',fifthtimetable);
app.use('/sixthtimetable',sixthtimetable);
app.use('/seventimetable',seventimetable);
app.use('/eighttimetable',eighttimetable);
app.use('/ninthtimetable',ninthtimetable);
app.use('/tenthtimetable',tenthtimetable);
app.use('/eleventhtimetable',eleventhtimetable);
app.use('/twelfthtimetable',twelfthtimetable);
app.use('/firstfees',firstfees);
app.use('/secondfees',secondfees);
app.use('/thirdfees',thirdfees);
app.use('/fourthfees',fourthfees);
app.use('/fifthfees',fifthfees);
app.use('/sixthfees',sixthfees);
app.use('/seventhfees',seventhfees);
app.use('/eighthfees',eighthfees);
app.use('/ninthfees',ninthfees);
app.use('/tenthfees',tenthfees);
app.use('/eleventhfees',eleventhfees);
app.use('/twelfthfees',twelfthfees);

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
