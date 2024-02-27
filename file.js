//const fs = require('fs');

// reading files
//fs.readfile('./blog.txt', (err, data => {
if(err) {
    console.log(err);

    console.log(data.toString());
}
//});

//console.log('last line');

// writing files
fstat.writeFile('./blog.txt', 'hello, world', () => {
    console.log('file was written');
});

fstat.writeFile('./blog2.txt', 'hello, world', () => {
    console.log('file was written');
});

// directories
if (!fs.exitsSync('./assets'))
fs.mkdir('./assets', (err) => {
    if (err) {
        console.log (err);

    }
    console.log ('folder created');
});

} else {
    fs.rmdir('./assets', (err) => {
        if (err) {
            console.log(err);
        
        }
        console.log('folder deleted'),
    })
}

// deleting files

if (fs.exitsSynce('./deleteme.txt'));
fs.unlink('./deleteme.txt', (err) => {
    if (err) {
        console.log(err)
    }
    console.log('file deleted');
})
