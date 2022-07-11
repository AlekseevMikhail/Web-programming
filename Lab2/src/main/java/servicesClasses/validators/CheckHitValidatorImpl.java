package servicesClasses.validators;

import org.apache.log4j.Logger;
import servicesClasses.validators.exceptions.ValidationException;

import javax.ejb.Stateless;
import java.util.Arrays;
import java.util.List;

@Stateless
public class CheckHitValidatorImpl implements CheckHitValidator {

    private final List<Double> rValues =
            Arrays.asList(1.0, 1.5, 2.0, 2.5, 3.0);

    @Override
    public void checkValues(Double xValue, Double yValue, Double rValue) throws ValidationException {
        checkXValue(xValue);
        checkYValue(yValue);
        checkRValue(rValue);
    }

    private void checkXValue(Double xValue) throws ValidationException {
        if (xValue == null) {
            throw new ValidationException();
        }

        if (xValue > 5 || xValue < -3) {
            throw new ValidationException();
        }
    }

    private void checkYValue(Double yValue) throws ValidationException {
        if (yValue == null) {
            throw new ValidationException();
        }

        if (yValue < -5 || yValue > 5) {
            throw new ValidationException();
        }
    }

    private void checkRValue(Double rValue) throws ValidationException {
        if (rValue == null) {
            throw new ValidationException();
        }

        if (!rValues.contains(rValue)) {
            throw new ValidationException();
        }
    }
}
