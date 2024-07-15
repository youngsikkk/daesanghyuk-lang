const fs = require('fs').promises;
const readline = require('readline-sync');

function stringify(unicode) {
  return String.fromCharCode(unicode);
}

async function run(code) {
  const statements = code.trim().split(/[\n~]/).map(line => line.trim());

  if (statements[0] !== '젠장' || !statements.slice(-1)[0].startsWith('이제 나는 숭배해야만 해')) {
    throw new Error('Error: 잘못된 시작 또는 끝입니다. 코드의 시작은 "젠장"으로, 끝은 "이제 나는 숭배해야만 해"로 해야 합니다.');
  }

  const variables = new Array(256).fill(0);
  let pointer = 0;

  const evaluate = (x) => {
    let n = 1;
    const tokens = x.trim().split(' ');
    for (const token of tokens) {
      let num = 0;
      if (!isNaN(token)) {
        num = parseInt(token, 10);
      } else {
        if (token.includes('대')) {
          num += variables[token.split('대').length - 1];
        }
        if (token.includes('.')) {
          num += token.split('.').length - 1;
        }
        if (token.includes(',')) {
          num -= token.split(',').length - 1;
        }
      }
      n *= num;
    }
    return n;
  };

  const execute = async (statement) => {
    if (statement === '') return;

    if (statement.includes('티원') && statement.includes('?')) {
      const [conditionPart, commandPart] = statement.split('?');
      const condition = evaluate(conditionPart.replace('티원', '').trim());
      if (condition !== 0) {
        await execute(commandPart.trim());
      }
      return; // 조건이 거짓이면 다음 줄로 넘어갑니다.
    }

    if (statement.includes('대') && !statement.includes('혁!') && !statement.includes('혁이야') && !statement.includes('혁ㅋ')) {
      const [varPart, valuePart] = statement.split('대');
      const variablePointer = varPart.split('대').length - 1;
      const value = evaluate(valuePart.trim());
      variables[variablePointer] = value;
      return; // 변수 정의 이후 더 이상 실행하지 않음
    }

    if (statement.includes('혁!')) {
      const value = evaluate(statement.split('혁!')[0].trim());
      process.stdout.write(String(value) + '\n'); // 개행 추가
      return;
    }

    if (statement.includes('혁이야')) {
      const value = evaluate(statement.split('혁이야')[0].trim());
      process.stdout.write(stringify(value) + '\n'); // 개행 추가
      return;
    }

    if (statement.includes('혁ㅋ')) {
      const value = evaluate(statement.split('혁ㅋ')[1].trim()); // 명령어 뒤에 오는 인자를 평가
      process.stdout.write(stringify(value) + '\n'); // 개행 추가
      return;
    }

    if (statement.includes('상')) {
      pointer = evaluate(statement.replace('상', '').trim()) - 1;
      return;
    }

    if (statement.includes('신상혁')) {
      process.exit();
    }
  };

  while (pointer < statements.length && !statements[pointer].startsWith('이제 나는 숭배해야만 해')) {
    const statement = statements[pointer++];
    
    await execute(statement);
  }
}

async function bootstrap(path) {
  try {
    try {
      await fs.access(path);
    } catch (e) {
      throw new Error(`Error: ${path} 파일을 찾을 수 없습니다.`);
    }

    await run((await fs.readFile(path, 'utf-8')));
  } catch (e) {
    process.stderr.write(`${e.message}\n`);
  }
}

if (process.argv[2]) bootstrap(process.argv[2]);
