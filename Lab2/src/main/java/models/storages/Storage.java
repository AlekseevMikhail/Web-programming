package models.storages;

import java.util.List;

/**
 * Simple collection wrap for saving hit results context
 */
public interface Storage<Entity> {

    void addNewResult(Entity entity);
    List<Entity> getResultList();
    void clearResultList();
}
