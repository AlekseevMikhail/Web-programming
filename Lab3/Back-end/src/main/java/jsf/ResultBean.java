package jsf;


import jpa.ResultDao;
import model.Result;
import lombok.Data;

import javax.faces.bean.ManagedBean;
import javax.faces.bean.SessionScoped;
import java.util.ArrayList;
import java.util.List;

@ManagedBean
@SessionScoped
@Data
public class ResultBean {

    private final ResultDao dbController = new ResultDao();
    private final List<Result> results = new ArrayList<Result>();

    private Result newResult = new Result();

    public ResultBean(){
    }

    public void addResults() {
        System.out.println(newResult.getR());
        newResult. checkTheArea();
        try {
            results.add(newResult);
            dbController.addEntry(newResult);
        }catch (ClassCastException ex){
            System.out.println(ex.getMessage());
        }finally {
            newResult = new Result();
        }


    }

    public List<Result> getResults(){
        return dbController.getAll();
    }

    public void clearResults(){
        results.clear();
        dbController.clear();
    }

}
