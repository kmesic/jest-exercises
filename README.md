# Jest Exercises
This repo is for practicing jest with JavaScript and LWC!

## Setup
*Some of these commands might need the sudo command preprended to them, depending on your OS*

**Step 1:** Clone this repo or click the download button to download it.
```
git clone https://github.com/kmesic/jest-exercises.git
```

Requirements:
- node (LTS - long term support)
- npm

**Step 2:** Run the command below. If the command fails, please install node (npm comes with node): https://nodejs.org/en/
```
node -v
```
- Easiest way to install node is through brew on Mac: 
```
brew install node
```

**Step 3:** I recommend using the LTS version of node. Easiest way to do that, is to install n (https://github.com/tj/n)
```
npm install -g n
n lts
```

**Step 4:** cd into the cloned directory and run:
```
npm install
```
- If you get an error here, please remove the package-lock.json, and retry.

**Step 5:** I would highly recommend yarn over npm to run the commands. If you don't have yarn, please install.
```
brew install yarn
```

## Commands
I have created aliases for each of the lwc-jest commands. You can visit all the aliases in the package.json file and then under scripts you will see the command.

**If using yarn over npm, replace `npm run` with `yarn`. Allows more flexibility and better output!**

### npm run test -> lwc-jest
Runs the tests!

### npm run test:unit:debug -> lwc-jest --debug
Runs the tests in debug mode. Allows you to set breakpoints. Read the Debugger section to know how to set up the environment for it.

### npm run test:unit:watch -> lwc-jest --watch
Runs the tests in watch mode. Anytime a file changes, reruns tests.

### npm run test:unit:coverage -> lwc-jest --coverage
Runs the tests to show code coverage.

### yarn test {testName} -> lwc-jest {testName}
Runs a specific test file
Ex. This will only run the tests in helloWorld
```
yarn test helloWorld
```

## Debugger
There a couple of ways you can debug your jest test.

### Chrome Dev Tools
1. Make sure that Chrome is updated to the latest edition
-> enter chrome://settings/help in your browser tab
2. Add the Node.js V8 --inspector manager extension https://chrome.google.com/webstore/detail/nodejs-v8-inspector-manag/gnhhdgbaldcilmgcpfddgdbkhjohddkj
3. Click on the Node.js V8 inspector and toggle the setting to “Auto”
4. Add a breakpoint by adding a “debugger” statement somewhere in your code
5. run `npm run test:unit:debug`
6. Dev Tools should open up and break at the debugger statement

### Visual Studio Code
1. From the Visual Studio Code dropdowns, select Debug > Add Configuration....
2. If you're prompted for an Environment choose any value.
3. Mac users, replace the contents of the generated launch.json with the following. (for Windows users see the Jest website for launch.json contents).

```
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Debug Jest Tests",
      "type": "node",
      "request": "launch",
      "runtimeArgs": [
        "--inspect-brk",
        "${workspaceRoot}/node_modules/.bin/jest",
        "--runInBand"
      ],
      "console": "integratedTerminal",
      "internalConsoleOptions": "neverOpen",
      "port": 9229
    }
  ]
}
```

4. To run tests, press F5 or select Debug > Start Debugging. 
