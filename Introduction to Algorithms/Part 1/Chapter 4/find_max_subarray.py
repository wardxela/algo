def find_max_cross_subarray(arr: list[int], left: int, right: int) -> tuple[int, int, int]:
    mid = (left + right) // 2
    sum = 0
    low: int = None
    high: int = None
    left_sum: int = None
    right_sum: int = None
    for i in range(mid - 1, -1, -1):
        sum += arr[i]
        if left_sum == None or sum > left_sum:
            left_sum = sum
            low = i
    sum = 0
    for i in range(mid, right):
        sum += arr[i]
        if right_sum == None or sum > right_sum:
            right_sum = sum
            high = i
    return left_sum + right_sum, low, high

def _find_max_subarray(arr: list[int], left: int, right: int):
    if right - left == 1:
        return arr[left], left, right
    mid = (left + right) // 2
    left_sum, left_low, left_high = _find_max_subarray(arr, left, mid)
    right_sum, right_low, right_high = _find_max_subarray(arr, mid, right)
    cross_sum, cross_low, cross_high = find_max_cross_subarray(arr, left, right)
    if left_sum >= right_sum and left_sum >= cross_sum:
        return left_sum, left_low, left_high
    elif right_sum >= left_sum and right_sum >= cross_sum:
        return right_sum, right_low, right_high
    else:
        return cross_sum, cross_low, cross_high

def find_max_subarray(arr: list[int]):
    return _find_max_subarray(arr, 0, len(arr))


print(find_max_subarray([7, -1, 2, -3, 4, 5, -9, 7]))
print(find_max_subarray([-3, -1, -4, -5, -8, -2]))