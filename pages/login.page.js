class LoginPage {
    //Definisikan locator dari element
    get emailInput(){
        return $('#email'); //locator field email
    }
    
    get passwordInput(){
        return $('#password'); //locator field password
    }

    get loginButton(){
        return $('/html/body/div[1]/div/div/div/div[2]/div/button'); //locator login button
    }

    get errorMessage(){
        return $('//*[@role="alert"]'); //locator error message
    }
    //Interaksi yang ingin dilakukan pada element tersebut
    async login(email,password){
        await this.emailInput.setValue(email);
        await this.passwordInput.setValue(password);
        await this.loginButton.click();
    }

    async assertErrorMessage(expectedErrorMessage){
        await expect(this.errorMessage).toHaveTextContaining(expectedErrorMessage);
    }
    async getErrorMessage(){
        return this.errorMessage.getText();
    }


}

module.exports = new LoginPage();