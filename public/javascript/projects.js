// Array of 5 images with captions for Caleb's Kitchen
const images1 = [
  {
    src: "public/images/calebs.png",
    caption: "Calebs",
  },
  {
    src: "public/images/calebs_menu.png",
    caption: "Menu: Browse and select food items available for order.",
  },
  {
    src: "public/images/calebs_cart.png",
    caption: "Cart: Add selected items to the cart for ordering.",
  },
  {
    src: "public/images/calebs_checout.png",
    caption: "Checkout: Specify payment amount for the rider to bring change.",
  },
  {
    src: "public/images/calebs_track.png",
    caption: "Track: Monitor your order status in real-time until delivery.",
  },
];

let currentIndex1 = 0;
const mainImage1 = document.getElementById("mainImage1");
const imageCaption1 = document.getElementById("imageCaption1");

document.getElementById("nextFeature1").addEventListener("click", () => {
  currentIndex1 = (currentIndex1 + 1) % images1.length;
  mainImage1.src = images1[currentIndex1].src;
  imageCaption1.textContent = images1[currentIndex1].caption;
});

document.getElementById("prevFeature1").addEventListener("click", () => {
  currentIndex1 = (currentIndex1 - 1 + images1.length) % images1.length;
  mainImage1.src = images1[currentIndex1].src;
  imageCaption1.textContent = images1[currentIndex1].caption;
});
// Project 3 features (pairs of 2)
const features3 = [
  [
    {
      src: "public/images/sprinkl_theme1.png",
      caption: "Default design with the system’s standard background color.",
    },
    {
      src: "public/images/sprinkl_theme2.png",
      caption:
        "Customizable theme that allows users to select available background colors in the theme settings.",
    },
  ],
  [
    {
      src: "public/images/sprinkl_post1.png",
      caption:
        "Post 1: The interface where users can compose and prepare the content they wish to share, including text and images.",
    },
    {
      src: "public/images/sprinkl_post2.png",
      caption:
        "Post 2: A published post as it appears in the feed after submission, showcasing the shared content to other users.",
    },
  ],
  [
    {
      src: "public/images/sprinkl_chat1.png",
      caption:
        "Chat 1: Users can conveniently send messages within the platform, ensuring smooth and direct communication.",
    },
    {
      src: "public/images/sprinkl_chat2.png",
      caption:
        "Chat 2: Recipients receive messages in real time, enabling fast and efficient interaction between users.",
    },
  ],
];

let currentFeature3 = 0;

function updateFeature3() {
  document.getElementById("mainImage3a").src =
    features3[currentFeature3][0].src;
  document.getElementById("imageCaption3a").textContent =
    features3[currentFeature3][0].caption;

  document.getElementById("mainImage3b").src =
    features3[currentFeature3][1].src;
  document.getElementById("imageCaption3b").textContent =
    features3[currentFeature3][1].caption;
}

document.getElementById("nextFeature3").addEventListener("click", () => {
  currentFeature3 = (currentFeature3 + 1) % features3.length;
  updateFeature3();
});

document.getElementById("prevFeature3").addEventListener("click", () => {
  currentFeature3 = (currentFeature3 - 1 + features3.length) % features3.length;
  updateFeature3();
});

// Initialize when modal opens
document
  .getElementById("project3Modal")
  .addEventListener("shown.bs.modal", updateFeature3);

const images4 = [
  {
    src: "public/images/assistant.png",
    caption: "This application is a chatbot assistant for monitoring your mental health, helping determine how depressed you might be, and providing tips based on your responses.",
  },
  {
    src: "public/images/assistantQA.png",
    caption:
      "The chatbot asks questions about your mental health and how you are feeling.",
  },
  {
    src: "public/images/assistantPts.png",
    caption:
      "Each answer you provide is assigned a point value depending on your response.",
  },
  {
    src: "public/images/assistantTips.png",
    caption:
      "Based on your accumulated points, the app provides tips on how critical your mental health is.",
  }
];
let currentImage4 = 0;

const mainImage4 = document.getElementById("mainImage4");
const caption4 = document.getElementById("imageCaption4");
const prevBtn4 = document.getElementById("prevFeature4");
const nextBtn4 = document.getElementById("nextFeature4");

function updateImage4() {
  mainImage4.src = images4[currentImage4].src;
  caption4.textContent = images4[currentImage4].caption;
}

prevBtn4.addEventListener("click", () => {
  currentImage4 = (currentImage4 - 1 + images4.length) % images4.length;
  updateImage4();
});

nextBtn4.addEventListener("click", () => {
  currentImage4 = (currentImage4 + 1) % images4.length;
  updateImage4();
});
