package models.storages.hitResultStorage;

import models.storages.Storage;
import models.entities.HitResult;

import java.util.ArrayList;
import java.util.List;

public final class ResultStorage implements Storage<HitResult> {

    private final List <HitResult> resultList;

    public ResultStorage(){
        resultList = new ArrayList<>();
    }

    public void addNewResult(HitResult info){
        resultList.add(info);
    }

    public List<HitResult> getResultList(){
        return resultList;
    }

    public void clearResultList(){
        resultList.clear();
    }
}
