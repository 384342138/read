package org.lanqiao.vo;

import java.util.List;

public class LeiReadChapterVo {
    private int chapterId;

    private int chapterSort;

    private String chapterName;

    private String contentText;

    private List<ParagraphDetail> paragraphList;

    private int totalPageNum;

    public int getChapterId() {
        return chapterId;
    }

    public void setChapterId(int chapterId) {
        this.chapterId = chapterId;
    }

    public int getChapterSort() {
        return chapterSort;
    }

    public void setChapterSort(int chapterSort) {
        this.chapterSort = chapterSort;
    }

    public String getChapterName() {
        return chapterName;
    }

    public void setChapterName(String chapterName) {
        this.chapterName = chapterName;
    }

    public String getContentText() {
        return contentText;
    }

    public void setContentText(String contentText) {
        this.contentText = contentText;
    }

    public List<ParagraphDetail> getParagraphList() {
        return paragraphList;
    }

    public void setParagraphList(List<ParagraphDetail> paragraphList) {
        this.paragraphList = paragraphList;
    }

    public int getTotalPageNum() {
        return totalPageNum;
    }

    public void setTotalPageNum(int totalPageNum) {
        this.totalPageNum = totalPageNum;
    }
}
