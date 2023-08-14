def merge(arr: list[int], left: int, mid: int, right: int):
    left_arr: list[int] = []
    right_arr: list[int] = []
    left_arr_len = mid - left
    right_arr_len = right - mid

    for i in range(left, mid):
        left_arr.append(arr[i])

    for i in range(mid, right):
        right_arr.append(arr[i])

    inversions = 0
    i = 0
    j = 0

    print(left_arr, right_arr)

    for k in range(left, right):
        if i == left_arr_len:
            arr[k] = right_arr[j]
            j += 1
        elif j == right_arr_len:
            arr[k] = left_arr[i]
            i += 1
        elif left_arr[i] > right_arr[j]:
            arr[k] = left_arr[i]
            inversions += right_arr_len - j
            i += 1
        else:
            arr[k] = right_arr[j]
            j += 1
    return inversions

def merge_sort_and_count_inversions(arr: list[int], left: int, right: int) -> int:
    if right - left <= 1:
        return 0
    mid = (left + right) // 2
    count_left = merge_sort_and_count_inversions(arr, left, mid)
    count_right = merge_sort_and_count_inversions(arr, mid, right)
    return merge(arr, left, mid, right) + count_left + count_right

def find_inversions(arr: list[int]):
    return merge_sort_and_count_inversions(arr, 0, len(arr))


print(find_inversions([7,1,5,10,9,8,6,2]))

