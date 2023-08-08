def first(n):
    return 100 * n ** 2


def second(n):
    return 2 ** n

n = 1

while True:
    if first(n) <= second(n):
      print(f'n = {n}')
      print(f'1: {first(n)}')
      print(f'2: {second(n)}')
      break
    n += 1

# Answer 15