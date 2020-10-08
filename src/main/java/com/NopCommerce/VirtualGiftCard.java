package com.NopCommerce;

import org.openqa.selenium.By;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class VirtualGiftCard extends Utils{

    private By _recipientName = By.id("giftcard_43_RecipientName");
    private By _recipientEMail = By.id("giftcard_43_RecipientEmail");
    private By _emailFriend = By.xpath("//input[@value='Email a friend']");
    // By _emailFriend=By.cssSelector("input.button-2.email-a-friend-button.valid");
    // By _emailFriend=By.xpath("/html[1]/body[1]/div[6]/div[3]/div[2]/div[1]/div[1]/div[1]/form[1]/div[2]/div[1]/div[2]/div[8]/div[3]/input[1]");




    public void clickOnEmailFriend() {
        WebDriverWait wait = new WebDriverWait(driver, 30);
        wait.until(ExpectedConditions.elementToBeClickable(_emailFriend));
         //clickOnElement(_emailFriend);
    }
    public void enterRecipientsNameAndEmail(String name,String email){
        //Enter Recipient's Name here we passing data from feature File (scenario & scenario outline)
        typeText(_recipientName,name);
        //Enter Recipient's Email here we passing data from feature File (scenario & scenario outline)
        typeText(_recipientEMail,email);
    }





}
