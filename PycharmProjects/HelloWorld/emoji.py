message = input(">");
words = message.split(' ');

emogis = {
    ":)": "😀",
    ":(": "😞",
}

output = "";
for word in words:
    output += emogis.get(word, word) + " ";

print(output);