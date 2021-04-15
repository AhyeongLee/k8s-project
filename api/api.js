const express = require('express');
//const k8s = require('@kubernetes/client-node');

const app = express();
const port = process.env.PORT || 8080;

let count = 0;

//const kc = new k8s.KubeConfig();
//kc.loadFromDefault();

//const k8sApi = kc.makeApiClient(k8s.CoreV1Api);
//let pods = {};
//k8sApi.listNamespacedPod('default').then((res) => {
//    pods = res.body;
//});

// app.get('/', (req, res) => {
//     res.send('Hello from node');
// });

app.get('/api', (req, res) => {
    count++;
    res.json({result: count});
});

app.get('/api/current', (req, res) => {
    res.json({result: count});
});

app.listen(port, () => {
    console.log(`localhost:${port}`);
});
