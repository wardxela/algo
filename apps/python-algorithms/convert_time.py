from re import match


def convert_time(time: str):
    time_re = r'^(\d+):(\d+)( (pm|am))?$'
    match_obj = match(time_re, time)
    if not match_obj:
        return 'not supported time format'
    hours, minutes, _, type = match_obj.groups()
    hours = int(hours)
    minutes = int(minutes)
    result_type = ''
    if type == 'am':
        hours %= 12
    elif type == 'pm':
        if hours < 12:
            hours += 12
    else:
        result_type = ' am' if hours < 13 else ' pm'
        if hours == 0:
            hours = 12
        elif hours < 24:
            hours %= 12
    return f'{hours}:{f"0{minutes}" if minutes < 10 else minutes}{result_type}'


print(convert_time('12:00 am'))
print(convert_time('12:00 pm'))
print(convert_time('6:20 pm'))
print(convert_time('21:00'))
print(convert_time('5:05'))
