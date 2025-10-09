const chalk = require('chalk');

class Logger {
  info(msg)   { console.log(chalk.cyan(`[INFO] ${msg}`)); }
  step(msg)   { console.log(chalk.blue(`[STEP] ${msg}`)); }
  success(msg){ console.log(chalk.green(`[PASS] ${msg}`)); }
  warn(msg)   { console.log(chalk.yellow(`[WARN] ${msg}`)); }
  error(msg)  { console.log(chalk.red(`[FAIL] ${msg}`)); }
}

module.exports = new Logger();