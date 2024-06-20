//Задание 1
let name = prompt('Введите имя:')
alert('Привет, ' + name + '!')

//Задание 2
let number = prompt('Введите число:')
let degree = prompt('Введите степень, в которую нужно возвести число:')
console.log(number ** degree)

//Задание 4
let str = 'Lorem ipsum'
if (str == 'some text') {
  str = 'another text'
} else {
  str = 'some text'
}
console.log(str)

//Задание 5
let num1 = 6
if (num1 == 0) {
  num1 = 1
} else if (num1 < 0) {
  num1 = 'less then zero'
} else {
  num1 *= 10
}
console.log(num1)

//Задание 6
let num2 = Number(prompt('Введите число:'))
let result
if (num2 < 5) {
  result = 0
} else if (num2 > 5) {
  result = 1
}
console.log(result)

//Задание 7
let num3 = prompt('Введите первое число:')
let num4 = prompt('Введите второе число:')
if (num3 > num4) {
  console.log('Большее число: ' + num3)
} else if (num3 < num4) {
  console.log('Большее число: ' + num4)
} else {
  console.log('Числа равны')
}

//Задание 8
let num5 = prompt('Введите первое число:')
let num6 = prompt('Введите второе число:')
if (num5 % num6 == 0) {
  console.log('Число ' + num5 + ' кратно ' + num6)
} else {
  console.log('Число ' + num5 + ' не кратно ' + num6)
}

//Задание 9
let grade = prompt('Введите средний балл:')
if (grade <= 4 && grade >= 1) {
  console.log('Двоечник, иди учись!')
} else if (grade <= 8 && grade >= 5) {
  console.log('Неплохо, но давай еще поднажмем!')
} else if (grade == 9 || grade == 10) {
  console.log('"Ого, да ты настоящий отличник!')
}

//Задание 10
let grade2 = prompt('Введите балл за экзамен (от 0 до 100):')
let quantity = prompt(
  'Введите количество выполненных проектов (от 0 и больше):',
)
if (grade2 > 90 || quantity > 10) {
  console.log('Общий выпускной балл - 100')
} else if (grade2 > 75 && quantity >= 5) {
  console.log('Общий выпускной балл - 90')
} else if (grade2 > 50 && quantity >= 2) {
  console.log('Общий выпускной балл - 75')
} else {
  console.log('Общий выпускной балл - 0')
}

//Задание 11
let rent = 40
let cost
let day = prompt('Введите количество дней аренды автомобиля:')
if (day >= 7) {
  cost = rent * day - 50
} else if (day >= 3) {
  cost = rent * day - 20
} else {
  cost = rent * day
}
console.log(cost)
