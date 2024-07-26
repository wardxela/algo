def matrix_sum(a: list[list[int]], b: list[list[int]]):
    c: list[list[int]] = []
    for i in range(len(a)):
        row: list[int] = []
        c.append(row)
        for j in range(len(a)):
            row.append(a[i][j] + b[i][j])
    return c

# TODO

# def square_matrix_multiply_recursive(a: list[list[int]], b: list[list[int]], n0: int, n: int, m0: int, m: int):
#     c = []
#     if n - n0 == 1:
#         c[0] = [a[0][0] * b[0][0]]
#     else:
#         pass
#     return c
