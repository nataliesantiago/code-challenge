function createPortfolioItem(source) {
    return `<a>
                <img class="portfolio-images__img" src="${source}" alt="">
            </a>`
}

function imagesSource() {
    return [
        {
            "url": "images/1.jpg"
        },
        {
            "url": "images/2.jpg"
        },
        {
            "url": "images/3.jpg"
        },
        {
            "url": "images/4.jpg"
        },
        {
            "url": "images/5.jpg"
        },
        {
            "url": "images/6.jpg"
        },
        {
            "url": "images/7.jpg"
        },
        // {
        //     "url": "images/8.jpg"
        // },
        {
            "url": "images/9.jpg"
        },
        {
            "url": "images/10.jpg"
        },
        {
            "url": "images/11.jpg"
        },
        {
            "url": "images/12.jpg"
        },
        {
            "url": "images/13.jpg"
        },
        {
            "url": "images/14.jpg"
        },
        {
            "url": "images/15.jpg"
        }
    ]
}

function createPortfolio() {
    const images = imagesSource();
    images.forEach(item => {
        const element = createPortfolioItem(item.url);
        let porftolio = document.getElementById('portfolio');
        const htmlArticle = document.createElement('article');
        htmlArticle.classList.add('portfolio-images__item');
        htmlArticle.innerHTML = element;
        porftolio.appendChild(htmlArticle);
    });
}

function openMenu() {
    let menu = document.getElementById('open-menu');
    menu.addEventListener("click", function () {
        document.getElementById('main-menu').style.display = "block";
    });
}

function closeMenu() {
    let menu = document.getElementById('close-menu');
    menu.addEventListener("click", function () {
        document.getElementById('main-menu').style.display = "none";
    });
}

window.onload = function () {
    createPortfolio();
    openMenu();
    closeMenu();
};