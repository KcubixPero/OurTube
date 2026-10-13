import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import connectDB from "./db/index.js";
import dotenv from "dotenv";
dotenv.config();
// import app from "./app.js";
// import express from "express";

connectDB();