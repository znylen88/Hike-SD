$(document).ready(function () {

    $.ajax({
        url: "https://www.hikingproject.com/data/get-trails?lat=32.7157&lon=-117.1611&maxDistance=30&maxResults=100&key=200665168-977142fe9927e4339a93ed56db19ebd9",
        method: "GET"
    }).then(function (hikesRes) {
        var dbHikes = null;
        $.get('/api/hikes')
            .then(hikes => {
                dbHikes = hikes

                $(document).on("click", "#1-3miles", renderShortHikes);
                $(document).on("click", "#3-6miles", renderMediumHikes);
                $(document).on("click", "#6-10miles", renderLongHikes);
                $(document).on("click", "#10miles", renderXLongHikes);

                function renderShortHikes(event) {
                    event.preventDefault();

                    for (var i = 0; i < hikesRes.trails.length; i++) {
                        var hikeLength = hikesRes.trails[i].length;
                        var hikeApiId = hikesRes.trails[i].id;

                        if (hikeLength <= 3) {
                            var visitedHike = dbHikes.find(h => h.hike_ID_API === hikeApiId)
                            var containerDiv = $("<div>");

                            var cardDiv = $("<div class='card horizontal' id=" + hikesRes.trails[i].id + "></div>")
                            $(cardDiv).attr("style", "display: flex; flex-direction: column;  color: rgb(34, 33, 33); background-color: white;");
                            if (visitedHike) {
                                var cardTitle = $("<p>" + hikesRes.trails[i].name + ", Hike Count: " + visitedHike.visitor_count + "</p>");
                            } else {
                                var cardTitle = $("<p>" + hikesRes.trails[i].name + ", Hike Count: " + 0 + "</p>");
                            }

                            $(cardTitle).attr("style", "margin: 20px; font-weight: bold;");
                            if (visitedHike) {
                                $(cardTitle).css('color', 'rgb(0, 77, 65)');
                            }
                            $(cardDiv).append(cardTitle);
                            $(cardTitle).addClass('card-title');

                            var cardImgDiv = $("<div class='card-image'></div>");
                            var cardImg = $("<img>");
                            $(cardImg).attr("src", hikesRes.trails[i].imgMedium);
                            $(cardImgDiv).attr("style", "display: contents; margin-left: auto; margin-right: auto; width: 50%;");
                            if (visitedHike) {
                                $(cardImg).css("border", "10px solid red;");
                            }
                            $(cardImgDiv).append(cardImg);
                            $(cardDiv).append(cardImgDiv);

                            var cardStackedDiv = $("<div class='card-stacked'></div>");

                            var cardContent = $("<div class='card-content'></div>");

                            var hikeInfo = $("<p>").text(hikesRes.trails[i].summary);
                            $(cardContent).append(hikeInfo);
                            $(cardStackedDiv).append(cardContent);
                            $(cardDiv).append(cardStackedDiv);

                            var hikedButton = $("<button class='waves-effect waves-light btn-large teal darken-4'>").text("I Hiked This!");
                            $(hikedButton).attr("style", "margin-top: 30px; margin-bottom: 30px");
                            $(cardContent).append(hikedButton);
                            $(cardStackedDiv).append(cardContent);
                            $(cardDiv).append(cardStackedDiv);
                            $(hikedButton).addClass("hike-button");

                            var hikeStars = $("<p>").text(hikesRes.trails[i].stars + " ");
                            $(hikeStars).attr("style", "font-size: 26px");
                            $(cardContent).append(hikeStars);
                            var iEl = $("<i class='material-icons'>star</i>");
                            $(hikeStars).append(iEl)
                            $(cardStackedDiv).append(cardContent);
                            $(cardDiv).append(cardStackedDiv);

                            var hikeMiles = $("<p>").text(hikesRes.trails[i].length + " Miles ");
                            var iElHike = $("<i class='material-icons'>location_on</i>");
                            $(hikeMiles).attr("style", "font-size: 26px");
                            $(hikeMiles).append(iElHike);
                            $(cardContent).append(hikeMiles);
                            $(cardStackedDiv).append(cardContent);
                            $(cardDiv).append(cardStackedDiv);

                            $(containerDiv).append(cardDiv);
                            $("#hikes").prepend(containerDiv);
                        }
                    }
                    $('#hikes').on('click', '.hike-button', function (event) {
                        var hikeId = $(event.target).closest('.card.horizontal').attr('id');

                        $.post("/api/hikes", {
                            hike: hikeId
                        }).then(
                            function (result) {
                                console.log("Updated Hike Count");
                                console.log(result);
                            }
                        );
                    });
                }
                function renderMediumHikes(event) {
                    event.preventDefault();

                    for (var i = 0; i < hikesRes.trails.length; i++) {
                        var hikeLength = hikesRes.trails[i].length;
                        var hikeApiId = hikesRes.trails[i].id;

                        if (hikeLength > 3 && hikeLength <= 6) {
                            var visitedHike = dbHikes.find(h => h.hike_ID_API === hikeApiId)
                            var containerDiv = $("<div>");

                            var cardDiv = $("<div class='card horizontal' id=" + hikesRes.trails[i].id + "></div>")
                            $(cardDiv).attr("style", "display: flex; flex-direction: column;  color: rgb(34, 33, 33); background-color: white; border: rgb(0, 77, 65) solid 25px");
                            if (visitedHike) {
                                var cardTitle = $("<p>" + hikesRes.trails[i].name + ", Hike Count: " + visitedHike.visitor_count + "</p>");
                            } else {
                                var cardTitle = $("<p>" + hikesRes.trails[i].name + ", Hike Count: " + 0 + "</p>");
                            }

                            $(cardTitle).attr("style", "margin: 20px; font-weight: bold;");
                            if (visitedHike) {
                                $(cardTitle).css('color', 'rgb(0, 77, 65)');
                            }
                            $(cardDiv).append(cardTitle);
                            $(cardTitle).addClass('card-title');

                            var cardImgDiv = $("<div class='card-image'></div>");
                            var cardImg = $("<img>");
                            $(cardImg).attr("src", hikesRes.trails[i].imgMedium);
                            $(cardImgDiv).attr("style", "display: contents; margin-left: auto; margin-right: auto; width: 50%;");
                            if (visitedHike) {
                                $(cardImg).css("border", "10px solid red;");
                            }
                            $(cardImgDiv).append(cardImg);
                            $(cardDiv).append(cardImgDiv);

                            var cardStackedDiv = $("<div class='card-stacked'></div>");

                            var cardContent = $("<div class='card-content'></div>");

                            var hikeInfo = $("<p>").text(hikesRes.trails[i].summary);
                            $(cardContent).append(hikeInfo);
                            $(cardStackedDiv).append(cardContent);
                            $(cardDiv).append(cardStackedDiv);

                            var hikedButton = $("<button class='waves-effect waves-light btn-large teal darken-4'>>").text("I Hiked This!");
                            $(hikedButton).attr("style", "margin-top: 30px; margin-bottom: 30px");
                            $(cardContent).append(hikedButton);
                            $(cardStackedDiv).append(cardContent);
                            $(cardDiv).append(cardStackedDiv);
                            $(hikedButton).addClass("hike-button");

                            var hikeStars = $("<p>").text(hikesRes.trails[i].stars + " ");
                            $(hikeStars).attr("style", "font-size: 26px");
                            $(cardContent).append(hikeStars);
                            var iEl = $("<i class='material-icons'>star</i>");
                            $(hikeStars).append(iEl)
                            $(cardStackedDiv).append(cardContent);
                            $(cardDiv).append(cardStackedDiv);

                            var hikeMiles = $("<p>").text(hikesRes.trails[i].length + " Miles ");
                            var iElHike = $("<i class='material-icons'>location_on</i>");
                            $(hikeMiles).attr("style", "font-size: 26px");
                            $(hikeMiles).append(iElHike);
                            $(cardContent).append(hikeMiles);
                            $(cardStackedDiv).append(cardContent);
                            $(cardDiv).append(cardStackedDiv);

                            $(containerDiv).append(cardDiv);
                            $("#hikes").prepend(containerDiv);
                        }
                    }
                    $('#hikes').on('click', '.hike-button', function (event) {
                        var hikeId = $(event.target).closest('.card.horizontal').attr('id');

                        $.post("/api/hikes", {
                            hike: hikeId
                        }).then(
                            function (result) {
                                console.log("Updated Hike Count");
                                console.log(result);
                            }
                        );
                    });
                }
                function renderLongHikes(event) {
                    event.preventDefault();

                    for (var i = 0; i < hikesRes.trails.length; i++) {
                        var hikeLength = hikesRes.trails[i].length;
                        var hikeApiId = hikesRes.trails[i].id;

                        if (hikeLength > 6 && hikeLength <= 10) {
                            var visitedHike = dbHikes.find(h => h.hike_ID_API === hikeApiId)
                            var containerDiv = $("<div>");

                            var cardDiv = $("<div class='card horizontal' id=" + hikesRes.trails[i].id + "></div>")
                            $(cardDiv).attr("style", "display: flex; flex-direction: column;  color: rgb(34, 33, 33); background-color: white; border: rgb(0, 77, 65) solid 25px");
                            if (visitedHike) {
                                var cardTitle = $("<p>" + hikesRes.trails[i].name + ", Hike Count: " + visitedHike.visitor_count + "</p>");
                            } else {
                                var cardTitle = $("<p>" + hikesRes.trails[i].name + ", Hike Count: " + 0 + "</p>");
                            }

                            $(cardTitle).attr("style", "margin: 20px; font-weight: bold;");
                            if (visitedHike) {
                                $(cardTitle).css('color', 'rgb(0, 77, 65)');
                            }
                            $(cardDiv).append(cardTitle);
                            $(cardTitle).addClass('card-title');

                            var cardImgDiv = $("<div class='card-image'></div>");
                            var cardImg = $("<img>");
                            $(cardImg).attr("src", hikesRes.trails[i].imgMedium);
                            $(cardImgDiv).attr("style", "display: contents; margin-left: auto; margin-right: auto; width: 50%;");
                            if (visitedHike) {
                                $(cardImg).css("border", "10px solid red;");
                            }
                            $(cardImgDiv).append(cardImg);
                            $(cardDiv).append(cardImgDiv);

                            var cardStackedDiv = $("<div class='card-stacked'></div>");

                            var cardContent = $("<div class='card-content'></div>");

                            var hikeInfo = $("<p>").text(hikesRes.trails[i].summary);
                            $(cardContent).append(hikeInfo);
                            $(cardStackedDiv).append(cardContent);
                            $(cardDiv).append(cardStackedDiv);

                            var hikedButton = $("<button class='waves-effect waves-light btn-large teal darken-4'>>").text("I Hiked This!");
                            $(hikedButton).attr("style", "margin-top: 30px; margin-bottom: 30px");
                            $(cardContent).append(hikedButton);
                            $(cardStackedDiv).append(cardContent);
                            $(cardDiv).append(cardStackedDiv);
                            $(hikedButton).addClass("hike-button");

                            var hikeStars = $("<p>").text(hikesRes.trails[i].stars + " ");
                            $(hikeStars).attr("style", "font-size: 26px");
                            $(cardContent).append(hikeStars);
                            var iEl = $("<i class='material-icons'>star</i>");
                            $(hikeStars).append(iEl)
                            $(cardStackedDiv).append(cardContent);
                            $(cardDiv).append(cardStackedDiv);

                            var hikeMiles = $("<p>").text(hikesRes.trails[i].length + " Miles ");
                            var iElHike = $("<i class='material-icons'>location_on</i>");
                            $(hikeMiles).attr("style", "font-size: 26px");
                            $(hikeMiles).append(iElHike);
                            $(cardContent).append(hikeMiles);
                            $(cardStackedDiv).append(cardContent);
                            $(cardDiv).append(cardStackedDiv);

                            $(containerDiv).append(cardDiv);
                            $("#hikes").prepend(containerDiv);
                        }
                    }
                    $('#hikes').on('click', '.hike-button', function (event) {
                        var hikeId = $(event.target).closest('.card.horizontal').attr('id');

                        $.post("/api/hikes", {
                            hike: hikeId
                        }).then(
                            function (result) {
                                console.log("Updated Hike Count");
                                console.log(result);
                            }
                        );
                    });
                }
                function renderXLongHikes(event) {
                    event.preventDefault();
                    for (var i = 0; i < hikesRes.trails.length; i++) {
                        var hikeLength = hikesRes.trails[i].length;
                        var hikeApiId = hikesRes.trails[i].id;

                        if (hikeLength > 10) {
                            var visitedHike = dbHikes.find(h => h.hike_ID_API === hikeApiId)
                            var containerDiv = $("<div>");

                            var cardDiv = $("<div class='card horizontal' id=" + hikesRes.trails[i].id + "></div>")
                            $(cardDiv).attr("style", "display: flex; flex-direction: column;  color: rgb(34, 33, 33); background-color: white; border: rgb(0, 77, 65) solid 25px");
                            if (visitedHike) {
                                var cardTitle = $("<p>" + hikesRes.trails[i].name + ", Hike Count: " + visitedHike.visitor_count + "</p>");
                            } else {
                                var cardTitle = $("<p>" + hikesRes.trails[i].name + ", Hike Count: " + 0 + "</p>");
                            }

                            $(cardTitle).attr("style", "margin: 20px; font-weight: bold;");
                            if (visitedHike) {
                                $(cardTitle).css('color', 'rgb(0, 77, 65)');
                            }
                            $(cardDiv).append(cardTitle);
                            $(cardTitle).addClass('card-title');

                            var cardImgDiv = $("<div class='card-image'></div>");
                            var cardImg = $("<img>");
                            $(cardImg).attr("src", hikesRes.trails[i].imgMedium);
                            $(cardImgDiv).attr("style", "display: contents; margin-left: auto; margin-right: auto; width: 50%;");
                            if (visitedHike) {
                                $(cardImg).css("border", "10px solid red;");
                            }
                            $(cardImgDiv).append(cardImg);
                            $(cardDiv).append(cardImgDiv);

                            var cardStackedDiv = $("<div class='card-stacked'></div>");

                            var cardContent = $("<div class='card-content'></div>");

                            var hikeInfo = $("<p>").text(hikesRes.trails[i].summary);
                            $(cardContent).append(hikeInfo);
                            $(cardStackedDiv).append(cardContent);
                            $(cardDiv).append(cardStackedDiv);

                            var hikedButton = $("<button class='waves-effect waves-light btn-large teal darken-4'>>").text("I Hiked This!");
                            $(hikedButton).attr("style", "margin-top: 30px; margin-bottom: 30px");
                            $(cardContent).append(hikedButton);
                            $(cardStackedDiv).append(cardContent);
                            $(cardDiv).append(cardStackedDiv);
                            $(hikedButton).addClass("hike-button");

                            var hikeStars = $("<p>").text(hikesRes.trails[i].stars + " ");
                            $(hikeStars).attr("style", "font-size: 26px");
                            $(cardContent).append(hikeStars);
                            var iEl = $("<i class='material-icons'>star</i>");
                            $(hikeStars).append(iEl)
                            $(cardStackedDiv).append(cardContent);
                            $(cardDiv).append(cardStackedDiv);

                            var hikeMiles = $("<p>").text(hikesRes.trails[i].length + " Miles ");
                            var iElHike = $("<i class='material-icons'>location_on</i>");
                            $(hikeMiles).attr("style", "font-size: 26px");
                            $(hikeMiles).append(iElHike);
                            $(cardContent).append(hikeMiles);
                            $(cardStackedDiv).append(cardContent);
                            $(cardDiv).append(cardStackedDiv);

                            $(containerDiv).append(cardDiv);
                            $("#hikes").prepend(containerDiv);
                        }
                    }
                    $('#hikes').on('click', '.hike-button', function (event) {
                        var hikeId = $(event.target).closest('.card.horizontal').attr('id');

                        $.post("/api/hikes", {
                            hike: hikeId
                        }).then(
                            function (result) {
                                console.log("Updated Hike Count");
                                console.log(result);
                            }
                        );
                    });
                }
            })
    })
})
