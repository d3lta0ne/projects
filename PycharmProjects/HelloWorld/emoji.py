def emoji_converter(message):
    words = message.split(' ');

    emogis = {
        ":)": "😀",
        ":(": "😞",
    }

    output = "";
    for word in words:
        output += emogis.get(word, word) + " ";
    return output


message = input("> ");
print(emoji_converter(message));