import ora from "ora";
import chalk from "chalk";
function Timer_Calculation(calculate) {
    const currentdate = new Date();
    calculate.setFullYear(currentdate.getFullYear() + 1, 0, 1);
    const nextYear = new Date(currentdate.getFullYear() + 1, 0, 1);
    const RemainingTime = nextYear.getTime() - currentdate.getTime();
    return RemainingTime;
}
;
const sleep = () => new Promise((animation) => setTimeout(animation, 5000));
export const Count_Down_Timer = async (calculate) => {
    let Ora1 = ora(chalk.bold.greenBright('Starting Your Timer'.toUpperCase())).start();
    Ora1.color = "yellow";
    await sleep();
    Ora1.clear();
    Ora1.stop();
    console.log();
    Ora1.succeed(chalk.bold.bgGreen('Timer Started Successfully'.toUpperCase()));
    console.log();
    console.log("=======================================");
    console.log(`${chalk.bold.redBright(`Countdown Timer - Started:`)} \n ${chalk.bold.redBright(`Days`)}: | ${chalk.bold.yellowBright(`Hours`)}: |  ${chalk.bold.greenBright(`Minutes`)}: |  ${chalk.bold.magentaBright(`Seconds`)}`);
    const asynchronus = setInterval(() => {
        const RemainingTimer = Timer_Calculation(calculate);
        if (RemainingTimer > 0) {
            const Days = Math.floor(RemainingTimer / (1000 * 60 * 60 * 24));
            const Hours = Math.floor((RemainingTimer % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const Minutes = Math.floor((RemainingTimer % (1000 * 60 * 60)) / (1000 * 60));
            const Seconds = Math.floor((RemainingTimer % (1000 * 60)) / 1000);
            const SecondsString = String(Seconds).padStart(2, '0');
            process.stdout.write(`\r ${chalk.bold.greenBright(Days)}    :   ${chalk.bold.redBright(Hours)}    :    ${chalk.bold.yellowBright(Minutes)}      :    ${chalk.bold.magentaBright(SecondsString)} `);
        }
        else {
            clearInterval(asynchronus);
            process.stdout.write('\rCountdown expired!\n');
        }
    }, 1000);
};
