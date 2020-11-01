const xlsxFile = require('read-excel-file/node'),
    express = require('express'),
    multer  = require("multer"),
    fs = require('fs'),
    path = require('path'),
    app = express();

let dataset = [];
app.set('port', (process.env.PORT || 5000));

app.get('/geometry', (req, res) => {
    res.json(dataset).status(200);
});

app.get('/reset', (req, res) => {
    dataset = [];
    redirect(res);
});

app.use(multer({dest:"uploads"}).single("filedata"));
app.post("/upload", function (req, res) {

    let filedata = req.file;
    if(!filedata)
        res.send("Ошибка при загрузке файла");
    else {
        processDoc(filedata.path);
        setTimeout(() => {
            redirect(res);
        }, 1300);
    }
});

app.get('/map', (req, res) => {
    const stream = fs.createReadStream(path.resolve('static/index.html'));
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    stream.pipe(res);
});

app.use(express.static('build'));

app.get('/*', (req, res) => {
    const stream = fs.createReadStream(path.resolve('build/index.html'));
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    stream.pipe(res);
});

app.listen(app.get('port'), () => console.log('Server is started on port ' + app.get('port')));

const redirect = (res) => {
    const stream = fs.createReadStream(path.resolve('static/redirect.html'));
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    stream.pipe(res);
};

const processDoc = (filePath) => {
    xlsxFile('./' + filePath).then((rows) => {
        fs.unlink(path.join(__dirname, './' + filePath), ()=>{});

        rows = rows.slice(6, rows.length);

        fs.readFile(path.join(__dirname, './dataset/index.json'), {encoding: 'utf-8'}, (err, names) => {
            names = JSON.stringify(names);

            rows = rows.filter(row => names.indexOf(row[1], 0) !== -1);

            const loadDatasetFragment = rows => {
                if (!rows.length) {
                    dataset = dataset.map(bit => {
                        if (!bit.needToParce) return bit;

                        try {
                            return {data: JSON.parse(bit.data), row: bit.row};
                        } catch (e) {
                            return null;
                        }
                    }).filter(bit => bit);

                    console.log(dataset.length);
                    return;
                }
                let i = 0;

                const group = rows.slice(0, 20),
                    another = rows.slice(20, rows.length);

                group.forEach(row => {
                    fs.readFile(path.join(__dirname, './dataset/' + row[1] + '.json'), {encoding: 'utf-8'}, (err, data) => {
                        dataset.push({data, row, needToParce: true});
                        i++;
                        if (i >= group.length) loadDatasetFragment(another);
                    });
                });
            };
            loadDatasetFragment(rows);
        });
    });
};
