class DashboardPage {
    get dashboardPageUrl(){
        return 'https://kasirdemo.vercel.app/dashboard';
    }

    async assertDashboardUrl(){
        await expect(browser).toHaveUrl(this.dashboardPageUrl);
    }
}

module.exports = new DashboardPage();