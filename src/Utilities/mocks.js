import partnerPhoto from "../assets/Photos/talking.png"
import employeePhoto from "../assets/Photos/employee.png"
import cartPhoto from "../assets/Photos/cart.avif"
import handsIcon from "../assets/Photos/hands.svg"
import clapIcon from "../assets/Photos/clap.svg"

export const TILEINFOS = {

    partner : {
        photo : partnerPhoto,
        alternativePhotoText : "Opieka nad klientem",
        alternativeIconText : "Opieka",
        icon : handsIcon,
        description : "Przykładowy atut pracy nr 1",
        text: "Vestibulum ut sem non lorem gravida ullamcorper. Aliquam nec mauris ligula. Nunc urna libero, consectetur quis elit id, venenatis semper dolor. Etiam convallis leo justo, sed venenatis urna fermentum non. Maecenas quis viverra ligula. Nullam et justo mollis, tincidunt nulla sed, dapibus nunc. Vivamus sit amet augue ac lectus sagittis viverra sed id arcu. Aliquam at neque finibus, finibus sapien sit amet, scelerisque erat",
        left: true
    },
    employee : {
        photo : employeePhoto,
        alternativePhotoText : "Opieka nad klientem",
        alternativeIconText : "Opieka",
        icon : clapIcon,
        description : "Tutaj będzie kolejny atut dla wyboru tej firmy",
        text: "Aliquam nec mauris ligula. Nunc urna libero, consectetur quis elit id, venenatis semper dolor. Etiam convallis leo justo, sed venenatis urna fermentum non. Mauris vestibulum ante at vehicula luctus. Suspendisse pulvinar dui est, vitae congue enim gravida congue. Aenean luctus tempus sodales. Suspendisse justo dui, porttitor in consequat vitae, venenatis eu dui. Maecenas quis viverra ligula. Nullam et justo mollis, tincidunt nulla sed, dapibus nunc. Vivamus sit amet augue ac lectus sagittis viverra sed id arcu.",
        left: false
    },
    makro : {
        photo : cartPhoto,
        alternativePhotoText : "Oferta",
        alternativeIconText : "Oferta ikona",
        description : "Trzeci, wyjątkowy atut, ale nie ostatni",
        text: "Atuty napisane są w sposób, który umozliwi bardzo proste dokonywanie zmian w ilości atutów i ich kontencie. Aby dodać atut wystarczy zmodyfikować jeden plik. Kod sam zadba o to, aby właściwie wyświetlić nowe dane.",
        left: true,
        makro: true
    }
}

export const QUESTIONS = [
    {
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
        answer : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tincidunt mi ut tellus congue rutrum. Vestibulum ut sem non lorem gravida ullamcorper. Aliquam nec mauris ligula. Nunc urna libero, consectetur quis elit id, venenatis semper dolor. Etiam convallis leo justo, sed venenatis urna fermentum non. Mauris vestibulum ante at vehicula luctus. Suspendisse pulvinar dui est, vitae congue enim gravida congue. Aenean luctus tempus sodales. Praesent placerat in sem id condimentum. Suspendisse justo dui, porttitor in consequat vitae, venenatis eu dui. Maecenas quis viverra ligula. Nullam et justo mollis, tincidunt nulla sed, dapibus nunc. Vivamus sit amet augue ac lectus sagittis viverra sed id arcu. Aliquam at neque finibus, finibus sapien sit amet, scelerisque erat."
    },
    {
        title: "Nam tincidunt mi ut tellus congue?",
        answer : "Consectetur adipiscing elit. Nam tincidunt mi ut tellus congue rutrum. Vestibulum ut sem non lorem gravida ullamcorper. Aliquam nec mauris ligula. Nunc urna libero, consectetur quis elit id, venenatis semper dolor. Etiam convallis leo justo, sed venenatis urna fermentum non. Mauris vestibulum ante at vehicula luctus. Suspendisse pulvinar dui est, vitae congue enim gravida congue. Aenean luctus tempus sodales. Praesent placerat in sem id condimentum. Suspendisse justo dui, porttitor in consequat vitae, venenatis eu dui. Maecenas quis viverra ligula. Nullam et justo mollis, tincidunt nulla sed, dapibus nunc. Vivamus sit amet augue ac lectus sagittis viverra sed id arcu. Aliquam at neque finibus, finibus sapien sit amet, scelerisque erat."
    },
    {
        title: "Mauris vestibulum ante at vehicula luctus?",
        answer : " Vestibulum ut sem non lorem gravida ullamcorper. Aliquam nec mauris ligula. Nunc urna libero, consectetur quis elit id, venenatis semper dolor. Etiam convallis leo justo, sed venenatis urna fermentum non. Mauris vestibulum ante at vehicula luctus. Suspendisse pulvinar dui est, vitae congue enim gravida congue. Aenean luctus tempus sodales. Praesent placerat in sem id condimentum. Suspendisse justo dui, porttitor in consequat vitae, venenatis eu dui. Maecenas quis viverra ligula. Nullam et justo mollis, tincidunt nulla sed, dapibus nunc. Vivamus sit amet augue ac lectus sagittis viverra sed id arcu. Aliquam at neque finibus, finibus sapien sit amet, scelerisque erat."
    },
    {
        title: "Czy dodawanie FAQ jest dynamiczne?",
        answer : "Staram się, aby kazdy element na stronie, który moze mieć charakter dynamiczny, nie był hardkodowany, ale raczej pakowany w odpowiednie zestawy informacji, przez które zachodzi iteracja i dynamiczne dodawanie odpowiednich styli do kazdego z nich i renderowanie go na stronę. Takie podejście znacznie przyspiesza pracę programisty, poniewaz kod jest reuzywalny. Łatwiej jest napisać 20 wierszy kodu dla wszystkich FAQ, niz po 10 dla kazdego z osobna :)"
    }
  ]