/*******************************************************************************
 * Copyright (c) 2017 Firis SA and others.
 * 
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the Eclipse Public License v1.0
 * and Eclipse Distribution License v1.0 which accompany this distribution.
 * 
 * The Eclipse Public License is available at
 *    http://www.eclipse.org/legal/epl-v10.html
 * and the Eclipse Distribution License is available at
 *    http://www.eclipse.org/org/documents/edl-v10.html.
 * 
 * Contributors:
 *     Sierra Wireless - initial API and implementation
 *     Bosch Software Innovations - added Redis URL support with authentication
 *     Firis SA - nodejs bindings and API
 *******************************************************************************/

// Load Leshan's java dependencies
var fs = require("fs");
var java = require("java");
var baseDir = "./target/dependency";
var dependencies = fs.readdirSync(baseDir);

dependencies.forEach(function(dependency: string){
    java.classpath.push(baseDir + "/" + dependency);
})

java.classpath.push("./target/classes");
java.classpath.push("./target/test-classes");

var leshanServer:any;

java.ensureJvm( () => {
    leshanServer = java.newInstanceSync("org.eclipse.leshan.server.nodejs.LeshanServerNodejs");
    module.exports.leshanServer = leshanServer;
});

import * as express from 'express';
var app = express();

app.get('/', function (req:any, res) {
  res.send('Hello World!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

export default leshanServer;