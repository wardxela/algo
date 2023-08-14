def slow__find_max_subarray(a: list[int]) -> tuple[int, int, int]:
    max = 0
    max_i = -1
    max_j = -1

    for i in range(len(a)):
        sum = 0
        for j in range(i, len(a)):
            sum += a[j]
            if sum > max:
                max = sum
                max_i = i
                max_j = j

    return max, max_i, max_j