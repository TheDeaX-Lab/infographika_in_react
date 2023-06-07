import re
s = input()
t = input()
ptn = re.compile("(" + re.escape(t) + ")")
lst = []
i = 0
while True:
    mtch = ptn.search(s, pos=i)
    if mtch:
        lst.append(mtch.start())
        i = mtch.start() + 1
    else:
        break
print(*lst)