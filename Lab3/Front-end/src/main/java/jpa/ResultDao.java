package jpa;

import model.Result;

import javax.faces.bean.ApplicationScoped;
import javax.faces.bean.ManagedBean;
import javax.persistence.EntityManager;
import javax.persistence.Persistence;
import javax.persistence.Query;
import java.util.List;

@ManagedBean
@ApplicationScoped
public class ResultDao {
    

    private final EntityManager entityManager = Persistence.
            createEntityManagerFactory("persist").
            createEntityManager();

    private final Query query_get = entityManager.createNamedQuery("findAll");
    private final Query query_delete = entityManager.createNamedQuery("deleteAll");



    public void addEntry(Result newResult) {
        entityManager.getTransaction().begin();
        entityManager.persist(newResult);
        entityManager.getTransaction().commit();
    }

    public List<Result> getAll(){

        return query_get.getResultList();
    }

    public void clear(){
        entityManager.getTransaction().begin();
        query_delete.executeUpdate();
        entityManager.getTransaction().commit();

    }
}
