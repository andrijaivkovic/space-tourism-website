const content = {
  planets: [
    {
      name: "Moon",
      image: {
        imageSource: {
          png: "../../../public/images/destination/image-moon.png",
          webp: "../../../public/images/destination/image-moon.webp",
        },
        imageAlt: "A picture of the Earth's moon.",
      },
      description:
        "See our planet as you've never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you're there take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
      distance: "384000 KM",
      travelTime: "3 days",
    },
    {
      name: "Mars",
      image: {
        imageSource: {
          png: "../../../public/images/destination/image-mars.png",
          webp: "../../../public/images/destination/image-mars.webp",
        },
        imageAlt:
          "A picture of the fourth planet in the Milky Way galaxy, Mars.",
      },
      description:
        "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
      distance: "255 mil. KM",
      travelTime: "9 Months",
    },
    {
      name: "Europa",
      image: {
        imageSource: {
          png: "../../../public/images/destination/image-europa.png",
          webp: "../../../public/images/destination/image-europa.webp",
        },
        imageAlt: "A picture of one of the Jupiter's moons, Europa.",
      },
      description:
        "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
      distance: "628 mil. KM",
      travelTime: "3 Years",
    },
    {
      name: "Titan",
      image: {
        imageSource: {
          png: "../../../public/images/destination/image-titan.png",
          webp: "../../../public/images/destination/image-titan.webp",
        },
        imageAlt: "A picture of one of the Saturn's moons, Titan.",
      },
      description:
        "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
      distance: "1.6 Bil. KM",
      travelTime: "7 Years",
    },
  ],
  crew: [
    {
      name: "Douglas Hurley",
      title: "Commander",
      description:
        "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
      image: {
        imageSource: {
          png: "../../../public/images/crew/image-douglas-hurley.png",
          webp: "../../../public/images/crew/image-douglas-hurley.webp",
        },
        imageAlt: "Douglas Hurley holding his hands up.",
      },
    },
    {
      name: "Mark Shuttleworth",
      title: "Mission Specialist",
      description:
        "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
      image: {
        imageSource: {
          png: "../../../public/images/crew/image-mark-shuttleworth.png",
          webp: "../../../public/images/crew/image-mark-shuttleworth.webp",
        },
        imageAlt: "Mark Shuttleworth holding a microphone",
      },
    },
    {
      name: "Victor Glover",
      title: "Pilot",
      description:
        "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18. He was a crew member of Expedition 64, and served as a station systems flight engineer. ",
      image: {
        imageSource: {
          png: "../../../public/images/crew/image-victor-glover.png",
          webp: "../../../public/images/crew/image-victor-glover.webp",
        },
        imageAlt: "Portrait shot of Victor Glover in a blue NASA jacket",
      },
    },
    {
      name: "Anousheh Ansari",
      title: "Flight Engineer",
      description:
        "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
      image: {
        imageSource: {
          png: "../../../public/images/crew/image-anousheh-ansari.png",
          webp: "../../../public/images/crew/image-anousheh-ansari.webp",
        },
        imageAlt: "Anousheh Ansari holding a microhphone.",
      },
    },
  ],
  tech: [
    {
      name: "Launch vehicle",
      image: {
        imageSource: {
          portrait:
            "../../../public/images/technology/image-launch-vehicle-portrait.jpg",
          landscape:
            "../../../public/images/technology/image-launch-vehicle-landscape.jpg",
        },
        imageAlt: "Launch vehicle at take-off",
      },
      description:
        "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
    },
    {
      name: "Spaceport",
      image: {
        imageSource: {
          portrait:
            "../../../public/images/technology/image-spaceport-portrait.jpg",
          landscape:
            "../../../public/images/technology/image-spaceport-landscape.jpg",
        },
        imageAlt:
          "Wide shot of a spaceport with workers dresssed in blue working on it.",
      },
      description:
        "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
    },
    {
      name: "Space capsule",
      image: {
        imageSource: {
          portrait:
            "../../../public/images/technology/image-space-capsule-portrait.jpg",
          landscape:
            "../../../public/images/technology/image-space-capsule-landscape.jpg",
        },
        imageAlt: "A white space capsule in space.",
      },
      description:
        "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
    },
  ],
};

export { content };
