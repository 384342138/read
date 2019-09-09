package org.lanqiao.service;

import org.apache.commons.io.FilenameUtils;
import org.lanqiao.entity.Author;
import org.lanqiao.entity.AuthorLogin;
import org.lanqiao.mapper.AuthorLoginMapper;
import org.lanqiao.mapper.AuthorMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;
import java.io.File;
import java.io.IOException;
import java.util.UUID;


@Service
public class AuthorServiceImpl implements AuthorService {

    AuthorLogin authorLogin = new AuthorLogin();

    Author author1;

    @Autowired
    AuthorMapper authorMapper;
    @Autowired
    AuthorLoginMapper authorLoginMapper;


    @Override
    public boolean register(Author author, String authorAccount, String authorPassword, MultipartFile file, HttpServletRequest request) throws IOException {
        /**
         * 图片上传方法一：jsp获取图片方式为：<img src="http://localhost:8080/{{author.authorImg}}">
         */
        //使用UUID给图片重命名，并去电“-”
        String name = UUID.randomUUID().toString().replaceAll("-", "");
        //获取图片的扩展名
        String ext = FilenameUtils.getExtension(file.getOriginalFilename());
        //设置图片上传路径,存入数据库中的格式为:upload/文件名.后缀
        String url = request.getSession().getServletContext().getRealPath("/upload");
        //System.out.println(url);
        //以绝对路径保存重命名后的图片
        file.transferTo(new File(url + "/" + name + "." + ext));
        //把图片存储路径保存到数据库
        author.setAuthorImg("upload/" + name + "." + ext);

        int flag = authorMapper.insert(author);
        if (flag == 1) {
            author1 = new Author();
            author1 = authorMapper.selectByAuthorAccount(authorAccount);
            authorLogin.setAuthorLoginAccount(authorAccount);
            authorLogin.setAuthorLoginPassword(authorPassword);
            authorLogin.setAuthorLoginAuthorId(author1.getAuthorId());
            authorLoginMapper.insert(authorLogin);
            return true;
        } else {
            return false;
        }
    }

    @Override
    public Author selectByAuthorAccount(String authorAccount) {
        return authorMapper.selectByAuthorAccount(authorAccount);
    }

    @Override
    public Author selectByAuthorLoginAuthorId(Integer authorLoginAuthorId) {
        return authorMapper.selectByAuthorLoginAuthorId(authorLoginAuthorId);
    }
}
