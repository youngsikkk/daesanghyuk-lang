# 대상혁 프로그래밍 언어 (Shout out to T1 Faker)

리그 오브 레전드 명예의 전당에 헌액된 T1 Faker 선수를 기념하기 위한 프로그래밍 언어입니다. 언어를 만들 능력은 없고, 엄랭이 있는 걸 알아서 참고해서 만들어봤습니다. 사실 처음 생각했던 거보다 쉽지 않아서, 문자열 출력 에러나 변수 선언 혼동 등 미완성인 부분도 많고 코드도 조잡합니다. 시간 짬짬이 내서 수정하거나 하겠습니다. 재미삼아 봐주시면 좋겠습니다. 여기까지 오신 것에 감사 인사드립니다. 오신 김에 한 번 외치고 갑시다. **대 상 혁** 

# DSHLang Interpreter

DSHLang Interpreter는 DSHLang 코드를 해석하고 실행하는 Node.js 기반의 인터프리터입니다. 이 인터프리터는 변수 정의, 조건문, ASCII 출력 등을 지원합니다.

## 파일 구조

- `dshlang.js`: DSHLang 인터프리터의 메인 코드.
- `example.dsh`: 테스트할 DSHLang 코드 파일 (예: `Hello, World!` 출력).

## 기능 설명

### 코드 구조

DSHLang 코드는 `젠장` 키워드로 시작하고 `이제 나는 숭배해야만 해` 키워드로 끝납니다. 코드의 각 줄은 명령어로 구성되며, 이 명령어들은 변수 정의, 출력, 조건문 등을 포함할 수 있습니다.

### 주요 기능

1. **변수 정의 (`대`)**

   변수는 `대` 키워드를 사용하여 정의됩니다. 예를 들어, `..대...대`는 변수의 값을 설정합니다.

2. **조건문 (`티원?`)**
  조건문은 `티원?` 키워드를 사용하여 정의됩니다. 조건이 참이면 명령어가 실행되고, 거짓이면 명령어가 실행되지 않습니다.
    ```dsh
    .. 티원? ... 혁! 1
    ```

3. **숫자 출력 (`혁!`)**
  숫자는 `혁!` 키워드를 사용하여 출력됩니다.
    ```dsh
    ... 혁! 3 // 3
    ```
4. **문자 출력 (`혁이야`)**
  ASCII 코드를 문자로 변환하여 출력하려면 `혁이야` 키워드를 사용합니다.
  
5. **ASCII 출력(`혁ㅋ`)**
  ASCII 코드는 `혁ㅋ` 키워드를 사용하여 출력됩니다.
    ```dsh
    .. 혁ㅋ 64 // @
    ```

6. **프로그램 종료 (`신상혁`)**
  `신상혁` 키워드는 프로그램을 종료합니다.

    ```dsh
    신상혁
    ```

## 사용 방법

1. **Node.js 설치**

   이 프로젝트는 Node.js를 필요로 합니다. Node.js가 설치되어 있는지 확인하세요. (추후 다른 언어도 추가해볼 예정입니다.)

2. **dshlang.js 실행**

   터미널을 열고 dshlang.js 파일이 있는 디렉토리로 이동한 후, 다음 명령어를 실행합니다.
  ```sh
  node dshlang.js example.dsh
  ```

## 기여

버그 리포트나 기능 제안을 환영합니다. Pull Request를 보내주시거나 Issue를 등록해주세요. hys7309.dev@gmail.com 으로 메일주셔도 좋습니다.

# Daesanghyuk Programming Language (Shout out to T1 Faker)

I have created a programming language to commemorate T1 Faker, who has been inducted into the League of Legends Hall of Fame. Although I lack the skills to create a complete language, I was inspired by the existence of esoteric languages like "umlang" and gave it a try. It turned out to be more challenging than I initially thought, resulting in some unfinished parts, such as string output errors and variable declaration confusion. The code is somewhat crude, and I plan to make corrections whenever I find time. I hope you find it amusing. Thank you for reading this far. While you're here, let's give a shoutout together:**T1 Faker**

# DSHLang Interpreter

The DSHLang Interpreter is a Node.js-based interpreter that parses and executes DSHLang code. It supports variable definitions, conditional statements, ASCII output, and more.

## File Structure

- `dshlang.js`: The main code for the DSHLang interpreter.
- `example.dsh`: A DSHLang code file for testing (e.g., printing `Hello, World!`).

## Functionality

### Code Structure

DSHLang code starts with the keyword `젠장` and ends with the keyword `이제 나는 숭배해야만 해`. Each line of code consists of commands that may include variable definitions, output, conditional statements, and more.

### Key Features

1. **Variable Definition (`대`)**

   Variables are defined using the `대` keyword. For example, `..대...대` sets the value of a variable.

2. **Conditional Statements (`티원?`)**

   Conditional statements are defined using the `티원?` keyword. If the condition is true, the command is executed; otherwise, it is not.

   ```dsh
   .. 티원? ... 혁! 1
   ```

3. **Number Output (`혁!`)**
  Numbers are printed using the `혁!` keyword.
    ```dsh
    ... 혁! 3 // 3
    ```
4. **Character Output (`혁이야`)**
  To convert an ASCII code to a character and print it, use the `혁이야` keyword.
  
5. **ASCII 출력(`혁ㅋ`)**
  ASCII codes are printed using the `혁ㅋ` keyword.
    ```dsh
    .. 혁ㅋ 64 // @
    ```

6. **Program Termination (`신상혁`)**
  The `신상혁` keyword terminates the program.

    ```dsh
    신상혁
    ```

## Usage

1. **Install Node.js**

   This project requires Node.js. Ensure that Node.js is installed. (I plan to add other languages in the future.)


2. **Run dshlang.js**

   Open the terminal, navigate to the directory containing dshlang.js, and run the following command:
  ```sh
  node dshlang.js example.dsh
  ```

## Contribution

Bug reports and feature suggestions are welcome. Please submit a Pull Request or register an Issue. You can also send an email to hys7309.dev@gmail.com.

