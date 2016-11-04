## Angular2 AoT Webpack Windows 7 bug testcase

When using the ngtools/webpack package to generate a Angular2 AoT bundle the compilation process hangs infinitely on "95% emitting". This happens only on Windows 7 not on Linux.

##Usage
- Clone Repository on Windows 7
- npm install
- npm start

##Forensics
I tracked down the bug to the generation of **source-map** in combination with **styleUrls** in a **Component**. 

[webpack.config.js](webpack.config.js)
```
devtool: '#source-map'
```

[src/app/app.component.ts](app.component.ts)
```
styleUrls: ['./app.component.css']
```

Remove either of those and compilation finishes successfully.

##System
- Windows 7 x64 SP1
- Node 5.10.1