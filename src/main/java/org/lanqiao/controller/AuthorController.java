package org.lanqiao.controller;


import org.lanqiao.entity.Author;

import org.lanqiao.entity.BookType;
import org.lanqiao.entity.Books;
import org.lanqiao.entity.Comment;
import org.lanqiao.service.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import java.io.IOException;

import java.util.List;
import java.util.Map;


@RestController
@RequestMapping("/author")
public class AuthorController {

    @Autowired
    AuthorLoginService authorLoginService;
    @Autowired
    AuthorService authorService;
    @Autowired
    BookService bookService;
    @Autowired
    BookTypeService bookTypeService;
    @Autowired
    CommentService commentService;

    /**
     * 登录
     * by lhw
     *
     * @param authorAccount
     * @param authorPassword
     * @return
     */
    @RequestMapping("/login")
    public Map loginCheck(String authorAccount, String authorPassword) {
        System.out.println(authorAccount + " and " + authorPassword);
        return authorLoginService.loginCheck(authorAccount, authorPassword);

    }

    /**
     * 注册
     * by lhw
     *
     * @param authorAccount
     * @param authorPassword
     * @return
     * @throws IOException
     */
    @RequestMapping("/register")
    public boolean register(String authorName, String authorQq, String authorIdentity, String realName, String realID, String authorAccount, String authorPassword) {

        Author author = new Author();
        author.setAuthorName(authorName);
        author.setAuthorQq(authorQq);
        author.setAuthorIdentity(authorIdentity);
        author.setRealName(realName);
        author.setRealID(realID);
        System.out.println(author.toString());
        return authorService.register(author, authorAccount, authorPassword,realID);
    }

    /**
     * 查询某个作者的全部作品
     * by lhw
     *
     * @param authorId
     * @return ListBooks
     */
    @RequestMapping("/getAllBooksByAuthorId")
    public List<Books> getAllBooksByAuthorId(Integer authorId) {
        return bookService.selectBooksByAuthorId(8);
    }

    /**
     * 作者发表（添加）作品
     * by lhw
     *
     * @param books
     * @return
     */
    @RequestMapping("/addBook")
    public int insertBook(Books books) {
        return bookService.insertBooks(books);
    }


    /**
     * 作者中心：我的收入
     * by lhw
     *
     * @param authorId
     * @return author_money
     */
    @RequestMapping("/myIncome")
    public int myIncome(Integer authorId) {
        return authorService.selectByAuthorId(authorId).getAuthorMoney();
    }


    /**
     * 作者基本资料
     * by lhw
     * @param authorId
     * @return Author
     */
    @RequestMapping("/authorBasicData")
    public Author authorBasicData(Integer authorId){
        return authorService.selectByAuthorId(authorId);
    }

    @RequestMapping("/getAllBookType")
    public List<BookType> getAllBookType(){
        return bookTypeService.getAllBookType();
    }

    @RequestMapping("/readerComment")
    public List<Comment> readerComment(Integer authorId){
        return commentService.selectAllByAuthorId(4);
    }
}
