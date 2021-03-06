package org.lanqiao.mapper;


import org.lanqiao.entity.AuthorLogin;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface AuthorLoginMapper {
//    int deleteByPrimaryKey(Integer authorLoginId);
//

//
//    int insertSelective(AuthorLogin record);
//
//    AuthorLogin selectByPrimaryKey(Integer authorLoginId);
//
//    int updateByPrimaryKeySelective(AuthorLogin record);
//
//    int updateByPrimaryKey(AuthorLogin record);

    AuthorLogin login(String authorLoginAccount);

    int insert(AuthorLogin authorLogin);

    AuthorLogin selectByAuthorId(Integer authorId);

    AuthorLogin selectByAccount(String authorAccount);
}