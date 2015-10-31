# Clique Game - Ramsey Game #
## Gra dwuosobowa, plansza to klika, każdy gracz maluje krawędzie w swoim kolorze, wygrywa ten, kto pierwszy zrobi jednobarwną klikę o zadanym rozmiarze.
### Version
0.1.0

### Dependencies
* [node-webkit](https://github.com/nwjs/nw.js/)
* [grunt-js](http://gruntjs.com)

### Usage
Grunt is used for building and deploying the app for mac, linux and windows.
- Firstly cd to directory when you want to put the app and then: 
```sh
$ git clone https://github.com/dzitkowskik/RamseyGameOfClique.git
$ cd TimeSeriesReaderNW
$ npm install
```
- To build the app type: 
```sh
$ grunt
```
- To run the app type: 
```sh
$ nw dist
```
ALSO: The executable file will be created in /dist-pkt/releases/*** for each system.

### Licence 
The MIT License (MIT)

Copyright (c) 2015 Karol Dzitkowski, Tomasz Janiszewski, Robert Jakubowski

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.