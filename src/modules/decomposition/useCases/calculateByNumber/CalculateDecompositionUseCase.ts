import { AppError } from "@shared/errors/AppError";

interface IRequest {
  numberToBeDecompose: number;
}

export class CalculateDecompositionUseCase {
  public static validParams = ["numberToBeDecompose"];

  async execute({ numberToBeDecompose }: IRequest): Promise<object> {
    if (numberToBeDecompose <= 0) {
      throw new AppError("Number to be decompose must be positive");
    }

    const divisors = [];
    const primes = [];
    for (let i = 0; i <= numberToBeDecompose; i++) {
      if (numberToBeDecompose % i === 0) {
        divisors.push(i);

        const primeNumber = CalculateDecompositionUseCase.isPrime(i);
        if (primeNumber) {
          primes.push(i);
        }
      }
    }
    return {
      divisors: divisors.join(","),
      primes: primes.join(","),
    };
  }

  private static isPrime(number: number) {
    if (number < 2) {
      return false;
    }

    for (let i = 2; i < number; i++)
      if (number % i === 0) {
        return false;
      }
    return number;
  }
}
