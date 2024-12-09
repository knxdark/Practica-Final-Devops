const fs = require('fs');

test('Verifica si el archivo index.html existe', () => {
    const fileExists = fs.existsSync('./index.html');
    expect(fileExists).toBe(true);
});
