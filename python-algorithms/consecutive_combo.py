from typing import List


def consecutive_combo(arr1: List[str], arr2: List[str]):
    combo = sorted(arr1 + arr2)
    for i in range(len(combo) - 1):
        if combo[i+1] - combo[i] != 1:
            return False
    return True


# Тесты
# print(consecutive_combo([7, 4, 5, 1], [2, 3, 6]))
# print(consecutive_combo([1, 4, 6, 5], [2, 7, 8, 9]))
# print(consecutive_combo([1, 4, 5, 6], [2, 3, 7, 8, 10]))
# print(consecutive_combo([44, 46], [45]))
