#! /usr/bin/env node

import inquirer from "inquirer";
import { Count_Down_Timer } from "./CalculateTheRemaningTIME.js";
import chalk from "chalk";
import chalkanimation from "chalk-animation";
import ora from "ora";
import figlet from "figlet";

let Animation0 = ()=> {
    return new Promise((Animation1)=>{
        setTimeout(Animation1,5000);
    });
  };
  
  let Animationtitle1 = chalkanimation.rainbow("Starting Your Countdown Timer!");
  await Animation0();
  Animationtitle1.stop();
  
  let Text2 = figlet.textSync("Countdown Timer !",{
    font:"Big",
    });
  
  console.log(chalk.bold(chalk.hex('#9e1b32')(Text2)));

  let Animation1 = ()=> {
    return new Promise((Animation1)=>{
        setTimeout(Animation1,5000);
    });
  };

  const color7 = chalk.bold.hex('#20b2aa');
  const color6 = chalk.bold.hex('#fdfdd0');
  const color2 = chalk.bold.greenBright;
  let Animationtitle2 = chalkanimation.rainbow("Countdown Timer Started!");
  await Animation1();
  Animationtitle2.stop();
  const sleep = () => new Promise((r) => setTimeout(r,6000));
  async function StartTime(){
    let anime  = ora(chalk.bold.greenBright('LOADING...')).start();
    anime.color = "yellow";
    await sleep();
    anime.clear();
    anime.stop();
  }
  await StartTime();

  const TITLE = async (starttitle: string) => {
    console.log(color7("<<------------------------------------------------>>"));
    console.log(color7("<<------------------------------------------------>>"));
    console.log(color7(`<<--------->> ${color6(`Welcome To Our`)} ${color2(starttitle)}: <<--------->>`));
    console.log(color7("<<------------------------------------------------>>"));
    console.log(color7("<<------------------------------------------------>>"));
  };

  let starttitle:string;
  starttitle = "Countdown Timer app"
  await TITLE(starttitle);

    async function Start_CountDown_Timer () {
        let repeationofinvalidinput = false
        while (!repeationofinvalidinput){
        const Start_Your_Countdown_Timer = await inquirer.prompt([
            {
                message: chalk.bold.greenBright('Please Press Enter To Start Your Countdown Timer:'),
                type: 'input',
                name: 'startCountdown',
                validate: (wronginput) => {
                    if (wronginput === "") {
                    repeationofinvalidinput = true; 
                      return true; 
                    } 
                    else {
                      console.log(chalk.bold.redBright("\nPlease Press Enter Key Only"));
                      return false;
                    }
                }
            },
        ]);
        if (Start_Your_Countdown_Timer.startCountdown === ""){
            const Set_Todays_Date_And_Time = await inquirer.prompt([
                {
                    message: chalk.bold.magentaBright('Please Press Enter To Set Todays Date:'),
                    type: 'input',
                    name: 'startDate',
                    validate: (wronginput) => {
                        if (wronginput === "") {
                        repeationofinvalidinput = true; 
                          return true; 
                        } 
                        else {
                          console.log("\nPlease Press Enter Key Only");
                          return false;
                        }
                    }
                },
                {
                    message: chalk.bold.magentaBright('Please Press Enter To Set Todays Time:'),
                    type: 'input',
                    name: 'startTime',
                    validate: (wronginput) => {
                        if (wronginput === "") {
                        repeationofinvalidinput = true; 
                          return true; 
                        } 
                        else {
                          console.log(chalk.bold.redBright("\nPlease Press Enter Key Only"));
                          return false;
                        }
                    }
                },
            ]);

            let TimeDate = Set_Todays_Date_And_Time.startDate
            if(!TimeDate){
                TimeDate = new Date().toLocaleDateString();
                console.log(chalk.bold.greenBright(`Todays Date: ${TimeDate}`));
            }

            let Time = Set_Todays_Date_And_Time.startTime;
            if(!Time) {
                Time = new Date().toLocaleTimeString();
                console.log(chalk.bold.redBright(`Todays Time: ${Time}`));
            }

            TimeDate = new Date(TimeDate);
            const Newtimers = Time.match(/(\d+):(\d+) ([APap][Mm])/);
            if(Newtimers){
                const Hours = +Newtimers[1];
                const Minutes = +Newtimers[2];
                const PM_AM = Newtimers[3];
                if(PM_AM === "PM" && Hours !== 12){
                    TimeDate.setHours(Hours + 12, Minutes);
                }
                else if (PM_AM === "AM" && Hours === 12){
                    TimeDate.setHours(0, Minutes);
                }
                else {
                    TimeDate.setHours(Hours,Minutes);
                }
            }
            let ORA1 = ora(chalk.bold.greenBright('Setting Your Timer'.toUpperCase())).start();
            ORA1.color = "yellow";
            await sleep();
            ORA1.clear();
            ORA1.stop();
            Count_Down_Timer(TimeDate);

        }
        else {
            console.log("Invalid! Identityfication please confirm the valid Identityfication!");
        }
    }

    };

    Start_CountDown_Timer ();