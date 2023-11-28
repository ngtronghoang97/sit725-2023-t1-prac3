const cardList = [
    {
        title: "One Piece",
        image: "Images/OnePiece.jpg",
        link: "onepiece.fandom.com",
        desciption: "One Piece Manga"
    },
    {
        title: "Doraemon",
        image: "Images/Doraemon.jpg",
        link: "doraemon.fandom.com",
        desciption: "Doraemon Manga"
    },
    {
        title: "Detective Conan",
        image: "Images/Conan.jpg",
        link: "detectiveconanworld.com",
        desciption: "Detective Conan Manga"
    }
]

const clickMe = () => {
    alert("Thanks for clicking me. Hope you have a nice day!")
}

const addCards = (items) => {
    items.forEach(item => {
        let itemToAppend = '<div class="col s4 center-align">'+
    '<div class="card medium"><div class="card-image waves-effect waves-block waves-light"><img class="activator" src="'+item.image+'">'+
    '</div><div class="card-content">'+
    '<span class="card-title activator grey-text text-darken-4">'+item.title+'<i class="material-icons right">more_vert</i></span><p><a href="#">'+item.link+'</a></p></div>'+
    '<div class="card-reveal">'+
        '<span class="card-title grey-text text-darken-4">'+item.title+'<i class="material-icons right">close</i></span>'+
        '<p class="card-text">'+item.desciption+'</p>'+
      '</div></div></div>';
      $("#card-section").append(itemToAppend)
    });
}

$(document).ready(function () {
    // $('.materialboxed').materialbox();
    $('#clickMeButton').click(() => {
        clickMe();
    })
    addCards(cardList);
    $('.modal').modal();
});