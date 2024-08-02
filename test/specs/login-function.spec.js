const assert = require('assert')

//memakai function
async function login(email,password){
    //Buka browser dan url
    await browser.url('/')
   
    //masukin email (css locator)
    await $('#email').setValue(email);
    // password (css locator)
    await $('#password').setValue(password);
    // login
    await $('/html/body/div[1]/div/div/div/div[2]/div/button').click();
   }

describe('KasirDemo Login Test with function', () => {
    it ('Should login succesfully with valid credentials', async () => {
        //panggil fungsi login
        await login('warungaja@email.com', 'warung@123')
        await expect(browser).toHaveUrl('https://kasirdemo.vercel.app/dashboard')

        // Logout
        await $('#menu-button-14').click();
        await $('#menu-list-14-menuitem-12').click();

        // assert login page
        await expect(browser).toHaveUrl('https://kasirdemo.vercel.app/login')
    
    })
    it ('Should login failed with invalid email', async () => {
        await login('emailaja', 'warung@123')
        const errorMessage = await $('//*[@role="alert"]')
        await expect(errorMessage).toHaveTextContaining('"email" must be a valid email')
        
    })
    it ('Should login failed with invalid password', async () => {
        await login('warungaja@email.com', '123456')
        const errorMessage = await $('//*[@role="alert"]')
        await expect(errorMessage).toHaveTextContaining('Kredensial yang Anda berikan salah')
    })
    
})