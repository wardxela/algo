def find_repeating(value: str):
    ch = None
    prev_ch = None
    result = []
    current_ch_info = None
    for i in range(len(value)):
        ch = value[i]
        if ch != prev_ch:
            if prev_ch != None:
                current_ch_info.append(i - 1)
                current_ch_info.append(abs(current_ch_info[-1] - i) + 1)
                result.append(current_ch_info)
            current_ch_info = [ch, i]
        prev_ch = ch
    result.append([*current_ch_info, i, abs(current_ch_info[-1] - i) + 1])
    return result


find_repeating('aabbb')
