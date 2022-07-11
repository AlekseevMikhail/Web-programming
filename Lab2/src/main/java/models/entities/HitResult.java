package models.entities;

public final class HitResult {
     private final Double xValue;
     private final Double yValue;
     private final Double rValue;
     private final String hitResult;

    public HitResult(double xValue, double yValue, double rValue , String hitResult) {
        this.xValue = xValue;
        this.yValue = yValue;
        this.rValue = rValue;
        this.hitResult = hitResult;
    }

    public double getxValue() {
        return xValue;
    }

    public double getyValue() {
        return yValue;
    }

    public double getrValue() {
        return rValue;
    }

    public String getHitResult() {
        return hitResult;
    }

    @Override
    public String toString() {
        return "HitInformationContext{" +
                "xValue=" + xValue +
                ", yValue=" + yValue +
                ", rValue=" + rValue +
                ", hitResult='" + hitResult + '\'' +
                '}';
    }
}
