const assert = require('assert')

describe('Open Kasir Demo', () => {
    it('should open browser dan redirect to kasirdemo', async () => {
        //buka browser dan url\
        await browser.url('/')

        //assertion untuk memastikan url
        const currentURL = await browser.getUrl();
        const expectedURL = 'https://kasirdemo.vercel.app/login';

        await assert.strictEqual(currentURL, expectedURL, 'URL tidak sesaui. Actual : ${currentURL}, Expected : ${expectedURL}');
    })
})