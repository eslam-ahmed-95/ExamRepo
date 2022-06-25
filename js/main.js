var allMove = [];
var resMove = [];
var searchMoveRes = [];
var moveSearch = document.querySelector('.move-input');
// Request URL: https://api.themoviedb.org/3/search/movie?query=k&api_key=eba8b9a7199efdcb0ca1f96879b83c44&language=en-US&include_adult=false


async function searchMove(keySearch) {
    var allMove = await fetch(`https://api.themoviedb.org/3/search/movie?query=${keySearch}&api_key=d08dbe8b584e02e4b2d29adbdfe70147&language=en-US&include_adult=false`)
    var movies = await allMove.json();
    searchMoveRes = await movies.results
    displayAllMovies(searchMoveRes)

}

moveSearch.addEventListener('keyup', function (e) {
    searchMove(e.target.value);
})

function displayAllMovies(movies) {

    var content = "";

    for (let index = 0; index < movies.length; index++) {
        content += `
            <div class="col-md-4 py-3 ">
            <div class="item poster ">
                <div>
                    <img class="w-100 image " src="https://image.tmdb.org/t/p/w500/${movies[index].poster_path}" alt="">
                </div>
                <div class="text-center poster-content">
                    <h3> ${movies[index].title}</h3>
                    <p>
                    ${movies[index].overview}
                    </p>
                    <h6> rate:   ${movies[index].vote_average}</h6>
                    <h6> ${movies[index].release_date}</h6>
                </div>
    
            </div>
    
        </div>
            `


    }
    document.querySelector('.cards').innerHTML = content;
}




async function getallMoveByCategory(category) {

    var url;
    if (category == 'trending') {
        url = ` https://api.themoviedb.org/3/${category}/all/day?api_key=eba8b9a7199efdcb0ca1f96879b83c44        `

    } else {
        url = `https://api.themoviedb.org/3/movie/${category}?api_key=eba8b9a7199efdcb0ca1f96879b83c44`
    }

    var allMove = await fetch(url)
    movies = await allMove.json();
    searchMoveRes = movies.results
    displayAllMovies(searchMoveRes)

}

getallMoveByCategory("now_playing");

var selectedMove = [];

var searchBtn = document.querySelector(".search-input");
searchBtn.addEventListener("keyup", function (e) {
    var inputSearch = e.target.value;
    selectedMove = searchMoveRes.filter(function (elem) {
        if (elem && elem.title) {
            return (elem.title.includes(inputSearch))
        }



    });
    displayAllMovies(selectedMove);

})


function openNav() {
    var exit = false;
    var clasess = document.querySelector(".my_bars").classList;

    for (let index = 0; index < clasess.length; index++) {
        if (clasess[index] == "fa-bars") {
            exit = true;
            break


        }

    }
    if (exit) {
        fOpen()
    } else {
        closeNav()
    }




}
function fOpen() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";

    document.querySelector(".web-site-link div").style.display = "block";

    document.querySelector(".my_bars").classList.remove("fa-bars");
    document.querySelector(".my_bars").classList.add("fa-xmark");

    document.querySelector(".link1").classList.add("move-link1")
    document.querySelector(".link1").classList.remove("link-top")

    document.querySelector(".link2").classList.add("move-link2")
    document.querySelector(".link2").classList.remove("link-top")

    document.querySelector(".link3").classList.add("move-link3")
    document.querySelector(".link3").classList.remove("link-top")

    document.querySelector(".link4").classList.add("move-link4")
    document.querySelector(".link4").classList.remove("link-top")

    document.querySelector(".link5").classList.add("move-link5")
    document.querySelector(".link5").classList.remove("link-top")

    document.querySelector(".link7").classList.add("move-link7")
    document.querySelector(".link7").classList.remove("link-top")






}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.querySelector(".web-site-link div").style.display = "none";


    document.querySelector(".my_bars").classList.add("fa-bars");
    document.querySelector(".my_bars").classList.remove("fa-xmark");

    document.querySelector(".link1").classList.remove("move-link1")
    document.querySelector(".link1").classList.add("link-top")

    document.querySelector(".link2").classList.remove("move-link2")
    document.querySelector(".link2").classList.add("link-top")

    document.querySelector(".link3").classList.remove("move-link3")
    document.querySelector(".link3").classList.add("link-top")

    document.querySelector(".link4").classList.remove("move-link4")
    document.querySelector(".link4").classList.add("link-top")

    document.querySelector(".link5").classList.remove("move-link5")
    document.querySelector(".link5").classList.add("link-top")

    document.querySelector(".link7").classList.remove("move-link7")
    document.querySelector(".link7").classList.add("link-top")

}

function validateName(value) {
    debugger
    var regex = /^[a-zA-Z ]{2,30}$/;

    return regex.test(value);
}

const validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};
const validatePassword = (password) => {
    return password.match(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/);

};

function validatePhone(phone) {

    var regex = /^01[0-2]\d{8,10}$/;

    return regex.test(phone);
}

var nameVa = document.querySelector('.input-name');

nameVa.addEventListener('keyup', function (e) {
    let validName = validateName(e.target.value);
    if (validName) {
        $(".name-validate").hide(500);
    } else {
        $(".name-validate").show(500);
    }

})

var emailVa = document.querySelector('.input-email');

emailVa.addEventListener('keyup', function (e) {
    let validEmail = validateEmail(e.target.value);
    if (validEmail) {
        $(".email-validate").hide(500);
    } else {
        $(".email-validate").show(500);
    }

})
var passwordlVa = document.querySelector('.input-password');

passwordlVa.addEventListener('keyup', function (e) {
    var validPassword = validatePassword(e.target.value);
    if (validPassword) {
        $(".password-validate").hide(500);
    } else {
        $(".password-validate").show(500);
    }

})


var phoneVa = document.querySelector('.input-phone');

phoneVa.addEventListener('keyup', function (e) {
    let validPhone = validatePhone(e.target.value);
    if (validPhone) {
        $(".phone-validate").hide(500);
    } else {
        $(".phone-validate").show(500);
    }

})

var ageVa = document.querySelector('.input-age');

ageVa.addEventListener('keyup', function (e) {
    let validAge = e.target.value;
    if (validAge >= 5 && validAge <= 100) {
        $(".age-validate").hide(500);
    } else {
        $(".age-validate").show(500);
    }

})

var repassVa = document.querySelector('.input-repassword');

repassVa.addEventListener('keyup', function (e) {

    var PasswordValue = $('.input-password')[0].value;
    let validRepass = e.target.value;
    if (validRepass && PasswordValue && validRepass == PasswordValue) {
        $(".repass-validate").hide(500);
    } else {
        $(".repass-validate").show(500);
    }

})