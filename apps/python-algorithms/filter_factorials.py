from typing import List


def filter_factorials(nums: List[int]):
    result = []
    for n in nums:
        l = n
        k = 1
        while True:
            l /= k
            if l == 1:
                result.append(n)
                break
            elif int(l) != l:
                break
            k += 1
    return result


print(filter_factorials([1, 2, 3, 4, 5, 6, 7]))
print(filter_factorials([1, 4, 120]))
print(filter_factorials([8, 9, 10]))
