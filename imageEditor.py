from PIL import Image
import collections
imagePath = "assets/email-logo-old.png"
savePath = "assets/email-logo-new.png"
img = Image.open(imagePath)
img = img.convert("RGBA")
pixelList = list(img.getdata())

s = collections.defaultdict(int)
for p in pixelList:
    s[p[3]] += 1

print(s)
new = []
for p in pixelList:

    if p[3] != 0:
        new.append((255, 255, 255, 255))

    else:
        new.append((255, 255, 255, 0))
img.putdata(new)
img.save(savePath)
