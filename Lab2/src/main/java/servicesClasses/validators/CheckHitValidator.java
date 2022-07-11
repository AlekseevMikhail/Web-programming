package servicesClasses.validators;

import servicesClasses.validators.exceptions.ValidationException;

public interface CheckHitValidator {
    void checkValues(Double xValue, Double yValue, Double rValue) throws ValidationException;
}
