var fs = require('fs'),
    path = require('path'),
    filePath = path.join(__dirname, 'dataset.json');

fs.readFile(filePath, {encoding: 'utf-8'}, (err,data) => {
    let i = 0, e = 0;
    const fragments = data.split('\n'),
        names = [];

    const writeGroup = array => {
        let ii = 0, ee = 0;
        if (!array.length) {
            fs.writeFile(path.join(__dirname, './dataset/index.json'), JSON.stringify(names), () => {
                console.log("FINISHED!")
            });
            return;
        }

        const group = array.slice(0, 20),
            another = array.slice(20, array.length);

        group.map(fragment => {
            try {
                const name = JSON.parse(fragment).name;
                names.push(name);
                fs.writeFile(path.join(__dirname, './dataset/' + name + '.json'), fragment, () => {
                    i++;
                    ii++;
                    console.log("Done: " + ((i + e) * 100 / fragments.length) + '%, Error: ' + (e * 100 / fragments.length) + '%');
                    if ((ii + ee) >= group.length) writeGroup(another);
                });
            } catch (e) {
                e++;
                ee++;
                console.log("Done: " + ((i + e) * 100 / fragments.length) + '%, Error: ' + (e * 100 / fragments.length) + '%');
                if ((ii + ee) >= group.length) writeGroup(another);
            }
        });
    };

    writeGroup(fragments);
});
