const assert = require('assert')

describe('KasirDemo Login Test', () => {
    it ('Should login succesfully with valid credentials', async () => {
        //Buka browser dan url
        await browser.url('/')

        //masukin username (css locator)
        await $('#email').setValue('warungaja@email.com');
        // password (css locator)
        await $('#password').setValue('warung@123');
        // login
        await $('/html/body/div[1]/div/div/div/div[2]/div/button').click();
        // dashboard
        await expect(browser).toHaveUrl('https://kasirdemo.vercel.app/dashboard')

        // Logout
        await $('#menu-button-14').click();
        await $('#menu-list-14-menuitem-12').click();

        // assert login page
        await expect(browser).toHaveUrl('https://kasirdemo.vercel.app/login')
    
    })
    it ('Should login succesfully with invalid email', async () => {
        //Buka browser dan url
        await browser.url('/')

        //masukin username (css locator)
        await $('#email').setValue('emailaja');
        // password (css locator)
        await $('#password').setValue('warung@123');
        // login
        await $('/html/body/div[1]/div/div/div/div[2]/div/button').click();
        // error message
        const errorMessage = await $('//*[@role="alert"]')
        await expect(errorMessage).toHaveTextContaining('"email" must be a valid email')
        
    })
    it ('Should login failed with invalid password', async () => {
        //Buka browser dan url
        await browser.url('/')

        //masukin username (css locator)
        await $('#email').setValue('warungaja@email.com');
        // password (css locator)
        await $('#password').setValue('123456');
        // login
        await $('/html/body/div[1]/div/div/div/div[2]/div/button').click();
        // error message
        const errorMessage = await $('//*[@role="alert"]')
        await expect(errorMessage).toHaveTextContaining('Kredensial yang Anda berikan salah')
    })
    
})