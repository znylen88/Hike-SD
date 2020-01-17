$(document).ready(function () {
    $.ajax({
        url: "https://www.hikingproject.com/data/get-trails?lat=32.7157&lon=-117.1611&maxDistance=30&maxResults=100&key=200665168-977142fe9927e4339a93ed56db19ebd9",
        method: "GET"
    }).then(function (hikesRes) {
        for (var i = 0; i < hikesRes.trails.length; i++) {
            console.log("ID:" + hikesRes.trails[i].id);
            console.log("Name:" + hikesRes.trails[i].name);
            console.log("Stars:" + hikesRes.trails[i].stars);
            console.log("Summary:" + hikesRes.trails[i].summary);
            console.log("Miles:" + hikesRes.trails[i].length);
            console.log("Location:" + hikesRes.trails[i].location);
            console.log(hikesRes.trails[i].imgMedium + "\n");
        }
        $(document).on("click", "#1-3miles", renderShortHikes);
        $(document).on("click", "#3-6miles", renderMediumHikes);
        $(document).on("click", "#6-10miles", renderLongHikes);
        $(document).on("click", "#10miles", renderXLongHikes);
        function renderShortHikes(event) {
            event.preventDefault();
            for (var i = 0; i < hikesRes.trails.length; i++) {
                var hikeLength = hikesRes.trails[i].length;
                if (hikeLength <= 3) {
                    console.log(hikesRes.trails[i]);
                    var containerDiv = $("<div>");
                    var cardDiv = $("<div class='card horizontal'></div>")
                    $(cardDiv).attr("style", "display: flex; flex-direction: column;  color: rgb(34, 33, 33); background-color: white; border: rgb(0, 77, 65) solid 25px");
                    var cardTitle = $("<p>").text(hikesRes.trails[i].name);
                    $(cardTitle).attr("style", "margin: 20px; font-size: 30px; font-weight: bold;");
                    $(cardDiv).append(cardTitle);
                    $(cardTitle).addClass('card-title');
                    var cardImgDiv = $("<div class='card-image'></div>");
                    var cardImg = $("<img>");
                    $(cardImg).attr("src", hikesRes.trails[i].imgMedium);
                    $(cardImgDiv).attr("style", "display: contents; margin-left: auto; margin-right: auto; width: 50%;");
                    $(cardImgDiv).append(cardImg);
                    $(cardDiv).append(cardImgDiv);
                    var cardStackedDiv = $("<div class='card-stacked'></div>");
                    var cardContent = $("<div class='card-content'></div>");
                    var parkInfo = $("<p>").text(hikesRes.trails[i].summary);
                    $(cardContent).append(parkInfo);
                    $(cardStackedDiv).append(cardContent);
                    $(cardDiv).append(cardStackedDiv);
                    var hikedButton = $("<button>").text("I Hiked This!");
                    $(hikedButton).attr("style", "margin: 50px;");
                    $(cardContent).append(hikedButton);
                    $(cardStackedDiv).append(cardContent);
                    $(cardDiv).append(cardStackedDiv);
                    $(hikedButton).addClass("hike-button");
                    var hikeMiles = $("<p>").text(hikesRes.trails[i].length + " Miles");
                    var iElHike = $("<i class='material-icons'>location_on</i>");
                    $(hikeMiles).attr("style", "font-size: 26px");
                    $(hikeMiles).append(iElHike);
                    $(cardContent).append(hikeMiles);
                    $(cardStackedDiv).append(cardContent);
                    $(cardDiv).append(cardStackedDiv);
                    var hikeStars = $("<p>").text(hikesRes.trails[i].stars + "");
                    $(hikeStars).attr("style", "font-size: 26px");
                    $(cardContent).append(hikeStars);
                    var iEl = $("<i class='material-icons'>star</i>");
                    $(hikeStars).append(iEl)
                    $(cardStackedDiv).append(cardContent);
                    $(cardDiv).append(cardStackedDiv);
                    // console.log(cardBtn);
                    $(containerDiv).append(cardDiv);
                    $("#hikes").prepend(containerDiv);
                }
            }
            $('#hikes').on('click', '.hike-button', function (event) {
                var hikeName = $(event.target).closest('.card.horizontal').find('.card-title').text();
                console.log('Hike-Name', hikeName);
                //post to route
                //update database
            });
        }
        function renderMediumHikes(event) {
            event.preventDefault();
            for (var i = 0; i < hikesRes.trails.length; i++) {
                var hikeLength = hikesRes.trails[i].length;
                if (hikeLength > 3 && hikeLength <= 6) {
                    console.log(hikesRes.trails[i]);
                    var containerDiv = $("<div>");
                    var cardDiv = $("<div class='card horizontal'></div>")
                    $(cardDiv).attr("style", "display: flex; flex-direction: column;  color: rgb(34, 33, 33); background-color: white; border: rgb(0, 77, 65) solid 25px");
                    var cardTitle = $("<p>").text(hikesRes.trails[i].name);
                    $(cardDiv).append(cardTitle);
                    var cardImgDiv = $("<div class='card-image'></div>");
                    var cardImg = $("<img>");
                    $(cardImg).attr("src", hikesRes.trails[i].imgMedium);
                    $(cardImgDiv).attr("style", "display: contents; margin-left: auto; margin-right: auto; width: 50%;");
                    $(cardImgDiv).append(cardImg);
                    $(cardDiv).append(cardImgDiv);
                    var cardStackedDiv = $("<div class='card-stacked'></div>");
                    var cardContent = $("<div class='card-content'></div>");
                    var parkInfo = $("<p>").text(hikesRes.trails[i].summary);
                    $(cardContent).append(parkInfo);
                    $(cardStackedDiv).append(cardContent);
                    $(cardDiv).append(cardStackedDiv);
                    var hikeMiles = $("<p>").text(hikesRes.trails[i].length + " Miles");
                    $(cardContent).append(hikeMiles);
                    $(cardStackedDiv).append(cardContent);
                    $(cardDiv).append(cardStackedDiv);
                    var hikeStars = $("<p>").text(hikesRes.trails[i].stars + " Stars");
                    $(cardContent).append(hikeStars);
                    $(cardStackedDiv).append(cardContent);
                    $(cardDiv).append(cardStackedDiv);
                    // console.log(cardBtn);
                    $(containerDiv).append(cardDiv);
                    $("#hikes").prepend(containerDiv);
                }
            }
        }
        function renderLongHikes(event) {
            event.preventDefault();
            for (var i = 0; i < hikesRes.trails.length; i++) {
                var hikeLength = hikesRes.trails[i].length;
                if (hikeLength > 6 && hikeLength <= 10) {
                    console.log(hikesRes.trails[i]);
                    var containerDiv = $("<div>");
                    var cardDiv = $("<div class='card horizontal'></div>")
                    $(cardDiv).attr("style", "display: flex; flex-direction: column;  color: rgb(34, 33, 33); background-color: white; border: rgb(0, 77, 65) solid 25px");
                    var cardTitle = $("<p>").text(hikesRes.trails[i].name);
                    $(cardDiv).append(cardTitle);
                    var cardImgDiv = $("<div class='card-image'></div>");
                    var cardImg = $("<img>");
                    $(cardImg).attr("src", hikesRes.trails[i].imgMedium);
                    $(cardImgDiv).attr("style", "display: contents; margin-left: auto; margin-right: auto; width: 50%;");
                    $(cardImgDiv).append(cardImg);
                    $(cardDiv).append(cardImgDiv);
                    var cardStackedDiv = $("<div class='card-stacked'></div>");
                    var cardContent = $("<div class='card-content'></div>");
                    var parkInfo = $("<p>").text(hikesRes.trails[i].summary);
                    $(cardContent).append(parkInfo);
                    $(cardStackedDiv).append(cardContent);
                    $(cardDiv).append(cardStackedDiv);
                    var hikeMiles = $("<p>").text(hikesRes.trails[i].length + " Miles");
                    $(cardContent).append(hikeMiles);
                    $(cardStackedDiv).append(cardContent);
                    $(cardDiv).append(cardStackedDiv);
                    var hikeStars = $("<p>").text(hikesRes.trails[i].stars + " Stars");
                    $(cardContent).append(hikeStars);
                    $(cardStackedDiv).append(cardContent);
                    $(cardDiv).append(cardStackedDiv);
                    // console.log(cardBtn);
                    $(containerDiv).append(cardDiv);
                    $("#hikes").prepend(containerDiv);
                }
            }
        }
        function renderXLongHikes(event) {
            event.preventDefault();
            for (var i = 0; i < hikesRes.trails.length; i++) {
                var hikeLength = hikesRes.trails[i].length;
                if (hikeLength > 10) {
                    console.log(hikesRes.trails[i]);
                    var containerDiv = $("<div>");
                    var cardDiv = $("<div class='card horizontal'></div>")
                    $(cardDiv).attr("style", "display: flex; flex-direction: column;  color: rgb(34, 33, 33); background-color: white; border: rgb(0, 77, 65) solid 25px");
                    var cardTitle = $("<p>").text(hikesRes.trails[i].name);
                    $(cardDiv).append(cardTitle);
                    var cardImgDiv = $("<div class='card-image'></div>");
                    var cardImg = $("<img>");
                    $(cardImg).attr("src", hikesRes.trails[i].imgMedium);
                    $(cardImgDiv).attr("style", "display: contents; margin-left: auto; margin-right: auto; width: 50%;");
                    $(cardImgDiv).append(cardImg);
                    $(cardDiv).append(cardImgDiv);
                    var cardStackedDiv = $("<div class='card-stacked'></div>");
                    var cardContent = $("<div class='card-content'></div>");
                    var parkInfo = $("<p>").text(hikesRes.trails[i].summary);
                    $(cardContent).append(parkInfo);
                    $(cardStackedDiv).append(cardContent);
                    $(cardDiv).append(cardStackedDiv);
                    var hikeMiles = $("<p>").text(hikesRes.trails[i].length + " Miles");
                    $(cardContent).append(hikeMiles);
                    $(cardStackedDiv).append(cardContent);
                    $(cardDiv).append(cardStackedDiv);
                    var hikeStars = $("<p>").text(hikesRes.trails[i].stars + " Stars");
                    $(cardContent).append(hikeStars);
                    $(cardStackedDiv).append(cardContent);
                    $(cardDiv).append(cardStackedDiv);
                    // console.log(cardBtn);
                    $(containerDiv).append(cardDiv);
                    $("#hikes").prepend(containerDiv);
                }
            }
        }
    })
})


