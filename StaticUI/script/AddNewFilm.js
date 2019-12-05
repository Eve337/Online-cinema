let $formCreate = $(".formAddNewFilm"),
    $objLocalStorage = JSON.parse(localStorage.getItem("filmsList")),
    $buttonAdd = $(".createNewFilmCart");
    $newCart = {};
    

    $(".createNewFilmCart").on("click", function(){
        let $title = ($(".nameOfNewFilm").val()),
            $price = ($(".ticketPrice").val()),
            $startDate = ($(".StarFilmDate").val()),
            $endDate = ($(".EndFilmDate").val()),
            $filmImg = ($(".imgUpload").val()),
            $newFilmDescription = ($(".filmDescription").val()),
            $tags = ($(".filmTags").val()),
            $selectSection = ($(".selectSection").val()),
            $newId = Object.keys($objLocalStorage).length + 1,
            $newCart = {
                "title" : $title,
                "ticketPrice" : $price,
                "startDate" : $startDate,
                "endDate" : $endDate,
                "img" : $filmImg,
                "description" : $newFilmDescription, 
                "tags" : $tags,
                "section" : $selectSection
            };
            
            $objLocalStorage[$newId] = $newCart;
            
            localStorage.setItem("filmsList",JSON.stringify($objLocalStorage));
    });

    //Дописать в модал вкладку section ++
    //Написать функцию refresh ?
    //Можно выпилить description на главке и запихать его в buypage
    //Прикрутить поведение смены имени фамилии в профиле +
    //Прикрутить скрипт переход на на buypage с фильмом
    //Скрипт выбора и покупки
    //Выход из пользователя +