n = int(input())  # кол-во веток на дереве
tree = {}  # дерево. ключ - номер ветки, значение - информация о ветке
# (сколько ответвлений, длина ветки, сколько ягод (если есть))

# Ввод данных
for i in range(n):
    length, count, *branches = input().split(' ')
    length = int(length)
    count = int(count)
    tree[i] = {
        'branches': list(map(lambda v: int(v) - 1, branches)) if count != 0 else None,
        'length': int(length),
        'recovery': int(branches[0]) if count == 0 else 0
    }

# Рекурсивная функция, которая путешествует по дереву


def traverse(i, tree, health, min_health=None):
    branch = tree[i]
    health -= branch['length']
    if min_health == None or health < min_health:
        min_health = health
    if branch['branches']:
        for k in branch['branches']:
            health, min_health = traverse(k, tree, health, min_health)
    health += branch['recovery']
    health -= branch['length']
    if health < min_health:
        min_health = health
    return health, min_health


_, min_health = traverse(0, tree, 0)
print(-min_health)
