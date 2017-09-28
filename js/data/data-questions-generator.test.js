import assert from 'assert';
import dataQuestionsGenerator from "./data-questions-generator";

const defaultParam = 10; // generator will create array with the default number of elements
const limitQuestions = 10; // if a small database of music, we'll get the cyclic error

describe(`TESTING QUESTIONS GENERATOR`, () => {
  describe(`Call function with parameter that specified number of elements in array`, () => {
    it(`(default param) Generator WITHOUT PARAMS creates array with ${defaultParam} elements`, () => {
      const data = dataQuestionsGenerator();
      assert.equal(defaultParam, data.length, `default param ${defaultParam} = array length ${data.length}`);
    });

    it(`(valid param) Generator with a POSITIVE INTEGER param creates array with the specified number of elements`, () => {
      const testEqual = (param = defaultParam) => {
        const data = dataQuestionsGenerator(param);
        assert.equal(
          param,
          data.length,
          `set param ${param} = array length ${data.length}`
        );
      };
      testEqual(5);
      testEqual(`5`);
      testEqual(undefined);
    });

    it(`(invalid param) Expected EXCEPTION if generator received NOT NUMERIC / NEGATIVE / ZERO / ${limitQuestions}+ value`, () => {
      const throwException = (param) => {
        assert.throws(
          () => dataQuestionsGenerator(param),
          `set param: ${param}`
        )
      };
      throwException(`test`);
      throwException(``);
      throwException(`10test`);
      throwException(null);
      throwException({});
      throwException([]);
      throwException(-20);
      throwException(0);
      throwException(limitQuestions + 1);
    });
  });

  describe(`Check the contents of the created array`, () => {
    it(`Questions in array with the type 'artists' must be UNIQUE`, () => {
      const data = dataQuestionsGenerator();
      let randomQuestionIds = [];
      data.forEach((item) => {
        if (item.questionType === `artist`) {
          randomQuestionIds.push(item.answer.id);
        }
      });
      const uniqueQuestionIds = [...new Set(randomQuestionIds)];
      assert.deepEqual(
        uniqueQuestionIds,
        randomQuestionIds,
        `array includes not unique questions: ${randomQuestionIds} (ids)`
      );
    });
  });
});
