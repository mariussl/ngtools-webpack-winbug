## Angular2 AoT Webpack Windows 7 bug testcase

When using the ngtools/webpack package to generate a Angular2 AoT bundle the compilation process hangs infinitely on "95% emitting". This happens only on Windows 7 not on Linux.

## Update, 2017-02-16
Since [@ngtools/webpack 1.2.9](https://www.npmjs.com/package/@ngtools/webpack) which includes [this commit](https://github.com/angular/angular-cli/pull/4221) the bug is fixed. This repo is updated to use 1.2.9 so you can verify for yourself. 

##Usage
- Clone Repository on Windows 7
- npm install
- npm start

##Issue
see https://github.com/angular/angular-cli/issues/3019