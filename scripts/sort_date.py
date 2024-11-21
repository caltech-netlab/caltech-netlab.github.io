def sort(str_input, reverse=True):
    items = str_input.split('  - ')
    date_data = []
    for item in items:
        if item.strip('\n ') == '': continue
        data = [d.strip('\n ') for d in item.split('\n')]
        data = [d for d in data if d != '']
        has_date = False
        for d in data:
            if d[:4] == 'date':
                date_data.append((int(d[-4:]), '\n    '.join(data)))
                has_date = True
                break
        if not has_date:
            print("NO DATE, manually add back:")
            print('  - ' + item)
    date_data.sort(key=lambda x: x[0], reverse=reverse)
    print('  - ' + '\n  - '.join([data[1] for data in date_data]))


if __name__ == '__main__':
    str_input = \
"""
  - role: PreviousPostdoc
    date: 2001 - 2003
    name: Ki-Baek Kim
    description: 
    lineBreak: "<br><br>"
  - role: PreviousPostdoc
    date: 2004 - 2005
    name: Bartek Wydrowski
    description: Google
    portfolio_link: https://www.linkedin.com/in/bartek-wydrowski-2164a4b/
"""
    sort(str_input)