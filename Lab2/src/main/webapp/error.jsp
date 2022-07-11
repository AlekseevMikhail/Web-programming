<% String errorMassage = (String) request.getAttribute("error"); %>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Title</title>
    <link rel="stylesheet" href="web-artifacts/styles/styleError.css">
</head>
<body>
    <div class="title">
        <p>ERROR PAGE</p>
    </div>
    <div class="main">
        <p class="caused-info">Caused by  <%=errorMassage%></p>
    </div>
    <form action="index.jsp" method="get" class="back-form">
        <input type="submit" class="goToMain" value="Too main page">
    </form>

</body>
</html>
