package servlets;

import models.storages.hitResultStorage.ResultStorage;
import org.apache.log4j.Logger;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class ControllerServlet extends HttpServlet {

    @Override
    protected void service(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        String requestMethod = req.getMethod();
        System.out.println(requestMethod);
        if(requestMethod.equals("GET")){
            doGet(req,resp);
        } else {
            req.setAttribute("error", "Only GET request!");
            req.getRequestDispatcher("/error.jsp").forward(req,resp);
        }
    }

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        if(req.getParameter("r-group") == null) {
            if(req.getAttribute("resultStorage") == null){
                req.setAttribute("resultStorage", new ResultStorage());
            }
            req.getRequestDispatcher("/index.jsp").forward(req,resp);
            return;
        }
        req.getRequestDispatcher("/AreaCheckServlet").forward(req,resp);
    }
}
