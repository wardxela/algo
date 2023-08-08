# n = int(input())
# pots = list(map(int, input().split(' ')))
# c = 0
# cant = False
# while True:
#     if cant:
#         print(-1)
#         break
#     if pots[0] == pots[-1]:
#         print(c)
#         break
#     for i in range(0, len(pots) - 1):
#         if pots[i] < pots[-1]:
#             pots[i] += 1
#         elif pots[i] == pots[-1]:
#             break
#         else:
#             cant = True
#             break
#     c += 1

n = int(input())
pots = list(map(int, input().split(' ')))

c = 0
prev_c = 0

for i in range(1, n):
    prev_c = c
    c = pots[i] + c - pots[i-1]
    if c < prev_c:
        c = -1
        break
    if c < 0:
        break

if c < 0:
    print(-1)
else:
    print(c)
