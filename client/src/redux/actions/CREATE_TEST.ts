export const createTest = (section: string, questionCount: number, testName :string , isRandom: boolean) => {
    return {
        type: "CREATE_TEST",
        payload: { section, questionCount, testName, isRandom }
    };
};