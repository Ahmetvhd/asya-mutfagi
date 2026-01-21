let hepsi = document.querySelector("#hepsi")
let kore = document.querySelector("#kore")
let japon = document.querySelector("#japon")
let cin = document.querySelector("#cin")
let btns = document.querySelectorAll(".btn-group>button")
let liste = document.querySelector("#liste")
let menu = [
    {
        id: 1,
        ad:"Tteokbokki",
        kategori:"kore",
        fiyat:10.99,
        aciklama:"Spicy rice cakes, serving with fish cake.",
        image: "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg"
    },
    {
        id: 2,
        ad:"Bibimbap",
        kategori:"kore",
        fiyat:8.99,
        aciklama:"Boiling vegetables, serving with special hot sauce",
        image:"https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg"
    },
    {
        id: 3,
        ad:"Jajangmyeon",
        kategori:"kore",
        fiyat:15.99,
        aciklama:"Black bean sauce noodle, serving with green onion",
        image:"https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg"
    },
    {
        id: 4,
        ad:"Chicken Ramen",
        kategori:"japon",
        fiyat:7.99,
        aciklama:"Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg.",
        image:"https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg"
    },
    {
        id: 5,
        ad:"Onigiri",
        kategori:"japon",
        fiyat:9.99,
        aciklama:"Rice Sandwich, serving with soy sauce",
        image:"https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg"
    },
    {
        id: 6,
        ad:"Doroyaki",
        kategori:"japon",
        fiyat:3.99,
        aciklama:"Red bean paste dessert, serving with honey.",
        image:"https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg"
    },
    {
        id: 7,
        ad:"Dan Dan Mian",
        kategori:"cin",
        fiyat:5.99,
        aciklama:"Dan dan noodle, serving with green onion",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhw6IAhAz4AwfSSZRDSzHeEjt_G4eSOGEBGg&s"
    },
    {
        id: 8,
        ad:"Yangzhou Fried Rice",
        kategori:"cin",
        fiyat:12.99,
        aciklama:"Yangzhou style fried rice, serving with bean and pickles",
        image:"https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg"
    },
    {
        id: 9,
        ad:"Ma Yi Shang Shu",
        kategori:"cin",
        fiyat:12.99,
        aciklama:"Hot pepper sauce noodle, serving with soy bean and onion",
        image:"https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg"
    },

]

function listeAlEkranaBas(yemekListesi){
    liste.innerHTML = ""

    yemekListesi.forEach(yemek => {
        // başlık bölümü
        let menuItem = document.createElement("div")
        let baslik = document.createElement("h3")
        let para = document.createElement("p")
        let paragraf = document.createElement("p")
        let img = document.createElement("img")
        let menuCard = document.createElement("div")
        let cardHeader = document.createElement("div")
        let hr = document.createElement("hr")

        // İÇERİK YAZDIMA BÖLÜMÜ

        // başlık
        baslik.innerHTML = yemek.ad;
        // menuCard
        menuCard.classList.add("menu-card")
        // image
        img.src = yemek.image
        img.alt = yemek.ad
        img.style.width = "150px"
        img.style.height = "200px"
        img.style.border = "5px solid #596275"
        img.style.borderRadius = "10px"
        // para
        para.innerHTML = yemek.fiyat
        paragraf.innerHTML = yemek.aciklama
        paragraf.style.color = "#596275"
        // cardFooter
        cardHeader.classList.add("card-header")
        // menuItem
        menuItem.classList.add("menu-item")
        // hr
        hr.classList.add("hr")



        // liste içerisine ekleme
        liste.appendChild(menuItem);
        menuItem.appendChild(img);
        menuItem.appendChild(menuCard);
        menuCard.appendChild(cardHeader);
        cardHeader.appendChild(baslik);
        cardHeader.appendChild(para);
        menuCard.appendChild(hr)
        menuCard.appendChild(paragraf);

    })
}

hepsi.addEventListener("click", () => {
    listeAlEkranaBas(menu)

})

kore.addEventListener("click", () => {
    let koreMenu = menu.filter(yemek => yemek.kategori === "kore")
    
    listeAlEkranaBas(koreMenu)
})

japon.addEventListener("click", () => {
    let japonMenu = menu.filter(yemek => yemek.kategori === "japon")
    listeAlEkranaBas(japonMenu)
})

cin.addEventListener("click", () => {
    let cinMenu = menu.filter(yemek => yemek.kategori === "cin")
    listeAlEkranaBas(cinMenu)
})

listeAlEkranaBas(menu)