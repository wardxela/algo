from re import fullmatch

p = r'([1-9]|[1-9][0-9]|1[0-9][0-9]|2[0-5][0-5])'
ipv4_pattern = rf'^{p}.{p}.{p}.{p}$'


def is_valid(ipv4: str):
    return bool(fullmatch(ipv4_pattern, ipv4))


# Тесты
# print(is_valid("1.2.3.4"))
# print(is_valid("1.2.3"))
# print(is_valid("1.2.3.4.5"))
# print(is_valid("123.45.67.89"))
# print(is_valid("123.456.78.90"))
# print(is_valid("123.045.067.089"))
