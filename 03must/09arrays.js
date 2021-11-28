const dogs = [
  {
    id: "dog-1",
    name: "Poodle",
    temperament: [
      "Intelligent",
      "Active",
      "Alert",
      "Faithful",
      "Trainable",
      "Instinctual",
    ],
  },
  {
    id: "dog-2",
    name: "Bernese Mountain Dog",
    temperament: ["Affectionate", "Intelligent", "Loyal", "Faithful"],
  },
  {
    id: "dog-3",
    name: "Labrador Retriever",
    temperament: [
      "Intelligent",
      "Even Tempered",
      "Kind",
      "Agile",
      "Outgoing",
      "Trusting",
      "Gentle",
    ],
  },
  {
    id: "dog-4",
    name: "Husky",
    temperament: [
      "Energetic",
      "Intelligent",
      "Active",
      "Alert",
      "Faithful",
      "Trainable",
      "Instinctual",
    ],
  },
  {
    id: "dog-5",
    name: "Malamute",
    temperament: [
      "Lazy",
      "Intelligent",
      "Active",
      "Alert",
      "Faithful",
      "Trainable",
      "Instinctual",
    ],
  },
];

console.log(dogs.find((dog) => dog.name === "Bernese Mountain Dog"));
console.log(dogs.some((dog) => dog.temperament.includes("Aggressive")));
console.log(dogs.some((dog) => dog.temperament.includes("Trusting")));
console.log(dogs.every((dog) => dog.temperament.includes("Trusting")));
console.log(dogs.every((dog) => dog.temperament.includes("Intelligent")));
console.log(dogs.map((dog) => dog.name));
console.log(dogs.filter((dog) => dog.temperament.includes("Trusting")));
console.log(
  dogs.reduce((allTemperaments, dog) => {
    return [...allTemperaments, ...dog.temperament];
  }, [])
);
console.log(dogs.find((dog) => dog.name === "Husky"));
console.log(dogs.find((dog) => dog.temperament.includes("Lazy")));
console.log(dogs.some((dog) => dog.temperament.includes("Energetic")));
