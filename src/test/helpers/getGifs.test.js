import { getGifs } from '../../helpers/getGifs.js'

describe('Pruebas con Fetch gifs', () => {
    test('Debe de trar 10 elementos', async() => {
        const gifs = await getGifs('Goku');
        expect(gifs.length).toBe(10);
    });

    test('Debe retornar un arreglo vacio', async() => {
        const gifs = await getGifs('');
        expect(gifs.length).toBe(0);
    })
})