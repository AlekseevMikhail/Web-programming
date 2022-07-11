package servicesClasses.checkers;

import javax.ejb.Stateless;


@Stateless
public class HitCheckerImpl implements HitChecker {

    @Override
    public String checkHit(Double xValue, Double yValue, Double rValue) {
        if (((xValue <= rValue) && (xValue >=0 )) && ((yValue <= rValue) && (yValue >=0))) {
            return "HIT";
        }

        if((xValue >= 0) && (yValue <= 0) && (yValue >= xValue/2 - rValue/2)){
            return "HIT";
        }

        if((Math.pow(xValue,2) + Math.pow(yValue,2)  <=  Math.pow(rValue/2,2)) && (xValue <= 0 ) && (xValue >= -rValue/2) && (yValue >= 0 ) && (yValue <= rValue/2)) {
            return "HIT";
        }
        return "MISS";
    }
}
