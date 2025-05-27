# 📌  Завдання:

Уяви, що ти розробляєш систему для онлайн-курсів. Створи моделі курсів, користувачів і функціонал для їхньої взаємодії.

# Деталі:

1. Створи type Course з полями:
    - `title: string`
    - `price: number`
    - `level: "beginner" | "intermediate" | "advanced"` (literal type)
    - `tags?: string[]` — необов’язкові
2. Створи `enum UserRole { Student, Instructor, Admin }`
3. Створи `type User` з полями:
    - `id: number`
    - `name: string`
    - `role: UserRole`
    - `contact?: { email?: string, phone?: string }` — використовуй optional chaining при зверненні
4. Створи функцію `enroll(user: User, course: Course): void` — яка виводить:

```
[Ім’я] записаний(а) на курс "[назва]" рівня [level]
```

5. Додай функцію `getDiscountedPrice(course: Course, discount: number | null): number` — яка враховує, що знижка може бути відсутня (nullable).
6. Створи `type Instructor = User & { courses: Course[] }`
7. Створи масив студентів та інструкторів
8. Створи масив `log: [User, Course][]` — історія записів користувачів на курси

# Приклад використання:

```tsx
const course: Course = {
  title: "TypeScript для початківців",
  price: 300,
  level: "beginner"
};

const user: User = {
  id: 1,
  name: "Олександр",
  role: UserRole.Student,
  contact: {
    email: "olex@example.com"
  }
};
```

# 📄 Як запустити
1. Скопіюй код у файл `index.ts`.
2. Відкрий термінал.
3. Запусти команду `npm install`.
4. Запусти команду `npm run start`.
