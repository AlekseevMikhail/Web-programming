package model;


import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;

import static java.lang.Math.pow;
import static java.lang.Math.sqrt;

@Data
@Entity
@Table(name = "results")
@NamedQueries({
    @NamedQuery(name = "findAll", query = "SELECT e FROM Result e"),
    @NamedQuery(name = "deleteAll", query = "DELETE FROM Result e")})
public class Result implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Double x;
    private Double y;
    private Double r;
    private boolean result;

    public Result(){}


    public void setX(Double x) {
        if (x!=null && x>=-3 && x<= 4) {
            System.out.println(x);
            this.x = x;
        }
    }

    public Result(Double x, Double y, Double r){
        this.x=x;
        this.y=y;
        this.r=r;
    }

    public Double getR() {
        return r;
    }

    public void checkTheArea() {
        if (x > 0 && y < 0) {
            this.result = x * x + y * y <= r * r;
        } else if (x < 0 && y < 0) {
            this.result = y >= -sqrt(3) * x - r;
        } else if (x < 0 && y > 0) {
            this.result = x >= -r && y <= r / 2;
        } else if (x == 0) {
            this.result = y >= -r && y <= r;
        } else if (y == 0) {
            this.result = x >= -r && x <= r / 2;
        } else {
            this.result = false;
        }
    }
}
