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
    for (let i = 1; i <= Math.sqrt(numberToBeDecompose); i++) {
      if (numberToBeDecompose % i === 0) {
        const divisor = parseInt(String(numberToBeDecompose / i), 10);

        if (divisor === i) {
          divisors.push(i);
        } else {
          divisors.push(i);
          divisors.push(divisor);

          const primeNumber = CalculateDecompositionUseCase.isPrime(divisor);
          if (primeNumber) {
            primes.push(divisor);
          }
        }

        const primeNumber = CalculateDecompositionUseCase.isPrime(i);
        if (primeNumber) {
          primes.push(i);
        }
      }
    }

    divisors.sort((a, b) => {
      return a - b;
    });

    return {
      divisors: divisors.join(","),
      primes: primes.join(","),
    };
  }

  private static isPrime(number: number) {
    if (number < 2) {
      return false;
    }

    for (let i = 2; i < number; i++) {
      if (number % i === 0) {
        return false;
      }
    }
    return true;
  }
}
