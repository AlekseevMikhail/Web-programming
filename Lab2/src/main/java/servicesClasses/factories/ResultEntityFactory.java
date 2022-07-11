package servicesClasses.factories;

import models.entities.HitResult;
import servicesClasses.factories.exceptions.DataParseException;
import servicesClasses.validators.exceptions.ValidationException;

public interface ResultEntityFactory {

    public HitResult createNewHitInformationContext(String xValue,
                                                    String yValue,
                                                    String rValue) throws DataParseException, ValidationException;
}
