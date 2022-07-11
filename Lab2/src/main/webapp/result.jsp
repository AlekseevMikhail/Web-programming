<%@ page import="models.entities.HitResult" %>
<%
    HitResult hitResult = (HitResult) request.getAttribute("hitResult");
    if (hitResult == null) {
        request.setAttribute("error", "Hit result not found.");
        request.getRequestDispatcher("/error.jsp").forward(request, response);
        return;
    }
%>
<%@ page contentType="text/html;charset=UTF-8" language="java"%>
<html lang=en>
<head>
    <meta charset=UTF-8>
    <title>Hit result context</title>
    <link rel="stylesheet" href="web-artifacts/styles/styleResult.css">
</head>
<body>


<div class=panel>
    <div class=main-table>
        <table id=result-table>
            <tr>
                <th class="x-column">X</th>
                <th class="y-column">Y</th>
                <th class="r-column">R</th>
                <th class="hit-column">Hit result</th>
            </tr>
            <tr>
                <th class="x-column"> <%=hitResult.getxValue()%>  </th>
                <th class="y-column"><%=hitResult.getyValue()%></th>
                <th class="r-column"><%=hitResult.getrValue()%></th>
                <th class="hit-column"><%=hitResult.getHitResult()%></th>
            </tr>
        </table>
    </div>
    <div class=button>
        <form action=index.jsp>
            <input type="submit" value="back to main" class="backButton"/>
        </form>
    </div>
</div>
</body>
</html>
