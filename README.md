
# Редактор параметров товара

Это простой редактор параметров товара, разработанный с использованием React, TypeScript, Vite и Tailwind CSS. Компонент позволяет редактировать параметры товара, сохранять их значения и получать актуальную структуру данных.

## Структура проекта

- **`ParamEditor.tsx`**: Главный компонент, позволяющий редактировать параметры товара.
- **Типы данных**:
  - `Param`: Описывает параметр товара.
  - `ParamValue`: Описывает значение параметра.
  - `Model`: Описывает модель товара, содержащую список значений параметров и дополнительные свойства.

## Функциональность

1. **Отображение всех параметров**: Все параметры из списка `params` отображаются в форме редактирования.
2. **Редактирование значений**: Пользователь может изменять значения параметров через текстовые поля.
3. **Получение модели**: Метод `getModel()` возвращает актуальную структуру данных товара с проставленными значениями параметров.
