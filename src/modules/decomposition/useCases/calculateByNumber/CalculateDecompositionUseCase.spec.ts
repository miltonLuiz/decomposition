import { CalculateDecompositionUseCase } from "./CalculateDecompositionUseCase";

let calculateDecomposition: CalculateDecompositionUseCase;

describe("Calculate number decomposition Use Case", () => {
  beforeEach(() => {
    calculateDecomposition = new CalculateDecompositionUseCase();
  });

  it("should be able to calculate a number", async () => {
    const decomposition = await calculateDecomposition.execute({
      numberToBeDecompose: 45,
    });
    const expectedResult = {
      divisors: "1,3,5,9,15,45",
      primes: "3,5",
    };

    expect(decomposition).toEqual(expectedResult);
  });
});
