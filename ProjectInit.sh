rm -rf .git

# Удаляем сам скрипт
rm -- "$0"

git init

git add .
git commit -m "🌱 init: First commit"

echo "Новый git-репозиторий инициализирован с первым коммитом."
