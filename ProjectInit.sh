rm -rf .git

git init
git add .
git commit -m "🌱 init: First commit"

echo "Новый git-репозиторий инициализирован с первым коммитом."

# Удаляем сам скрипт
rm -- "$0"