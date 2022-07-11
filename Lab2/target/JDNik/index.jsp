<%@ page import="models.entities.HitResult" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD html 4.01//EN"
"http://www.w3.org/TR/html4/strict.dtd">
<HTML lang="en">
<head>
    <meta charset="UTF-8">
    <title>
        Lab 2
    </title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="icon" type="image/png" href="web-artifacts/resources/icon.png">
    <link href="web-artifacts/styles/styleStart.css" rel="stylesheet">
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
            integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
            crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
            integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
            crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
            integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
            crossorigin="anonymous"></script>
</head>
<body>

<header>
    <div class="pos-f-t">
        <div class="collapse show" id="navbarToggleExternalContent">
            <div class="bg-dark p-4">
                <h5 class="text-white h4">Alexeev Mikhail Nikolaevich & Gumerov Alan Lenartovich - P3214</h5>
                <span class="text-muted">Variant 2532</span>
            </div>
        </div>
        <nav class="navbar navbar-dark bg-dark d-flex justify-content-center">
            <button class="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent"
                    aria-expanded="true" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
        </nav>
    </div>
</header>

<div class="body-div">
<div style="padding:5%" class="main-div">
    <form method="GET" action="AreaCheckServlet" onsubmit="makeRequestByClick()">
        <div id="chart-area" onclick="chartClick(event)">
                        <svg id="image-coordinates" >
                            <rect width="300" height="300" fill="rgb(255,255,255)" stroke-width="1"
                                  stroke="rgb(0,0,0)"/>


                            <circle cx="150" cy="150" r="50" fill="rgb(0,255,255)" stroke-width="1"
                                    stroke="rgb(0,0,0)"/>
                            <polyline points="150,1 150,300 300,300 300,1" fill="rgb(255,255,255)"
                                      stroke-width="1"
                                      stroke="rgb(0,0,0)"/>
                            <polyline points="1,150 150,150 150,300 1,300" fill="rgb(255,255,255)"
                                      stroke-width="1"
                                      stroke="rgb(0,0,0)"/>

                            <rect x="150" y="50" width="100" height="100" fill="rgb(0,255,255)" stroke-width="1"
                                  stroke="rgb(50,50,50)"/>

                            <polyline points="150,200 200,150 150,150 150,90" fill="rgb(0,255,255)" stroke-width="1"
                                      stroke="rgb(0,0,0)"/>

                            <line stroke="black" x1="0" x2="300" y1="150" y2="150"></line>
                            <line stroke="black" x1="150" x2="150" y1="0" y2="300"></line>

                            <line stroke="black" x1="200" x2="200" y1="155" y2="145"></line>
                            <line stroke="black" x1="250" x2="250" y1="155" y2="145"></line>

                            <line stroke="black" x1="50" x2="50" y1="155" y2="145"></line>
                            <line stroke="black" x1="100" x2="100" y1="155" y2="145"></line>

                            <line stroke="black" x1="145" x2="155" y1="100" y2="100"></line>
                            <line stroke="black" x1="145" x2="155" y1="50" y2="50"></line>

                            <line stroke="black" x1="145" x2="155" y1="200" y2="200"></line>
                            <line stroke="black" x1="145" x2="155" y1="250" y2="250"></line>

                            <polyline points="150,0 140,15 150,5 160,15 150,0" fill="rgb(249,249,249)" stroke-width="1"
                                      stroke="rgb(0,0,0)"/>
                            <polyline points="300,150 285,140 295,150 285,160 300,150" fill="rgb(249,249,249)"
                                      stroke-width="1" stroke="rgb(0,0,0)"/>

                            <text fill="black" x="195" y="140">R/2</text>
                            <text fill="black" x="248" y="140">R</text>

                            <text fill="black" x="40" y="140">-R</text>
                            <text fill="black" x="90" y="140">-R/2</text>

                            <text fill="black" x="160" y="105">R/2</text>
                            <text fill="black" x="160" y="55">R</text>

                            <text fill="black" x="160" y="205">-R/2</text>
                            <text fill="black" x="160" y="255">-R</text>

                        </svg>
        </div>
                <p width="90px" id="x-title">Change X</p>
                <select class="form-control" id="text_input_X" name="x-group">
                    <option value="-5">-5</option>
                    <option value="-4">-4</option>
                    <option value="-3">-3</option>
                    <option value="-2">-2</option>
                    <option value="-1">-1</option>
                    <option value="0" selected>0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
                <p id="y-title">Change Y [-3;3]</p>
                <input class="form-control" id="text_input_Y" type="text" name="y-group" value="0">
                <p width="90px" id="r-title">Change R</p>
                <select class="form-control" id="text_input_r" name="r-group" onchange="updateChartOnRChange()">
                    <option value="1">1</option>
                    <option value="1.5">1.5</option>
                    <option value="2">2</option>
                    <option value="2.5">2.5</option>
                    <option value="3">3</option>
                </select>
                    <input id="submitButton" class="btn btn-block btn-dark" type="submit" value="Send" >
    </form>
</div>

<div class="table-area">
    <table id="result-table">
        <tr>
            <th id="x-column">X</th>
            <th id="y-column">Y</th>
            <th id="r-column">R</th>
            <th id="hit-column">Hit result</th>
        </tr>
        <jsp:useBean id="resultStorage" scope="session" class="models.storages.hitResultStorage.ResultStorage"/>
        <% for ( int i = resultStorage.getResultList().size()-1; i >= 0; i--) {
            HitResult points = resultStorage.getResultList().get(i);%>
        <tr>
            <td> <%=points.getxValue()%> </td>
            <td> <%=points.getyValue()%> </td>
            <td> <%=points.getrValue()%> </td>
            <td> <%=points.getHitResult()%></td>
        </tr>
        <% } %>
    </table>
</div>

</div>

<script src="web-artifacts/clientScript/script.js"></script>
<script src="web-artifacts/clientScript/chart.js"></script>
<script src="web-artifacts/clientScript/validators.js"></script>

</body>
</HTML>