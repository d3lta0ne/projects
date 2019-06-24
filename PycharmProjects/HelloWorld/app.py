from pathlib import Path

path = Path();
for file in path.glob('*.py'):
    print(file);
#change the format at the end to search specific files


