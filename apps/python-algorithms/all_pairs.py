from operator import itemgetter


def all_pairs(nums, target):
    result = []
    length = len(nums)
    # словарь, который будет хранить уже использованные числа
    # (по заданию, одно число может быть использовано только один раз)
    used_nums = {i: False for i in range(length)}
    for left_i in range(length):
        if used_nums[left_i]:  # Число уже занято
            continue
        for right_i in range(length):
            if used_nums[right_i]:  # Число уже занято
                continue
            if nums[left_i] + nums[right_i] == target:
                pair = [nums[left_i], nums[right_i]]
                pair.sort()
                result.append(pair)
                # Пометить числа как использованные
                used_nums[left_i] = used_nums[right_i] = True
    result.sort(key=itemgetter(0, 1))
    return result


print(all_pairs([4, 5, 1, 3, 6, 8], 9))
