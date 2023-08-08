n, m, q = map(int, input().split(' '))

data_centers = [
    {'r': 0,
     'a': m,
     'seen': [],
     } for _ in range(n)
]

for _ in range(q):
    action, *args = input().split(' ')
    if action == 'RESET':
        i = int(args[0])-1
        data_centers[i]['r'] += 1
        data_centers[i]['a'] = m
        data_centers[i]['seen'].clear()
    elif action == 'DISABLE':
        i, j = map(int, args)
        if j not in data_centers[i-1]['seen']:
            data_centers[i-1]['a'] -= 1
            data_centers[i-1]['seen'].append(j)
    elif action == 'GETMAX':
        max_i = -1
        max_val = -1
        for i in range(n):
            val = data_centers[i]['r'] * data_centers[i]['a']
            if val > max_val:
                max_i = i
                max_val = val
        print(max_i+1)
    elif action == 'GETMIN':
        min_i = None
        min_val = None
        for i in range(n):
            val = data_centers[i]['r'] * data_centers[i]['a']
            if min_i == None or val < min_val:
                min_i = i
                min_val = val
        print(min_i+1)
