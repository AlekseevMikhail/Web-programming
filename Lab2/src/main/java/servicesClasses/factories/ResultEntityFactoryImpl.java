package servicesClasses.factories;

import models.entities.HitResult;

import org.apache.log4j.Logger;
import servicesClasses.checkers.HitChecker;
import servicesClasses.factories.exceptions.DataParseException;
import servicesClasses.validators.CheckHitValidator;
import servicesClasses.validators.exceptions.ValidationException;

import javax.ejb.EJB;
import javax.ejb.Stateless;

@Stateless
public class ResultEntityFactoryImpl implements ResultEntityFactory {
    @EJB
    private HitChecker hitChecker;
    @EJB
    private CheckHitValidator checkHitValidator;

    @Override
    public HitResult createNewHitInformationContext(String xValue, String yValue, String rValue) throws DataParseException, ValidationException {

        Double parsedXValue;
        Double parsedYValue;
        Double parsedRValue;

        try {
             parsedXValue = Double.parseDouble(xValue);
             parsedYValue = Double.parseDouble(yValue);
             parsedRValue = Double.parseDouble(rValue);
        } catch (NumberFormatException exception) {
            throw new DataParseException();
        }
        checkHitValidator.checkValues(parsedXValue,parsedYValue,parsedRValue);

        String hitResult = hitChecker.checkHit(parsedXValue,parsedYValue,parsedRValue);
        return new HitResult(parsedXValue,parsedYValue,parsedRValue,hitResult);

    }
}
