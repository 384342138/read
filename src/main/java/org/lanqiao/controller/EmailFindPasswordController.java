package org.lanqiao.controller;

import org.lanqiao.entity.BookType;
import org.lanqiao.entity.UserLogin;
import org.lanqiao.service.EmailFindService;
import org.lanqiao.service.UserService;
import org.lanqiao.util.SendMail;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class EmailFindPasswordController {

    @Autowired
    EmailFindService emailFindService;

    @RequestMapping("/sendemail")
    public String EmailSend(String email){
        return emailFindService.sendEmail(email);
    }
}
