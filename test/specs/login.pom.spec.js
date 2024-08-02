const Page = require('../../pages/page')
const LoginPage = require('../../pages/login.page')
const DashboardPage = require('../../pages/dashboard.page')


describe('KasirDemo Login Test with function', () => {
    beforeEach(async () => {
        //open browser
        Page.open('/')
    })

    it ('Should login succesfully with valid credentials', async () => {
        //panggil fungsi login
        await LoginPage.login('warungaja@email.com', 'warung@123');
        await DashboardPage.assertDashboardUrl();

        // Logout
        await $('#menu-button-14').click();
        await $('#menu-list-14-menuitem-12').click();

        // assert login page
        await expect(browser).toHaveUrl('https://kasirdemo.vercel.app/login');
    
    })
    it ('Should login failed with invalid email', async () => {
        await LoginPage.login('emailaja', 'warung@123');

        //assert error message
        await LoginPage.assertErrorMessage('"email" must be a valid email');
        
    })
    it ('Should login failed with invalid password', async () => {
        await LoginPage.login('warungaja@email.com', '123456');
        
        //assert error message
        await LoginPage.assertErrorMessage('Kredensial yang Anda berikan salah');
    })
    
})