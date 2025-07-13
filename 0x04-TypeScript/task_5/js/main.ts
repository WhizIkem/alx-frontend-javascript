// main.ts
// create MajorCredits interface that defines a number named credits Add a brand property to each interface in order to uniquely identify each of them
export interface MajorCredits {
  credits: number;
  _majorCreditBrand: void;
}

export interface MinorCredits {
  credits: number;
  _minorCreditBrand: void;
}

// function named sumMajorCredits and takes two arguments subject1 and subject2 and sums the credits of both subjects
export function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits):
  MajorCredits {
  return { credits: subject1.credits + subject2.credits } as MajorCredits;
}

// sum for MinorCredits
export function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits):
  MinorCredits {
  return { credits: subject1.credits + subject2.credits } as MinorCredits;
}
