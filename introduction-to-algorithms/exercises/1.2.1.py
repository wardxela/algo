import math

def first(n):
    return 8 * n ** 2

def second(n):
    return 64 * n * math.log2(n)

n = 2

while True:
    if first(n) >= second(n):
      print(f'n = {n}')
      print(f'1: {first(n)}')
      print(f'2: {second(n)}')
      break
    n += 1


# Answer: 44