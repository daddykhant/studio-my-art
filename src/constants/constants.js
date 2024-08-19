import {
  carousel2,
  carousel3,
  carousel4,
  familyTn,
  babyTn,
  portraitTn,
} from "../assets/images";

const routeNames = [
  { name: "Home", route: "/" },
  {
    name: "Pricing and Portfolio",
    route: "/pricingandportfolio", // Main link for Pricing and Portfolio
    dropdown: [
      {
        name: "Pre-Wedding",
        route: "/pricingandportfolio/prewedding",
        image: "preWedding",
      },
      {
        name: "Wedding Ceremony",
        route: "/pricingandportfolio/weddingCeremony",
        image: "wedding",
      },
      {
        name: "Signing Ceremony",
        route: "/pricingandportfolio/signingCeremony",
        image: "signing",
      },
      { name: "Family", route: "/pricingandportfolio/family", image: "family" },
      {
        name: "Baby Photography",
        route: "/pricingandportfolio/baby",
        image: "baby",
      },
      {
        name: "Portrait",
        route: "/pricingandportfolio/portrait",
        image: "portrait",
      },
    ],
  },
  { name: "Contact", route: "/contact" },
];

const thumbnails = [
  {
    name: "Pre-Wedding",
    route: "/pricingandportfolio/prewedding",
    image: carousel2,
  },
  {
    name: "Wedding Ceremony",
    route: "/pricingandportfolio/weddingCeremony",
    image: carousel3,
  },
  {
    name: "Wedding Ceremony",
    route: "/pricingandportfolio/weddingCeremony",
    image: carousel4,
  },
  { name: "Family", route: "/pricingandportfolio/family", image: familyTn },
  {
    name: "Baby Photography",
    route: "/pricingandportfolio/baby",
    image: babyTn,
  },
  {
    name: "Portrait",
    route: "/pricingandportfolio/portrait",
    image: portraitTn,
  },
];

const images = [
  {
    image: portraitTn,
    alt: "landscape",
  },
  {
    image: babyTn,
    alt: "portrait",
  },
  {
    image: portraitTn,
    alt: "landscape",
  },
  {
    image: babyTn,
    alt: "portrait",
  },
  {
    image: portraitTn,
    alt: "landscape",
  },
  {
    image: babyTn,
    alt: "portrait",
  },
  {
    image: portraitTn,
    alt: "landscape",
  },
  {
    image: babyTn,
    alt: "portrait",
  },
  {
    image: portraitTn,
    alt: "landscape",
  },
  {
    image: babyTn,
    alt: "portrait",
  },
  {
    image: babyTn,
    alt: "portrait",
  },
  {
    image: portraitTn,
    alt: "landscape",
  },
  {
    image: babyTn,
    alt: "portrait",
  },
  {
    image: babyTn,
    alt: "portrait",
  },
  {
    image: portraitTn,
    alt: "landscape",
  },
  {
    image: babyTn,
    alt: "portrait",
  },
];

export { routeNames, thumbnails, images };
