const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "Air Force",
    price: 119,
    colors: [
      {
        code: "black",
        img: "https://5.imimg.com/data5/SELLER/Default/2021/5/VO/TL/KO/86432004/whatsapp-image-2021-04-28-at-4-27-16-pm-500x500.jpeg",
      },
      {
        code: "darkblue",
        img: "./img/air2.png",
      },
    ],
  },
  {
    id: 2,
    title: "Air Jordan",
    price: 149,
    colors: [
      {
        code: "lightgray",
        img: "data:image/jpeg;base64,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",
      },
      {
        code: "green",
        img: "./img/jordan2.png",
      },
    ],
  },
  {
    id: 3,
    title: "Blazer",
    price: 109,
    colors: [
      {
        code: "lightgray",
        img: "./img/blazer.png",
      },
      {
        code: "green",
        img: "./img/blazer2.png",
      },
    ],
  },
  {
    id: 4,
    title: "Crater",
    price: 129,
    colors: [
      {
        code: "black",
        img: "./img/crater.png",
      },
      // {
      //   code: "lightgray",
      //   img: "./img/crater2.png",

      // },
    ],
  },
  {
    id: 5,
    title: "Hippie",
    price: 99,
    colors: [
      {
        code: "gray",
        img: "./img/hippie.png",
      },
      {
        code: "black",
        img: "./img/hippie2.png",
      },
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen product
    choosenProduct = products[index];

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "$" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    //assing new colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});