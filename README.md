# flatten.js
# Реализуйте и экспортируйте по умолчанию функцию flatten, которая делает плоским вложенный массив.

### const list = [1, 2, [3, 5], [[4, 3], 2]];
### expect [1, 2, 3, 5, 4, 3, 2];

### const list = [[1, [5], [], [[-3, 'hi']]], 'string', 10, [[[5]]]];
### expect [1, 5, -3, 'hi', 'string', 10, 5];

### const list = [1, 2, { a: 1 }, [3, 5], 2];
### expect [1, 2, { a: 1 }, 3, 5, 2];
