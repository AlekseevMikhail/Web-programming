package servlets;
import models.entities.HitResult;
import models.storages.hitResultStorage.ResultStorage;
import models.storages.Storage;
import servicesClasses.factories.ResultEntityFactory;

import javax.ejb.EJB;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import org.apache.log4j.Logger;
import servicesClasses.factories.exceptions.DataParseException;
import servicesClasses.validators.exceptions.ValidationException;


public class AreaCheckServlet extends HttpServlet {

    private Storage<HitResult> resultStorage;

    @EJB
    private ResultEntityFactory hitInfoFactory;


    // Check request method and then redirect to servlet method
    @Override
    protected void service(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        String requestMethod = req.getMethod();

        if(requestMethod.equals("GET")){
            doGet(req,resp);
        } else {
            req.setAttribute("error", "Only GET request!");
            req.getRequestDispatcher("/error.jsp").forward(req,resp);
        }
    }

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        HttpSession currentSession = req.getSession();
        ResultStorage resultStorage = (ResultStorage)currentSession.getAttribute("resultStorage");

        if(resultStorage == null){
            resultStorage = new ResultStorage();
       }

        try {
            HitResult currentContext = hitInfoFactory.createNewHitInformationContext( req.getParameter("x-group"),
                                                                                      req.getParameter("y-group"),
                                                                                      req.getParameter("r-group"));
            resultStorage.addNewResult(currentContext);
            currentSession.setAttribute("resultStorage", resultStorage);

            req.setAttribute("hitResult", currentContext);
            req.getRequestDispatcher("/result.jsp").forward(req,resp);

        } catch (DataParseException dataParseException){
            req.setAttribute("error", "data parser. Received data invalid!");
            req.getRequestDispatcher("/error.jsp").forward(req,resp);
        } catch (ValidationException validationException){
            req.setAttribute("error", "validator. Values out of range or null");
            req.getRequestDispatcher("/error.jsp").forward(req,resp);
        } catch (NullPointerException nullPointerException){
            req.setAttribute("error", "got empty data");
            req.getRequestDispatcher("/error.jsp").forward(req,resp);
        } catch (Exception exception){
            req.setAttribute("error", " unknown error");
            req.getRequestDispatcher("/error.jsp").forward(req,resp);
        }
    }
}
