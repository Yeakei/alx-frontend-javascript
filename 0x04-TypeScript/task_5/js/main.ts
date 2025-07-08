// Define MajorCredits interface with a unique brand
interface MajorCredits {
  credits: number;
  brand: "MajorCredits"; // Brand property for nominal typing
}

// Define MinorCredits interface with a unique brand
interface MinorCredits {
  credits: number;
  brand: "MinorCredits"; // Brand property for nominal typing
}

// Function to sum MajorCredits values
function sumMajorCredits(
  subject1: MajorCredits,
  subject2: MajorCredits
): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: "MajorCredits",
  };
}

// Function to sum MinorCredits values
function sumMinorCredits(
  subject1: MinorCredits,
  subject2: MinorCredits
): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: "MinorCredits",
  };
}

// Example usage
const major1: MajorCredits = { credits: 10, brand: "MajorCredits" };
const major2: MajorCredits = { credits: 20, brand: "MajorCredits" };
const minor1: MinorCredits = { credits: 5, brand: "MinorCredits" };
const minor2: MinorCredits = { credits: 15, brand: "MinorCredits" };

const totalMajor = sumMajorCredits(major1, major2);
const totalMinor = sumMinorCredits(minor1, minor2);

console.log(totalMajor); // Output: { credits: 30, brand: 'MajorCredits' }
console.log(totalMinor); // Output: { credits: 20, brand: 'MinorCredits' }
