package org.lanqiao.util;

import org.lanqiao.vo.ParagraphDetail;

import java.util.ArrayList;
import java.util.List;

public class SelectPageNumUtil {
    private int resultRow=0;
    private int txtRow=3;
    private List<String> result=new ArrayList<>();
    private int hang = 11;
    public List<String> selectPage(List<ParagraphDetail> paragraphDetails,int pageNum){
        if(pageNum == 1){
            resultRow +=3;
            result.add("");
        }
        //遍历所有段落进行选择
        for (ParagraphDetail p:paragraphDetails) {
            //页满了停止选择
            if(resultRow == hang){
                break;
            }
            //页未满  选择达到条件的段落
            if(resultRow < hang && ((txtRow+ p.getTotalRow()) >= ((pageNum-1)*hang))){
                //第一次选择判断是否需要截取此段落
                if(resultRow == 0){
                   int f= (txtRow+p.getTotalRow()) - (pageNum-1)*hang;
                   if( f == 0){
                       result.add(p.getText());
                       resultRow += p.getTotalRow();
                       txtRow += p.getTotalRow();
                   } else {
                       String bridge= new String();
                       resultRow += f;
                       txtRow += f;
                       for(;f >0;f--){
                           bridge += p.getRowTxt().get(p.getTotalRow()-f);
                       }
                       result.add(bridge);
                   }
                }
                //中间段落的插入
                else if(resultRow <hang && (txtRow + p.getTotalRow()) < (pageNum *hang)){
                    result.add(p.getText());
                    resultRow += p.getTotalRow();
                    txtRow += p.getTotalRow();
                }

                //最后一段的选择 判断是否需要截取
                else {
                    int ft=hang-resultRow;
                    String bridge = new String();
                    resultRow+=ft;
                    txtRow +=ft;
                    for (int j = 0;j<ft;j++){
                        bridge += p.getRowTxt().get(j);
                    }
                    result.add(bridge);
                }
            }else {
                txtRow += p.getTotalRow();
            }
        }
        return result;
    }
}
